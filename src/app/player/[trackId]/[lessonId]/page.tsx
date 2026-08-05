'use client';
import { useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, SkipBack, SkipForward, Clock } from 'lucide-react';
import { getTrack, getLesson } from '@/lib/mock-data';
import VideoPlayer from '@/components/player/VideoPlayer';
import QuickCheck from '@/components/player/QuickCheck';
import PlayerLessonList from '@/components/player/PlayerLessonList';
import KeyTakeaways from '@/components/player/KeyTakeaways';

export default function PlayerPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<'overview' | 'lessons'>('overview');

  const track = getTrack(params.trackId as string);
  const lesson = getLesson(params.trackId as string, params.lessonId as string);

  if (!track || !lesson) {
    return <div className="content" style={{ color: 'var(--text-2)' }}>Lesson not found.</div>;
  }

  const idx = track.lessons.findIndex(l => l.id === lesson.id);
  const prev = track.lessons[idx - 1] || null;
  const next = track.lessons[idx + 1] || null;
  const go = (id: string) => router.push(`/player/${track.id}/${id}`);

  return (
    <div className="content" style={{ maxWidth: 1100 }}>
      <button onClick={() => router.push(`/track/${track.id}`)} className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16, paddingLeft: 12 }}>
        <ChevronLeft size={16} /> {track.title}
      </button>

      <VideoPlayer
        track={track}
        lesson={lesson}
        lessons={track.lessons}
        prevId={prev?.id ?? null}
        nextId={next?.id ?? null}
        defaultFullscreen={searchParams.get('fs') === '1'}
      />

      {/* Title + inline prev/next */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, margin: '20px 0 4px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{lesson.title}</h1>
          <p style={{ fontSize: 14, color: 'var(--text-3)', margin: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span>Lesson {idx + 1} of {track.lessonCount}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Clock size={14} /> {lesson.durationMinutes} min</span>
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => prev && go(prev.id)} disabled={!prev} className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, opacity: prev ? 1 : 0.4, cursor: prev ? 'pointer' : 'not-allowed' }}>
            <SkipBack size={15} /> Prev
          </button>
          <button onClick={() => next && go(next.id)} disabled={!next} className="btn-primary" style={{ padding: '10px 16px', opacity: next ? 1 : 0.4, cursor: next ? 'pointer' : 'not-allowed' }}>
            Next <SkipForward size={15} fill="#fff" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 24, borderBottom: '1px solid var(--border)', margin: '20px 0 24px' }}>
        {([['overview', 'Overview'], ['lessons', 'Lessons']] as const).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 12px', fontSize: 15, fontWeight: 600,
              color: tab === key ? 'var(--purple)' : 'var(--text-3)',
              borderBottom: `2px solid ${tab === key ? 'var(--purple)' : 'transparent'}`, marginBottom: -1 }}
          >
            {label}{key === 'lessons' ? ` (${track.lessonCount})` : ''}
          </button>
        ))}
      </div>

      {tab === 'overview' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <KeyTakeaways lesson={lesson} />
          <QuickCheck quiz={lesson.quiz} />
        </div>
      ) : (
        <PlayerLessonList track={track} current={lesson} />
      )}
    </div>
  );
}
