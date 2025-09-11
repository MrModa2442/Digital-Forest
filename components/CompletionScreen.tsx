


import React from 'react';
import type { Tree, Achievement } from '../types';
import { useTranslation } from '../i18n';
import TreeDisplay from './TreeDisplay';

interface CompletionScreenProps {
  duration: number;
  tree: Tree;
  onReset: () => void;
  onViewForest: () => void;
  completionData: {
    newAchievements: Achievement[];
    streakInfo: { days: number; bonus: number } | null;
  } | null;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ duration, tree, onReset, onViewForest, completionData }) => {
  const { t } = useTranslation();
  const durationInMinutes = duration / 60;
  const coinsEarned = Math.ceil(duration / 60) + (completionData?.streakInfo?.bonus || 0);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 space-y-4 flex flex-col items-center justify-between min-h-[500px] text-center animate-slide-in-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-[var(--color-header-light)] dark:text-[var(--color-header-dark)]">{t('completion_header')}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mt-2">
          {t('completion_message', { duration: durationInMinutes })}
        </p>
        {completionData?.streakInfo && (
            <p className="text-lg text-orange-600 dark:text-orange-400 font-semibold mt-2">
                {t('streak_message', { count: completionData.streakInfo.days })}
            </p>
        )}
        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 text-lg font-bold px-4 py-2 rounded-full inline-flex items-center gap-2">
          <span>{t(coinsEarned === 1 ? 'coins_earned_one' : 'coins_earned_other', { count: coinsEarned })}</span>
          {completionData?.streakInfo && (
            <span className="text-xs bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full dark:bg-orange-800/50 dark:text-orange-200">
                {t('bonus_coins_message', { count: completionData.streakInfo.bonus })}
            </span>
          )}
        </div>
      </div>
      
      {completionData?.newAchievements && completionData.newAchievements.length > 0 && (
          <div className="w-full bg-slate-100 dark:bg-slate-700/50 p-3 rounded-lg">
              <h3 className="font-bold text-[var(--color-primary-hover)] dark:text-[var(--color-header-dark)] mb-2">{t('achievement_unlocked')}</h3>
              <div className="flex justify-center gap-4">
                  {completionData.newAchievements.map(ach => (
                      <div key={ach.id} className="w-16 h-16" title={`${t(ach.nameKey as 'ach_first_tree_name')} - ${t(ach.descriptionKey as 'ach_first_tree_desc')}`}>
                          <div dangerouslySetInnerHTML={{ __html: ach.badge }} />
                      </div>
                  ))}
              </div>
          </div>
      )}

      <div className="w-full h-56 flex items-end justify-center">
        <TreeDisplay tree={tree} progress={1} />
      </div>

      <div className="w-full space-y-3">
        <button
          onClick={onViewForest}
          className="w-full bg-[var(--color-secondary)] text-white font-bold py-3 px-6 rounded-full hover:bg-[var(--color-secondary-hover)] focus:outline-none focus:ring-4 focus:ring-[var(--color-secondary)]/50 transition-transform duration-200"
        >
          {t('view_forest_label')}
        </button>
        <button
          onClick={onReset}
          className="w-full bg-[var(--color-primary)] text-white font-bold py-3 px-6 rounded-full hover:bg-[var(--color-primary-hover)] focus:outline-none focus:ring-4 focus:ring-[var(--color-primary-focus)] transition-transform duration-200"
        >
          {t('focus_again_button')}
        </button>
      </div>
    </div>
  );
};

export default CompletionScreen;