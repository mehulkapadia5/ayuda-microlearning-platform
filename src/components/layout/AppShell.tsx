'use client';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import BottomNav from './BottomNav';

// Routes that render full-bleed without the app chrome (sidebar / top bar / bottom nav)
const BARE_ROUTES = ['/', '/login'];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (BARE_ROUTES.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="shell-main">
        <TopBar />
        <main>{children}</main>
      </div>
      <BottomNav />
    </div>
  );
}
