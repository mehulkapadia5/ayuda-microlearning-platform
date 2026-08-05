'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Bell, Globe, Shield, HelpCircle, Info, LogOut, ChevronRight, Crown, type LucideIcon } from 'lucide-react';

export default function SettingsPage() {
  const router = useRouter();

  const groups: { title: string; items: { icon: LucideIcon; label: string }[] }[] = [
    { title: 'Preferences', items: [
      { icon: Bell, label: 'Notifications' },
      { icon: Globe, label: 'Language' },
      { icon: Shield, label: 'Privacy' },
    ] },
    { title: 'Support', items: [
      { icon: HelpCircle, label: 'Help & support' },
      { icon: Info, label: 'About Micro' },
    ] },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="content" style={{ maxWidth: 640 }}>
      <button onClick={() => router.push('/profile')} className="btn-ghost" style={{ marginBottom: 20, paddingLeft: 12 }}>
        <ArrowLeft size={16} /> Profile
      </button>

      <h1 style={{ fontSize: 26, fontWeight: 800, color: 'var(--text)', margin: '0 0 24px', letterSpacing: '-0.01em' }}>Settings</h1>

      {/* Go Pro */}
      <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', gap: 16, padding: 22, borderRadius: 16, background: 'linear-gradient(120deg, #5B21B6, #7C3AED)', color: '#fff', marginBottom: 28, boxShadow: '0 10px 28px rgba(124,58,237,0.25)' }}>
        <div style={{ position: 'absolute', top: -40, right: -30, width: 150, height: 150, background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Crown size={22} /></div>
        <div style={{ flex: 1, minWidth: 0, position: 'relative' }}>
          <p style={{ fontSize: 16, fontWeight: 700, margin: '0 0 2px' }}>Go Micro Pro</p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', margin: 0 }}>Unlock every track + weekly drops.</p>
        </div>
        <button style={{ background: '#fff', color: 'var(--purple-dark)', border: 'none', borderRadius: 10, padding: '10px 18px', fontSize: 14, fontWeight: 700, cursor: 'pointer', flexShrink: 0, position: 'relative' }}>Upgrade</button>
      </div>

      {groups.map((group) => (
        <div key={group.title} style={{ marginBottom: 22 }}>
          <p className="section-label">{group.title}</p>
          <div className="card" style={{ overflow: 'hidden' }}>
            {group.items.map(({ icon: Icon, label }, i) => (
              <button key={label} style={rowStyle(i < group.items.length - 1)}>
                <span style={chip('var(--purple-tint)')}><Icon size={17} color="var(--purple)" /></span>
                <span style={{ flex: 1, textAlign: 'left', fontSize: 15, color: 'var(--text)', fontWeight: 500 }}>{label}</span>
                <ChevronRight size={17} color="var(--text-3)" />
              </button>
            ))}
          </div>
        </div>
      ))}

      <button onClick={() => router.push('/')} className="card" style={{ ...rowStyle(false), width: '100%', background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <span style={chip('#FEF2F2')}><LogOut size={17} color="var(--danger)" /></span>
        <span style={{ flex: 1, textAlign: 'left', fontSize: 15, color: 'var(--danger)', fontWeight: 600 }}>Log out</span>
      </button>

      <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-3)', marginTop: 24 }}>Micro v1.0 · Made for focused learners</p>
    </motion.div>
  );
}

const rowStyle = (border: boolean): React.CSSProperties => ({
  display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', cursor: 'pointer',
  background: 'none', border: 'none', borderBottom: border ? '1px solid var(--border)' : 'none', width: '100%',
});
const chip = (bg: string): React.CSSProperties => ({
  width: 34, height: 34, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
});
