'use client';

import { useTheme } from '@/contexts/theme-context/theme-context';

export const DarkModeToggle = () => {
  const { toggleDarkMode, mode } = useTheme();
  return (
    <button
      className="p-1 bg-bamboo-600 rounded-full text-[18px] w-[36px] h-[36px] flex justify-center align-middle"
      onClick={toggleDarkMode}
    >
      {mode === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};
