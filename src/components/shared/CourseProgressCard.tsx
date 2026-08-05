'use client';
import { useRouter } from 'next/navigation';
import { Play } from 'lucide-react';
import { Track } from '@/lib/types';
import { getTrackProgress, getResumeLesson } from '@/lib/mock-data';
import TrackImage from '@/components/shared/TrackImage';

export default function CourseProgressCard({ track }: { track: Track }) {
  const router = useRouter();
  const { completed, total, percent } = getTrackProgress(track);
  const resume = getResumeLesson(track);

  return (
    <div className="card hoverable" onClick={() => router.push(`/track/${track.id}`)} style={{ padding: 18, display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ position: 'relative', width: 56, height: 56, borderRadius: 14, overflow: 'hidden', background: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, flexShrink: 0 }}>
        <TrackImage src={track.image} fallback={<span>{track.emoji}</span>} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', margin: '0 0 8px', lineHeight: 1.3 }}>{track.title}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ flex: 1, height: 6, background: 'var(--purple-light)', borderRadius: 3, minWidth: 60 }}>
            <div style={{ width: `${percent}%`, height: '100%', background: 'var(--purple)', borderRadius: 3 }} />
          </div>
          <span style={{ fontSize: 12, color: 'var(--text-3)', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>{completed}/{total}</span>
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); router.push(`/player/${track.id}/${resume.id}`); }}
        className="btn-primary"
        style={{ padding: '10px 16px', flexShrink: 0 }}
      >
        <Play size={15} fill="#fff" /> Resume
      </button>
    </div>
  );
}
