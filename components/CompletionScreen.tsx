

import React from 'react';
import type { Tree } from '../types';
import { useTranslation } from '../i18n';
import TreeDisplay from './TreeDisplay';

interface CompletionScreenProps {
  duration: number;
  tree: Tree;
  onReset: () => void;
  onViewForest: () => void;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ duration, tree, onReset, onViewForest }) => {
  const { t } = useTranslation();
  const durationInMinutes = duration / 60;
  const coinsEarned = Math.ceil(duration / 60);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 space-y-6 flex flex-col items-center justify-between min-h-[500px] text-center animate-slide-in-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-300">{t('completion_header')}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mt-2">
          {t('completion_message', { duration: durationInMinutes })}
        </p>
        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 text-lg font-bold px-4 py-2 rounded-full inline-block">
          {t(coinsEarned === 1 ? 'coins_earned_one' : 'coins_earned_other', { count: coinsEarned })}
        </div>
      </div>

      <div className="w-full h-64 flex items-end justify-center">
        <TreeDisplay tree={tree} progress={1} />
      </div>

      <div className="w-full space-y-3">
        <button
          onClick={onViewForest}
          className="w-full bg-indigo-500 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-400 transform hover:scale-105 active:scale-100 transition-transform duration-200"
        >
          {t('view_forest_label')}
        </button>
        <button
          onClick={onReset}
          className="w-full bg-emerald-600 text-white font-bold py-3 px-6 rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-400 transform hover:scale-105 active:scale-100 transition-transform duration-200"
        >
          {t('focus_again_button')}
        </button>
      </div>
    </div>
  );
};

export default CompletionScreen;
