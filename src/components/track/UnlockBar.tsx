'use client';
import { Check, Infinity as InfinityIcon, Award, Smartphone } from 'lucide-react';
import { Track } from '@/lib/types';

export default function UnlockBar({ track }: { track: Track }) {
  const save = track.originalPriceInr ? Math.round((1 - track.priceInr / track.originalPriceInr) * 100) : 0;

  const perks = [
    { icon: InfinityIcon, label: 'Lifetime access to all lessons' },
    { icon: Award, label: 'Completion certificate' },
    { icon: Smartphone, label: 'Watch on any device' },
  ];

  return (
    <div className="card" style={{ padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <span style={{ fontSize: 32, fontWeight: 800, color: 'var(--text)' }}>₹{track.priceInr}</span>
        {track.originalPriceInr && (
          <span style={{ fontSize: 16, color: 'var(--text-3)', textDecoration: 'line-through' }}>₹{track.originalPriceInr}</span>
        )}
      </div>
      {save > 0 && (
        <span style={{ display: 'inline-block', marginTop: 8, fontSize: 12, fontWeight: 600, color: 'var(--success)', background: '#ECFDF5', padding: '4px 10px', borderRadius: 999 }}>Save {save}%</span>
      )}

      <button className="btn-primary" style={{ width: '100%', marginTop: 20, padding: '14px' }}>Unlock track</button>

      <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {perks.map(({ icon: Icon, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon size={16} color="var(--purple)" />
            <span style={{ fontSize: 13, color: 'var(--text-2)' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
