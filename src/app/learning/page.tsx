'use client';
import { motion } from 'framer-motion';
import { Award, Flame, Clock, BookOpen } from 'lucide-react';
import { enrolledTracks, getTrackProgress } from '@/lib/mock-data';
import CourseProgressCard from '@/components/shared/CourseProgressCard';
import SectionHeader from '@/components/shared/SectionHeader';

export default function LearningPage() {
  const inProgress = enrolledTracks.filter(t => !getTrackProgress(t).finished);
  const finished = enrolledTracks.filter(t => getTrackProgress(t).finished);

  const stats = [
    { icon: Flame, value: '5', label: 'Day streak' },
    { icon: BookOpen, value: '5', label: 'Lessons done' },
    { icon: Clock, value: '42', label: 'Minutes learned' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="content" style={{ maxWidth: 880 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text)', margin: '0 0 20px', letterSpacing: '-0.02em' }}>My Learning</h1>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12, marginBottom: 36 }}>
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="card" style={{ padding: '18px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 8, minWidth: 0 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--purple-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={18} color="var(--purple)" />
            </div>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', margin: 0, lineHeight: 1 }}>{value}</p>
              <p style={{ fontSize: 12, color: 'var(--text-3)', margin: '5px 0 0' }}>{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* In progress */}
      <section style={{ marginBottom: 40 }}>
        <SectionHeader title="In progress" actionLabel="Find more" actionHref="/explore" />
        {inProgress.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {inProgress.map(t => <CourseProgressCard key={t.id} track={t} />)}
          </div>
        ) : (
          <div className="card" style={{ padding: 28, textAlign: 'center', color: 'var(--text-3)' }}>
            <p style={{ margin: 0, fontSize: 14 }}>Nothing in progress. <a href="/explore" style={{ color: 'var(--purple)', fontWeight: 600 }}>Start a track →</a></p>
          </div>
        )}
      </section>

      {/* Certificates */}
      <section>
        <SectionHeader title="Certificates" />
        {finished.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {finished.map(t => (
              <div key={t.id} className="card" style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--purple-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Award size={22} color="var(--purple)" /></div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', margin: 0 }}>{t.title}</p>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', margin: '2px 0 0' }}>Completed</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card" style={{ padding: 32, textAlign: 'center', borderStyle: 'dashed' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
              <Award size={20} color="var(--text-3)" />
            </div>
            <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', margin: '0 0 4px' }}>No certificates yet</p>
            <p style={{ fontSize: 14, color: 'var(--text-3)', margin: 0 }}>Finish all lessons in a track to earn one.</p>
          </div>
        )}
      </section>
    </motion.div>
  );
}
