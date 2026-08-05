'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock } from 'lucide-react';

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.3 0 10.1-2 13.7-5.3l-6.3-5.3C29.3 35 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.6 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.6l6.3 5.3C39.9 36.6 44 31 44 24c0-1.3-.1-2.3-.4-3.5z" />
    </svg>
  );
}

export default function AuthForm({ defaultMode = 'login' }: { defaultMode?: 'login' | 'signup' }) {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'signup'>(defaultMode);

  // Demo: any auth action logs you straight in.
  const enter = () => router.push('/home');

  return (
    <div>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
        {mode === 'login' ? 'Welcome back' : 'Create your account'}
      </h2>
      <p style={{ fontSize: 14, color: 'var(--text-3)', margin: '0 0 22px' }}>
        {mode === 'login' ? 'Log in to pick up where you left off.' : 'Start learning in bite-sized lessons.'}
      </p>

      <button onClick={enter} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 48, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, fontSize: 15, fontWeight: 600, color: 'var(--text)', cursor: 'pointer' }}>
        <GoogleIcon /> Continue with Google
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '18px 0' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        <span style={{ fontSize: 12, color: 'var(--text-3)' }}>or</span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>

      <form onSubmit={(e) => { e.preventDefault(); enter(); }}>
        <div style={inputWrap}>
          <Mail size={17} color="var(--text-3)" />
          <input type="email" placeholder="you@email.com" defaultValue="rahul.kapoor@email.com" style={inputStyle} />
        </div>
        <div style={{ ...inputWrap, marginTop: 12 }}>
          <Lock size={17} color="var(--text-3)" />
          <input type="password" placeholder="Password" defaultValue="demo1234" style={inputStyle} />
        </div>
        {mode === 'login' && (
          <div style={{ textAlign: 'right', marginTop: 10 }}>
            <button type="button" onClick={enter} style={linkBtn}>Forgot password?</button>
          </div>
        )}
        <button type="submit" className="btn-primary" style={{ width: '100%', height: 48, marginTop: 16 }}>
          {mode === 'login' ? 'Log in' : 'Create account'}
        </button>
      </form>

      <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--text-3)', margin: '18px 0 0' }}>
        {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
        <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} style={{ ...linkBtn, fontWeight: 700 }}>
          {mode === 'login' ? 'Sign up' : 'Log in'}
        </button>
      </p>
    </div>
  );
}

const inputWrap: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 10, height: 48, padding: '0 14px',
  background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12,
};
const inputStyle: React.CSSProperties = {
  flex: 1, minWidth: 0, background: 'transparent', border: 'none', outline: 'none', fontSize: 15, color: 'var(--text)',
};
const linkBtn: React.CSSProperties = {
  background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, color: 'var(--purple)',
};
