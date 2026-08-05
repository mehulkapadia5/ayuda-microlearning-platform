'use client';
import { Track } from '@/lib/types';
import TrackImage from '@/components/shared/TrackImage';

export default function TrackHero({ track }: { track: Track }) {
  return (
    <div
      style={{
        position: 'relative', width: '100%', borderRadius: 18, overflow: 'hidden', marginBottom: 24,
        minHeight: 260, display: 'flex',
        background: 'linear-gradient(120deg, #5B21B6, #7C3AED)',
      }}
    >
      {track.banner ? (
        <>
          {/* full-bleed landscape banner */}
          <TrackImage src={track.banner} objectPosition="center 20%" fallback={<span />} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(20,16,40,0.8) 0%, rgba(20,16,40,0.4) 42%, rgba(20,16,40,0) 72%)' }} />
        </>
      ) : track.image ? (
        /* square image confined to the right, faded into the gradient */
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '48%' }}>
          <TrackImage src={track.image} objectPosition="center 14%" fallback={<span />} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #5B21B6 0%, rgba(91,33,182,0.55) 32%, rgba(91,33,182,0) 70%)' }} />
        </div>
      ) : (
        <div style={{ position: 'absolute', top: 24, right: 28, fontSize: 96, opacity: 0.9 }}>{track.emoji}</div>
      )}

      {/* text */}
      <div style={{ position: 'relative', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#fff', maxWidth: 540 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>{track.category}</span>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2, letterSpacing: '-0.01em' }}>{track.title}</h1>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', fontSize: 14, color: 'rgba(255,255,255,0.9)' }}>
          <span>{track.lessonCount} lessons</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>{track.totalMinutes} min</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>⭐ {track.rating}</span>
        </div>
      </div>
    </div>
  );
}
