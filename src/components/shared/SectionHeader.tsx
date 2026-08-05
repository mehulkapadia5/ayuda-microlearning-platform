'use client';
import { useRouter } from 'next/navigation';

export default function SectionHeader({ title, actionLabel, actionHref }: { title: string; actionLabel?: string; actionHref?: string }) {
  const router = useRouter();
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 16 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', margin: 0, letterSpacing: '-0.01em' }}>{title}</h2>
      {actionLabel && actionHref && (
        <button onClick={() => router.push(actionHref)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, color: 'var(--purple)' }}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
