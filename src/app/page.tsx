'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Zap, Award, Star } from 'lucide-react';
import { tracks } from '@/lib/mock-data';
import TrackImage from '@/components/shared/TrackImage';
import AuthDrawer from '@/components/auth/AuthDrawer';

export default function LandingPage() {
  const [authOpen, setAuthOpen] = useState(false);
  const openAuth = () => setAuthOpen(true);

  const features = [
    { icon: Clock, title: '10-minute lessons', body: 'Learn on your commute, your break, between meetings. No 40-hour courses.' },
    { icon: Zap, title: 'Word-for-word scripts', body: 'Real frameworks you can use the same day: negotiation lines, manager messages, exit plans.' },
    { icon: Award, title: 'Certificates that count', body: 'Finish a track, earn a shareable certificate for your LinkedIn.' },
  ];

  return (
    <div style={{ minHeight: '100vh', paddingBottom: 92 }}>
      {/* Nav */}
      <header style={{ position: 'sticky', top: 0, zIndex: 30, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, #7C3AED, #5B21B6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 2.2 12 7 3 11.8V2.2Z" fill="#fff" /></svg>
          </div>
          <span style={{ fontSize: 19, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>Micro</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={openAuth} className="btn-ghost">Log in</button>
          <button onClick={openAuth} className="btn-primary">Get started</button>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(28px, 7vw, 56px) 24px 40px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, color: 'var(--purple-dark)', background: 'var(--purple-tint)', border: '1px solid var(--border-purple)', padding: '7px 14px', borderRadius: 999, marginBottom: 24 }}>
            <Star size={14} fill="currentColor" /> Trusted by 12,000+ professionals
          </span>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 54px)', fontWeight: 800, color: 'var(--text)', margin: '0 0 18px', lineHeight: 1.1, letterSpacing: '-0.03em', textWrap: 'balance' } as React.CSSProperties}>
            Career skills, in <span style={{ whiteSpace: 'nowrap', background: 'linear-gradient(120deg, #7C3AED, #8B5CF6)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>10-minute</span> lessons.
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2.4vw, 19px)', color: 'var(--text-2)', margin: 0, maxWidth: 560, marginInline: 'auto', lineHeight: 1.6, textWrap: 'pretty' } as React.CSSProperties}>
            Salary negotiation, managing up, surviving toxic workplaces. Practical playbooks you can use the same day, taught by Malay.
          </p>
        </motion.div>
      </section>

      {/* Track showcase */}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '24px 24px 56px' }}>
        <div className="track-grid">
          {tracks.map((t) => (
            <div key={t.id} className="card hoverable" onClick={openAuth} style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 150, position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)', background: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)' }}>
                <TrackImage src={t.image} alt={t.title} objectPosition="center 18%" fallback={<div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44 }}>{t.emoji}</div>} />
              </div>
              <div style={{ padding: 16, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--purple)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 6 }}>{t.category}</span>
                <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', margin: '0 0 6px', lineHeight: 1.3 }}>{t.title}</p>
                <p style={{ fontSize: 13, color: 'var(--text-3)', margin: '0 0 12px' }}>{t.lessonCount} lessons · {t.totalMinutes} min</p>
                <span style={{ marginTop: 'auto', fontSize: 18, fontWeight: 800, color: 'var(--purple)' }}>₹{t.priceInr}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '24px 24px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card" style={{ padding: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--purple-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon size={20} color="var(--purple)" />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', margin: '0 0 8px' }}>{title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-2)', margin: 0, lineHeight: 1.55 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px 56px' }}>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 24, padding: 'clamp(32px, 6vw, 56px)', textAlign: 'center', background: 'linear-gradient(120deg, #5B21B6, #7C3AED 60%, #8B5CF6)', color: '#fff', boxShadow: '0 20px 50px rgba(124,58,237,0.3)' }}>
          <div style={{ position: 'absolute', top: -60, right: -40, width: 240, height: 240, background: 'radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)', pointerEvents: 'none' }} />
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.02em', position: 'relative' }}>Your next 10 minutes, well spent.</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.88)', margin: '0 auto 24px', maxWidth: 480, position: 'relative' }}>Start your first lesson free. No credit card needed.</p>
          <button onClick={openAuth} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--purple-dark)', border: 'none', borderRadius: 12, padding: '14px 28px', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
            Get started <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '24px', textAlign: 'center', fontSize: 13, color: 'var(--text-3)' }}>
        Micro · Skills in minutes, not months
      </footer>

      {/* Sticky bottom CTA */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 40, padding: '12px 16px calc(14px + env(safe-area-inset-bottom, 0px))', background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(20px) saturate(150%)', WebkitBackdropFilter: 'blur(20px) saturate(150%)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 460, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={openAuth} className="btn-primary" style={{ flex: 1, height: 50, fontSize: 16 }}>
            Get started free <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <AuthDrawer open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
