'use client';
import { usePathname, useRouter } from 'next/navigation';
import { NAV, isNavActive } from './nav-items';

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="bottom-nav">
      {NAV.map((item) => {
        const Icon = item.icon;
        const active = isNavActive(item.href, pathname);
        const isProfile = item.href === '/profile';
        return (
          <button
            key={item.href}
            className={`bottom-nav-item${active ? ' active' : ''}`}
            onClick={() => router.push(item.href)}
            aria-label={item.label}
          >
            {isProfile ? (
              <span className="bottom-nav-avatar">RK</span>
            ) : (
              <Icon size={25} strokeWidth={active ? 2.5 : 1.9} />
            )}
          </button>
        );
      })}
    </nav>
  );
}
