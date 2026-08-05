'use client';
import { useRouter } from 'next/navigation';

export default function Logo({ showText = true }: { showText?: boolean }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/home')}
      style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      aria-label="Micro home"
    >
      <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, #7C3AED, #5B21B6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {/* play glyph, short video lessons */}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 2.2 12 7 3 11.8V2.2Z" fill="#fff" /></svg>
      </div>
      {showText && (
        <span className="brand-text" style={{ fontSize: 19, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>Micro</span>
      )}
    </button>
  );
}
