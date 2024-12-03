'use client';

import { usePathname } from 'next/navigation';
import { DarkModeToggle } from '@/components/dark-mode-toggle/dark-mode-toggle';
import Link from 'next/link';
import { Home } from '@/components/icons/Home';
import { Github } from '@/components/icons/Github';
import { Food } from '@/components/icons/Food';
import { Toolbox } from '@/components/icons/Toolbox';

export const SiteNav = () => {
  const pathname = usePathname();
  const className = 'flex items-center gap-2 link-dark dark:link-light';
  const activeClassName = 'link-active-dark dark:link-active-light';
  return (
    <nav className="flex gap-6 flex-wrap items-center justify-center">
      <DarkModeToggle />
      <Link
        href="/"
        className={`${className} ${pathname === '/' ? activeClassName : ''}`}
      >
        <Home isActive={pathname === '/'} />
        <span className="hidden sm:block">Home</span>
      </Link>
      <Link
        href="/git-projects"
        className={`${className} ${pathname === '/git-projects' ? activeClassName : ''}`}
      >
        <Github isActive={pathname === '/git-projects'} />
        <span className="hidden sm:block">Projects</span>
      </Link>
      <Link
        href="/recipe-blog"
        className={`${className} ${pathname === '/recipe-blog' ? activeClassName : ''}`}
      >
        <Food isActive={pathname === '/recipe-blog'} />
        <span className="hidden sm:block">Recipe blog</span>
      </Link>
      <Link
        href="/toolbox"
        className={`${className} ${pathname === '/toolbox' ? activeClassName : ''}`}
      >
        <Toolbox isActive={pathname === '/toolbox'} />
        <span className="hidden sm:block">Toolbox</span>
      </Link>
    </nav>
  );
  return;
};
