'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Settings, BookOpen, Award } from 'lucide-react';
import { enrolledTracks, getTrackProgress } from '@/lib/mock-data';
import CourseProgressCard from '@/components/shared/CourseProgressCard';

export default function ProfilePage() {
  const router = useRouter();
  const [tab, setTab] = useState<'progress' | 'completed'>('progress');

  const inProgress = enrolledTracks.filter(t => !getTrackProgress(t).finished);
  const completed = enrolledTracks.filter(t => getTrackProgress(t).finished);

  const stats = [
    { value: '5', label: 'Day streak' },
    { value: '5', label: 'Lessons' },
    { value: '42', label: 'Minutes' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="content" style={{ maxWidth: 760 }}>
      {/* Top: name + settings */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', margin: 0, letterSpacing: '-0.01em' }}>Rahul Kapoor</h1>
        <button onClick={() => router.push('/settings')} aria-label="Settings" style={{ width: 40, height: 40, borderRadius: 10, background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Settings size={22} color="var(--text)" />
        </button>
      </div>

      {/* Avatar + stats */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 18 }}>
        <div style={{ width: 84, height: 84, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #5B21B6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 30, fontWeight: 700, flexShrink: 0, boxShadow: '0 6px 18px rgba(124,58,237,0.3)' }}>RK</div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 20, fontWeight: 800, color: 'var(--text)', margin: 0 }}>{s.value}</p>
              <p style={{ fontSize: 13, color: 'var(--text-3)', margin: '2px 0 0' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div style={{ marginBottom: 18 }}>
        <p style={{ fontSize: 14, color: 'var(--text-2)', margin: '0 0 8px', lineHeight: 1.5 }}>Leveling up my career, 10 minutes a day. 🚀</p>
        <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, color: 'var(--purple-dark)', background: 'var(--purple-tint)', border: '1px solid var(--border-purple)', padding: '3px 10px', borderRadius: 999 }}>Free plan · Member since Jan 2025</span>
      </div>

      {/* Edit profile */}
      <button style={{ width: '100%', height: 42, background: 'var(--bg-light)', border: '1px solid var(--border)', borderRadius: 10, fontSize: 14, fontWeight: 600, color: 'var(--text)', cursor: 'pointer', marginBottom: 28 }}>
        Edit profile
      </button>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: 20 }}>
        {([['progress', 'In progress', BookOpen], ['completed', 'Completed', Award]] as const).map(([key, label, Icon]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 12px', fontSize: 14, fontWeight: 600,
              color: tab === key ? 'var(--purple)' : 'var(--text-3)',
              borderBottom: `2px solid ${tab === key ? 'var(--purple)' : 'transparent'}`, marginBottom: -1 }}
          >
            <Icon size={17} /> {label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === 'progress' ? (
        inProgress.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {inProgress.map(t => <CourseProgressCard key={t.id} track={t} />)}
          </div>
        ) : <Empty icon={BookOpen} title="Nothing in progress" body="Start a track from Explore to see it here." />
      ) : (
        completed.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {completed.map(t => <CourseProgressCard key={t.id} track={t} />)}
          </div>
        ) : <Empty icon={Award} title="No completed tracks yet" body="Finish all lessons in a track to earn a certificate." />
      )}
    </motion.div>
  );
}

function Empty({ icon: Icon, title, body }: { icon: typeof BookOpen; title: string; body: string }) {
  return (
    <div className="card" style={{ padding: 32, textAlign: 'center', borderStyle: 'dashed' }}>
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
        <Icon size={20} color="var(--text-3)" />
      </div>
      <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', margin: '0 0 4px' }}>{title}</p>
      <p style={{ fontSize: 14, color: 'var(--text-3)', margin: 0 }}>{body}</p>
    </div>
  );
}
