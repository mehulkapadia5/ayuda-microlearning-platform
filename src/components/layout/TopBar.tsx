'use client';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import Logo from './Logo';

export default function TopBar() {
  const router = useRouter();

  return (
    <header className="topbar">
      {/* Mobile-only brand (sidebar is hidden on mobile) */}
      <div className="topbar-brand" style={{ flexShrink: 0 }}>
        <Logo showText={false} />
      </div>

      {/* Search → Explore (hidden on mobile; Explore tab covers it there) */}
      <button
        onClick={() => router.push('/explore')}
        className="topbar-search"
        style={{ flex: 1, maxWidth: 520, alignItems: 'center', gap: 10, height: 42, padding: '0 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, minWidth: 0, cursor: 'pointer', textAlign: 'left' }}
      >
        <Search size={17} color="var(--text-3)" style={{ flexShrink: 0 }} />
        <span style={{ color: 'var(--text-3)', fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Search tracks, topics…</span>
      </button>

      <div style={{ flex: 1 }} />

      <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #5B21B6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, fontWeight: 600, flexShrink: 0 }}>RK</div>
    </header>
  );
}
