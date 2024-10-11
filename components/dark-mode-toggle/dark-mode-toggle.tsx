'use client';

import { useTheme } from '@/contexts/theme-context/theme-context';

export const DarkModeToggle = () => {
  const { toggleDarkMode, mode } = useTheme();
  return (
    <button
      onClick={() => toggleDarkMode()}
      className="p-4 bg-cyan-700 text-blue-950"
    >
      {mode}
    </button>
  );
};
