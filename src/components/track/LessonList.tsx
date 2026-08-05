import { Track } from '@/lib/types';
import LessonRow from './LessonRow';

export default function LessonList({ track }: { track: Track }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {track.lessons.map((lesson, i) => (
        <LessonRow key={lesson.id} lesson={lesson} track={track} index={i} />
      ))}
    </div>
  );
}
