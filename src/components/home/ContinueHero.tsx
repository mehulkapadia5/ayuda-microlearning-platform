'use client';
import { useRouter } from 'next/navigation';
import { Play, Clock } from 'lucide-react';
import { Track } from '@/lib/types';
import { getTrackProgress, getResumeLesson } from '@/lib/mock-data';
import TrackImage from '@/components/shared/TrackImage';

export default function ContinueHero({ track }: { track: Track }) {
  const router = useRouter();
  const { percent, completed, total } = getTrackProgress(track);
  const lesson = getResumeLesson(track);
  const lessonIndex = track.lessons.findIndex(l => l.id === lesson.id);
  const open = () => router.push(`/player/${track.id}/${lesson.id}`);

  return (
    <div
      className="hoverable hero-layout"
      onClick={open}
      style={{
        position: 'relative', overflow: 'hidden', borderRadius: 20, minHeight: 200,
        background: 'linear-gradient(120deg, #5B21B6 0%, #7C3AED 60%, #8B5CF6 100%)',
        color: '#fff', boxShadow: '0 14px 36px rgba(124,58,237,0.28)',
      }}
    >
      {/* media */}
      {track.image && (
        <div className="hero-media">
          <TrackImage src={track.image} objectPosition="center 12%" fallback={<span />} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(91,33,182,0.6), rgba(91,33,182,0) 45%)' }} />
        </div>
      )}

      {/* content */}
      <div className="hero-content">
        <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>Jump back in · {track.shortTitle}</span>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: '10px 0 12px', lineHeight: 1.25, letterSpacing: '-0.01em' }}>{lesson.title}</h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18, fontSize: 13, color: 'rgba(255,255,255,0.88)' }}>
          <span>Lesson {lessonIndex + 1} of {total}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Clock size={14} /> {lesson.durationMinutes} min</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, maxWidth: 360, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.25)', borderRadius: 3 }}>
            <div style={{ width: `${percent}%`, height: '100%', background: '#fff', borderRadius: 3 }} />
          </div>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.88)', whiteSpace: 'nowrap' }}>{completed}/{total} done</span>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); open(); }}
          style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--purple-dark)', border: 'none', borderRadius: 12, padding: '14px 22px', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
        >
          <Play size={18} fill="currentColor" /> Resume lesson
        </button>
      </div>
    </div>
  );
}
