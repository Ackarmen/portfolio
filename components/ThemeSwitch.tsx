'use client';

import { useTheme } from '@/context/ThemeContextProvider';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-yellow-400 w-[3rem] h-[3rem] bg-opacity-80 backdrop:blur-[0.5rem] borderBlack shadow-xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <BsMoon title="moon icon" />
      ) : (
        <BsSun title="sun icon" color="black" />
      )}
    </button>
  );
}
