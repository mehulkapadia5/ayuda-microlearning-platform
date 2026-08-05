'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AuthForm from './AuthForm';

export default function AuthDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  // lock background scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(20,16,40,0.45)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
          />
          <motion.div
            key="sheet"
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 320 }}
            style={{
              position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 70,
              width: '100%', maxWidth: 460, margin: '0 auto',
              background: 'var(--surface)', borderRadius: '24px 24px 0 0',
              boxShadow: '0 -12px 40px rgba(20,16,40,0.25)',
              padding: '14px 24px calc(28px + env(safe-area-inset-bottom, 0px))',
            }}
          >
            {/* grabber + close */}
            <div style={{ position: 'relative', height: 20, marginBottom: 8 }}>
              <div style={{ width: 40, height: 5, borderRadius: 3, background: 'var(--border)', position: 'absolute', left: '50%', top: 4, transform: 'translateX(-50%)' }} />
              <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', right: -6, top: -2, width: 34, height: 34, borderRadius: '50%', background: 'var(--bg-light)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <X size={17} color="var(--text-2)" />
              </button>
            </div>
            <AuthForm defaultMode="signup" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
