'use client';

import { useTheme } from '@/contexts/theme-context/theme-context';
import Image from 'next/image';

export const DarkModeToggle = () => {
  const { toggleDarkMode, mode } = useTheme();
  return (
    <button
      className="p-1 bg-bamboo-600 rounded-full flex justify-center align-middle"
      onClick={toggleDarkMode}
    >
      {mode === 'dark' ? (
        <Image width={28} height={28} src="/images/sun.svg" alt="sun" />
      ) : (
        <Image width={28} height={28} src="/images/moon.svg" alt="moon" />
      )}
    </button>
  );
};
