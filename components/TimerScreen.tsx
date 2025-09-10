
import React, { useState, useEffect, useMemo } from 'react';
import type { Tree } from '../types';
import { useTranslation } from '../i18n';
import TreeDisplay from './TreeDisplay';

interface TimerScreenProps {
  duration: number;
  tree: Tree;
  onComplete: () => void;
  onCancel: () => void;
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const TimerScreen: React.FC<TimerScreenProps> = ({ duration, tree, onComplete, onCancel }) => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(duration);
  
  const quotes = t('motivational_quotes') as string[];
  const quote = useMemo(() => quotes[Math.floor(Math.random() * quotes.length)], [quotes]);


  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, onComplete]);

  const progress = (duration - timeLeft) / duration;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 space-y-6 flex flex-col items-center justify-between min-h-[500px] animate-slide-in-fade-in">
      <div className="text-center">
        <p className="text-lg text-slate-500 dark:text-slate-400 italic">"{quote}"</p>
        <h1 className="text-7xl font-bold text-emerald-800 dark:text-emerald-300 tracking-tighter my-4">
          {formatTime(timeLeft)}
        </h1>
      </div>
      
      <div className="w-full h-64 flex items-end justify-center">
        <TreeDisplay tree={tree} progress={progress} />
      </div>

      <button
        onClick={onCancel}
        className="w-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 px-6 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-500 transition-all duration-200 active:scale-95"
      >
        {t('give_up_button')}
      </button>
    </div>
  );
};

export default TimerScreen;
