import { Track } from '@/lib/types';
import TrackCard from './TrackCard';

export default function TrackGrid({ tracks }: { tracks: Track[] }) {
  return (
    <div className="track-grid">
      {tracks.map(track => <TrackCard key={track.id} track={track} />)}
    </div>
  );
}
