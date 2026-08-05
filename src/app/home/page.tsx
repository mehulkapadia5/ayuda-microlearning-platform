'use client';
import { motion } from 'framer-motion';
import { tracks, enrolledTracks, getTrackProgress } from '@/lib/mock-data';
import ContinueHero from '@/components/home/ContinueHero';
import CourseProgressCard from '@/components/shared/CourseProgressCard';
import TrackCard from '@/components/home/TrackCard';
import TrackGrid from '@/components/home/TrackGrid';
import SectionHeader from '@/components/shared/SectionHeader';

export default function HomePage() {
  const primary = enrolledTracks.find(t => t.lessons.some(l => l.status === 'in-progress')) || enrolledTracks[0];
  const otherInProgress = enrolledTracks.filter(t => t !== primary);
  const recommended = tracks.filter(t => !getTrackProgress(t).started);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="content">
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 15, color: 'var(--text-3)', margin: '0 0 4px' }}>Good morning, Rahul</p>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text)', margin: 0, letterSpacing: '-0.02em' }}>Ready for today&apos;s 10 minutes?</h1>
      </div>

      {primary && (
        <section style={{ marginBottom: 40 }}>
          <ContinueHero track={primary} />
        </section>
      )}

      {otherInProgress.length > 0 && (
        <section style={{ marginBottom: 40 }}>
          <SectionHeader title="Continue learning" actionLabel="My Learning" actionHref="/learning" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {otherInProgress.map(t => <CourseProgressCard key={t.id} track={t} />)}
          </div>
        </section>
      )}

      <section>
        <SectionHeader title="Recommended for you" actionLabel="Explore all" actionHref="/explore" />
        {recommended.length > 0 ? (
          <TrackGrid tracks={recommended} />
        ) : (
          <div className="track-grid">{tracks.slice(0, 4).map(t => <TrackCard key={t.id} track={t} />)}</div>
        )}
      </section>
    </motion.div>
  );
}
