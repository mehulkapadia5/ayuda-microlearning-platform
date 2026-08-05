import { Home, Compass, GraduationCap, User, type LucideIcon } from 'lucide-react';

export type NavItem = { icon: LucideIcon; label: string; href: string; short?: string };

export const NAV: NavItem[] = [
  { icon: Home, label: 'Home', href: '/home' },
  { icon: Compass, label: 'Explore', href: '/explore' },
  { icon: GraduationCap, label: 'My Learning', href: '/learning', short: 'Learning' },
  { icon: User, label: 'Profile', href: '/profile' },
];

export function isNavActive(href: string, pathname: string | null): boolean {
  if (!pathname) return false;
  if (href === '/home') return pathname.startsWith('/home');
  if (href === '/explore') return pathname.startsWith('/explore');
  // Course detail + player belong to the learning journey
  if (href === '/learning') return pathname.startsWith('/learning') || pathname.startsWith('/track') || pathname.startsWith('/player');
  if (href === '/profile') return pathname.startsWith('/profile') || pathname.startsWith('/settings');
  return pathname === href;
}
