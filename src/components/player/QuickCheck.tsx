'use client';
import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { Quiz } from '@/lib/types';

export default function QuickCheck({ quiz }: { quiz: Quiz }) {
  const [selected, setSelected] = useState<number | null>(null);

  // reset when the question changes
  useEffect(() => { setSelected(null); }, [quiz.question]);

  const answered = selected !== null;

  return (
    <div className="card" style={{ padding: 20 }}>
      <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--purple)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 10px' }}>Quick check</p>
      <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', margin: '0 0 16px' }}>{quiz.question}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {quiz.options.map((opt, i) => {
          const isCorrect = i === quiz.correctIndex;
          const isPicked = i === selected;
          let bg = 'var(--surface)', border = 'var(--border)', color = 'var(--text)';
          if (answered && isCorrect) { bg = '#ECFDF5'; border = '#10b981'; color = '#065F46'; }
          else if (answered && isPicked) { bg = '#FEF2F2'; border = '#ef4444'; color = '#991B1B'; }
          return (
            <button
              key={i}
              onClick={() => !answered && setSelected(i)}
              disabled={answered}
              style={{ display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left', padding: '12px 14px', borderRadius: 12, border: `1px solid ${border}`, background: bg, color, fontSize: 14, fontWeight: 500, cursor: answered ? 'default' : 'pointer' }}
            >
              <span style={{ flex: 1 }}>{opt}</span>
              {answered && isCorrect && <Check size={17} color="#10b981" />}
              {answered && isPicked && !isCorrect && <X size={17} color="#ef4444" />}
            </button>
          );
        })}
      </div>
      {answered && (
        <p style={{ fontSize: 13, color: selected === quiz.correctIndex ? 'var(--success)' : 'var(--text-2)', margin: '14px 0 0', fontWeight: 600 }}>
          {selected === quiz.correctIndex ? '✓ Correct, nice work!' : 'Not quite, the highlighted answer is right.'}
        </p>
      )}
    </div>
  );
}
