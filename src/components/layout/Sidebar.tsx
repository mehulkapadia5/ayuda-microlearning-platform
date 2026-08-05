'use client';
import { usePathname, useRouter } from 'next/navigation';
import Logo from './Logo';
import { NAV, isNavActive } from './nav-items';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="sidebar">
      <div style={{ padding: '0 6px', marginBottom: 28 }}>
        <Logo />
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {NAV.map((item) => {
          const Icon = item.icon;
          const active = isNavActive(item.href, pathname);
          return (
            <button key={item.href} className={`nav-item${active ? ' active' : ''}`} onClick={() => router.push(item.href)}>
              <Icon size={19} strokeWidth={active ? 2.4 : 2} />
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <button
        onClick={() => router.push('/profile')}
        style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, background: 'var(--bg-light)', border: '1px solid var(--border)', borderRadius: 12, padding: 10, cursor: 'pointer' }}
      >
        <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #5B21B6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 600, flexShrink: 0 }}>RK</div>
        <div className="user-text" style={{ textAlign: 'left', minWidth: 0 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Rahul Kapoor</p>
          <p style={{ fontSize: 11, color: 'var(--text-3)', margin: 0 }}>Free plan</p>
        </div>
      </button>
    </aside>
  );
}
