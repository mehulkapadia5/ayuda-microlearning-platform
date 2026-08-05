'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Play, Pause, Maximize, Minimize, SkipBack, SkipForward } from 'lucide-react';
import { Track, Lesson } from '@/lib/types';

interface Props {
  track: Track;
  lesson: Lesson;
  lessons: Lesson[];
  prevId: string | null;
  nextId: string | null;
  defaultFullscreen?: boolean;
}

function fmt(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function VideoPlayer({ track, lesson, lessons, prevId, nextId, defaultFullscreen = false }: Props) {
  const router = useRouter();
  const DURATION = lesson.durationMinutes * 60;
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(Math.round((lesson.progressPercent ?? 0) / 100 * DURATION));
  const [fullscreen, setFullscreen] = useState(defaultFullscreen);
  const [mounted, setMounted] = useState(false);
  const fsRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // reset playback when lesson changes
  useEffect(() => {
    setElapsed(Math.round((lesson.progressPercent ?? 0) / 100 * DURATION));
    setPlaying(false);
  }, [lesson.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // playback ticker (demo: sped up x12 so the bar is watchable)
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setElapsed(prev => {
        const next = prev + 1;
        if (next >= DURATION) { setPlaying(false); return DURATION; }
        return next;
      });
    }, 1000 / 12);
    return () => clearInterval(t);
  }, [playing, DURATION]);

  // navigate to another lesson, carrying fullscreen state through the URL
  const navigate = useCallback((id: string) => {
    router.push(`/player/${track.id}/${id}${fullscreen ? '?fs=1' : ''}`);
  }, [router, track.id, fullscreen]);

  const enterFs = useCallback(() => {
    setFullscreen(true);
    try { fsRef.current?.requestFullscreen?.().catch(() => {}); } catch { /* overlay works regardless */ }
  }, []);
  const exitFs = useCallback(() => {
    setFullscreen(false);
    try { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); } catch { /* noop */ }
    router.replace(`/player/${track.id}/${lesson.id}`);
  }, [router, track.id, lesson.id]);

  const pct = (elapsed / DURATION) * 100;
  const currentIndex = lessons.findIndex(l => l.id === lesson.id);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    setElapsed(Math.round(ratio * DURATION));
  };

  const Scrubber = () => (
    <div onClick={seek} style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.25)', borderRadius: 3, cursor: 'pointer', position: 'relative' }}>
      <div style={{ width: `${pct}%`, height: '100%', background: '#fff', borderRadius: 3 }} />
      <div style={{ position: 'absolute', top: '50%', left: `${pct}%`, transform: 'translate(-50%,-50%)', width: 13, height: 13, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.4)' }} />
    </div>
  );

  const Stage = ({ big }: { big?: boolean }) => (
    <>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: big ? 220 : 140, opacity: 0.06, userSelect: 'none' }}>{track.emoji}</div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: big ? 480 : 320, height: big ? 480 : 320, background: 'radial-gradient(circle, rgba(124,58,237,0.45) 0%, transparent 70%)', pointerEvents: 'none' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: big ? '18px 24px' : '14px 16px', display: 'flex', gap: 5, zIndex: 5, background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), transparent)' }}>
        {lessons.map((l, i) => (
          <div key={l.id} style={{ flex: 1, height: 3, borderRadius: 2, background: i < currentIndex ? 'rgba(255,255,255,0.85)' : i === currentIndex ? 'var(--purple-mid)' : 'rgba(255,255,255,0.25)' }} />
        ))}
      </div>
      <button
        onClick={() => setPlaying(p => !p)}
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 6, width: big ? 88 : 72, height: big ? 88 : 72, borderRadius: '50%', background: 'var(--purple)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 8px 24px rgba(124,58,237,0.5)' }}
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing ? <Pause size={big ? 34 : 28} color="#fff" fill="#fff" /> : <Play size={big ? 34 : 28} color="#fff" fill="#fff" style={{ marginLeft: 4 }} />}
      </button>
    </>
  );

  return (
    <>
      {/* Inline player */}
      <div className="player-stage">
        <Stage />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 16px 14px', zIndex: 7, background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)', display: 'flex', alignItems: 'center', gap: 14 }}>
          <button onClick={() => setPlaying(p => !p)} style={iconBtn} aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? <Pause size={18} color="#fff" fill="#fff" /> : <Play size={18} color="#fff" fill="#fff" />}
          </button>
          <span style={{ fontSize: 12, color: '#fff', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{fmt(elapsed)} / {fmt(DURATION)}</span>
          <Scrubber />
          <button onClick={enterFs} style={iconBtn} aria-label="Fullscreen"><Maximize size={18} color="#fff" /></button>
        </div>
      </div>

      {/* Fullscreen / theater overlay (portal escapes any transformed ancestor) */}
      {mounted && fullscreen && createPortal(
        <div ref={fsRef} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: '#000', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', color: '#fff' }}>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{track.shortTitle} · {currentIndex + 1} of {lessons.length}</p>
              <p style={{ fontSize: 16, fontWeight: 700, margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{lesson.title}</p>
            </div>
            <button onClick={exitFs} style={{ ...iconBtn, flexShrink: 0 }} aria-label="Exit fullscreen"><Minimize size={20} color="#fff" /></button>
          </div>

          <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
            <div style={{ position: 'relative', width: 'min(100%, calc((100vh - 220px) * 16 / 9))', aspectRatio: '16 / 9', background: '#13111C', borderRadius: 12, overflow: 'hidden', margin: '0 24px' }}>
              <Stage big />
            </div>
          </div>

          <div style={{ padding: '0 28px', display: 'flex', alignItems: 'center', gap: 14, color: '#fff' }}>
            <span style={{ fontSize: 13, fontVariantNumeric: 'tabular-nums' }}>{fmt(elapsed)}</span>
            <Scrubber />
            <span style={{ fontSize: 13, fontVariantNumeric: 'tabular-nums' }}>{fmt(DURATION)}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, padding: '20px 24px 32px' }}>
            <button onClick={() => prevId && navigate(prevId)} disabled={!prevId} style={fsNavBtn(!prevId)}>
              <SkipBack size={18} fill="currentColor" /> Previous
            </button>
            <button onClick={() => setPlaying(p => !p)} style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--purple)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? <Pause size={22} color="#fff" fill="#fff" /> : <Play size={22} color="#fff" fill="#fff" style={{ marginLeft: 2 }} />}
            </button>
            <button onClick={() => nextId && navigate(nextId)} disabled={!nextId} style={fsNavBtn(!nextId)}>
              Next <SkipForward size={18} fill="currentColor" />
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

const iconBtn: React.CSSProperties = {
  width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.12)', border: 'none',
  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0,
};

const fsNavBtn = (disabled: boolean): React.CSSProperties => ({
  display: 'inline-flex', alignItems: 'center', gap: 8,
  background: 'rgba(255,255,255,0.1)', color: '#fff',
  border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12,
  padding: '12px 22px', fontSize: 15, fontWeight: 600,
  cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.35 : 1,
});
