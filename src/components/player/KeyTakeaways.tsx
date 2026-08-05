import { Lesson } from '@/lib/types';

export default function KeyTakeaways({ lesson }: { lesson: Lesson }) {
  return (
    <div style={{ marginTop: 28 }}>
      <p className="section-label">Key takeaways</p>
      <div className="card" style={{ padding: 8 }}>
        {lesson.keyTakeaways.map((takeaway, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 14px', borderBottom: i < lesson.keyTakeaways.length - 1 ? '1px solid var(--border)' : 'none' }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--purple-tint)', color: 'var(--purple)', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
            <p style={{ fontSize: 14, color: 'var(--text-2)', margin: 0, lineHeight: 1.55 }}>{takeaway}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
