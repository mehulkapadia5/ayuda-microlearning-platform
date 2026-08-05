'use client';
import { useRouter } from 'next/navigation';
import { Check, Play, Lock } from 'lucide-react';
import { Lesson, Track } from '@/lib/types';

export default function LessonRow({ lesson, track, index }: { lesson: Lesson; track: Track; index: number }) {
  const router = useRouter();
  const isLocked = lesson.status === 'locked';

  const handleClick = () => {
    if (!isLocked) router.push(`/player/${track.id}/${lesson.id}`);
  };

  const icon = () => {
    if (lesson.status === 'completed')
      return <div style={{ ...badge, background: 'var(--purple)' }}><Check size={16} color="#fff" /></div>;
    if (lesson.status === 'in-progress')
      return <div style={{ ...badge, background: 'var(--purple-tint)', border: '1.5px solid var(--purple)' }}><Play size={13} color="var(--purple)" fill="var(--purple)" style={{ marginLeft: 2 }} /></div>;
    if (lesson.status === 'free-preview')
      return <div style={{ ...badge, background: 'var(--purple-light)' }}><Play size={13} color="var(--purple)" fill="var(--purple)" style={{ marginLeft: 2 }} /></div>;
    return <div style={{ ...badge, background: 'var(--bg-light)', border: '1px solid var(--border)' }}><Lock size={13} color="var(--text-3)" /></div>;
  };

  return (
    <div
      className={isLocked ? 'card' : 'card hoverable'}
      onClick={handleClick}
      style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', opacity: isLocked ? 0.7 : 1 }}
    >
      {icon()}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', margin: '0 0 2px' }}>
          <span style={{ color: 'var(--text-3)', marginRight: 8, fontVariantNumeric: 'tabular-nums' }}>{String(index + 1).padStart(2, '0')}</span>
          {lesson.title}
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-3)', margin: 0 }}>
          {lesson.durationMinutes} min
          {lesson.status === 'free-preview' && ' · Free preview'}
          {lesson.status === 'completed' && ' · Completed'}
          {lesson.status === 'in-progress' && ` · ${lesson.progressPercent ?? 0}% watched`}
        </p>
      </div>
      {lesson.status === 'free-preview' && (
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--purple)', background: 'var(--purple-tint)', padding: '4px 10px', borderRadius: 999 }}>Free</span>
      )}
    </div>
  );
}

const badge: React.CSSProperties = {
  width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
};
