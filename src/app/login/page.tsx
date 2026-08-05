'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import AuthForm from '@/components/auth/AuthForm';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, position: 'relative' }}>
      <button onClick={() => router.push('/')} className="btn-ghost" style={{ position: 'absolute', top: 24, left: 24 }}>
        <ArrowLeft size={16} /> Back
      </button>

      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
        className="card"
        style={{ width: '100%', maxWidth: 420, padding: 32 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <div style={{ width: 36, height: 36, borderRadius: 11, background: 'linear-gradient(135deg, #7C3AED, #5B21B6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M3 2.2 12 7 3 11.8V2.2Z" fill="#fff" /></svg>
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>Micro</span>
        </div>

        <AuthForm defaultMode="login" />
      </motion.div>
    </div>
  );
}
