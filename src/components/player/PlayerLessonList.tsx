'use client';
import { useRouter } from 'next/navigation';
import { Check, Play, Lock } from 'lucide-react';
import { Track, Lesson } from '@/lib/types';

export default function PlayerLessonList({ track, current }: { track: Track; current: Lesson }) {
  const router = useRouter();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {track.lessons.map((l, i) => {
        const isCurrent = l.id === current.id;
        const locked = l.status === 'locked';
        return (
          <button
            key={l.id}
            onClick={() => !locked && router.push(`/player/${track.id}/${l.id}`)}
            disabled={locked}
            style={{
              display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left', width: '100%',
              padding: '12px 14px', borderRadius: 12, cursor: locked ? 'default' : 'pointer',
              border: `1px solid ${isCurrent ? 'var(--purple)' : 'var(--border)'}`,
              background: isCurrent ? 'var(--purple-tint)' : 'var(--surface)',
              opacity: locked ? 0.6 : 1,
            }}
          >
            <div style={{ width: 30, height: 30, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: l.status === 'completed' ? 'var(--purple)' : isCurrent ? 'var(--purple)' : 'var(--bg-light)',
              border: l.status === 'completed' || isCurrent ? 'none' : '1px solid var(--border)' }}>
              {l.status === 'completed' ? <Check size={15} color="#fff" />
                : locked ? <Lock size={13} color="var(--text-3)" />
                : <Play size={13} color={isCurrent ? '#fff' : 'var(--purple)'} fill={isCurrent ? '#fff' : 'var(--purple)'} style={{ marginLeft: 1 }} />}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 14, fontWeight: isCurrent ? 700 : 500, color: 'var(--text)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <span style={{ color: 'var(--text-3)', marginRight: 8, fontVariantNumeric: 'tabular-nums' }}>{String(i + 1).padStart(2, '0')}</span>
                {l.title}
              </p>
            </div>
            <span style={{ fontSize: 12, color: 'var(--text-3)', flexShrink: 0 }}>{l.durationMinutes}m</span>
          </button>
        );
      })}
    </div>
  );
}
