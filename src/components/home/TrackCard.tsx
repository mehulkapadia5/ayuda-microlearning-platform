'use client';
import { useRouter } from 'next/navigation';
import { Track } from '@/lib/types';
import TrackImage from '@/components/shared/TrackImage';

export default function TrackCard({ track }: { track: Track }) {
  const router = useRouter();
  return (
    <div className="card hoverable" onClick={() => router.push(`/track/${track.id}`)} style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 150, position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)', background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)' }}>
        <TrackImage
          src={track.image}
          alt={track.title}
          objectPosition="center 18%"
          fallback={<div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44 }}>{track.emoji}</div>}
        />
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--purple)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 6 }}>{track.category}</span>
        <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', margin: '0 0 6px', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>{track.title}</p>
        <p style={{ fontSize: 13, color: 'var(--text-3)', margin: '0 0 14px' }}>{track.lessonCount} lessons · {track.totalMinutes} min</p>
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--purple)' }}>₹{track.priceInr}</span>
          {track.originalPriceInr && (
            <span style={{ fontSize: 13, color: 'var(--text-3)', textDecoration: 'line-through' }}>₹{track.originalPriceInr}</span>
          )}
        </div>
      </div>
    </div>
  );
}
