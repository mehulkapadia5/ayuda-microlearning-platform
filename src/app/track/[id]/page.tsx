'use client';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { getTrack } from '@/lib/mock-data';
import TrackHero from '@/components/track/TrackHero';
import LessonList from '@/components/track/LessonList';
import UnlockBar from '@/components/track/UnlockBar';

export default function TrackPage() {
  const params = useParams();
  const router = useRouter();
  const track = getTrack(params.id as string);

  if (!track) {
    return <div className="content" style={{ color: 'var(--text-2)' }}>Track not found.</div>;
  }

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="content">
      <button onClick={() => router.back()} className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24, paddingLeft: 12 }}>
        <ChevronLeft size={16} /> Back
      </button>

      <div className="track-layout">
        <div className="track-main">
          <TrackHero track={track} />
          <div className="card" style={{ padding: 20, marginBottom: 28 }}>
            <p style={{ fontSize: 15, color: 'var(--text-2)', margin: 0, lineHeight: 1.65 }}>{track.description}</p>
          </div>
          <p className="section-label">Lessons</p>
          <LessonList track={track} />
        </div>

        <div className="purchase-rail">
          <UnlockBar track={track} />
        </div>
      </div>
    </motion.div>
  );
}
