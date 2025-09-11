import React, { useState } from 'react';
import { UserStats } from '../types';
import { useTranslation } from '../i18n';
import { ACHIEVEMENTS } from '../constants';
import { useTheme } from '../theme';

interface ProfileScreenProps {
  userStats: UserStats;
  unlockedAchievements: string[];
  onBack: () => void;
  onDeleteProgress: () => void;
}

const THEMES = [
    { id: 'forest', nameKey: 'theme_forest', color: 'bg-[#059669]' },
    { id: 'sunset', nameKey: 'theme_sunset', color: 'bg-[#f97316]' },
    { id: 'misty', nameKey: 'theme_misty', color: 'bg-[#2563eb]' },
] as const;

const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ userStats, unlockedAchievements, onBack, onDeleteProgress }) => {
  const { t } = useTranslation();
  const { themeName, setThemeName } = useTheme();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  
  const plantedCount = userStats.plantedForest.filter(t => !t.withered).length;
  const witheredCount = userStats.plantedForest.length - plantedCount;

  const StatCard: React.FC<{ label: string; value: string | number; icon: React.ReactNode }> = ({ label, value, icon }) => (
    <div className="bg-slate-100 dark:bg-slate-700/50 p-4 rounded-lg text-center">
      <div className="text-[var(--color-primary)] dark:text-[var(--color-primary)] w-8 h-8 mx-auto mb-2">{icon}</div>
      <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{value}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 animate-slide-in-fade-in w-full max-w-md">
      <header className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700">
        <h1 className="text-3xl font-bold text-[var(--color-header-light)] dark:text-[var(--color-header-dark)]">{t('profile_title')}</h1>
        <button
          onClick={onBack}
          className="text-slate-500 dark:text-slate-400 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] font-semibold py-2 px-4 rounded-full transition-colors flex items-center gap-2 hover:bg-[var(--color-primary)]/10 dark:hover:bg-slate-700 active:scale-95"
          aria-label={t('profile_back_button') as string}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          <span className="hidden sm:inline">{t('profile_back_button')}</span>
        </button>
      </header>
      
      <div>
        <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-4">{t('stats_title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label={t('trees_planted') as string} value={plantedCount} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h10a3 3 0 013 3v5a.997.997 0 01-.293-.707zM11 6a1 1 0 10-2 0v3H6a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V6z" /></svg>} />
          <StatCard label={t('withered_trees') as string} value={witheredCount} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.898 0V3a1 1 0 112 0v2.101a7.002 7.002 0 01.445 12.284A1 1 0 0118 18v1a1 1 0 01-1 1h-2.069a1 1 0 01-.95-.69a4.996 4.996 0 00-9.962 0 1 1 0 01-.95.69H3a1 1 0 01-1-1v-1a1 1 0 01.555-.899A7.002 7.002 0 014 5.101V3a1 1 0 011-1zm1 14h10v-2.101a5.002 5.002 0 00-10 0V16z" clipRule="evenodd" /></svg>} />
          <StatCard label={t('total_focused') as string} value={formatTime(userStats.totalFocusTime)} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clipRule="evenodd" /></svg>} />
          <StatCard label={t('current_streak') as string} value={userStats.currentStreak} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45.385c-.345.675-.278 1.484.182 2.15l1.654 1.654a.25.25 0 00.354 0l1.654-1.654C15.11 3.96 15.11 2.885 14.395 2.17a1 1 0 00-1.414 0l-1.59 1.59-1.59-1.59a1 1 0 00-1.414 0c-.715.715-.715 1.79 0 2.505l1.654 1.654a.25.25 0 00.354 0l1.654-1.654c.46-.666.527-1.475.182-2.15a1 1 0 00-1.45-.385zM6.395 2.553a1 1 0 00-1.45.385c-.345.675-.278 1.484.182 2.15l1.654 1.654a.25.25 0 00.354 0l1.654-1.654C9.11 3.96 9.11 2.885 8.395 2.17a1 1 0 00-1.414 0L5.409 3.76 3.82 2.17a1 1 0 00-1.414 0c-.715.715-.715 1.79 0 2.505l1.654 1.654a.25.25 0 00.354 0L6.07 4.706c.46-.666.527-1.475.182-2.15a1 1 0 00-1.45-.385zM13.5 9a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zM6.5 9a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z" clipRule="evenodd" /></svg>} />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-4">{t('achievements_title')}</h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
          {ACHIEVEMENTS.map((ach, i) => {
            const isUnlocked = unlockedAchievements.includes(ach.id);
            const name = t(ach.nameKey as 'ach_first_tree_name') as string;
            const description = t(ach.descriptionKey as 'ach_first_tree_desc') as string;
            const goalLabel = t(ach.goalLabelKey as 'ach_goal_1_tree') as string;
            const title = `${name} - ${description}`;
            
            return (
              <div
                key={ach.id}
                title={title}
                className={`flex flex-col items-center justify-start text-center p-2 rounded-lg transition-all duration-300 ${isUnlocked ? 'bg-amber-100 dark:bg-amber-800/50' : 'bg-slate-100 dark:bg-slate-700/50'}`}
              >
                <div
                  className={`aspect-square w-full transition-all duration-500 ${isUnlocked ? 'opacity-100' : 'opacity-40 filter grayscale'}`}
                  style={isUnlocked ? { animation: `pop-in 0.5s ${i * 50}ms 1 cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`, opacity: 0 } : {}}
                  dangerouslySetInnerHTML={{ __html: ach.badge }}
                />
                <p className={`mt-1 text-xs font-semibold leading-tight ${isUnlocked ? 'text-slate-700 dark:text-amber-200' : 'text-slate-500 dark:text-slate-400'}`}>
                  {goalLabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>

       <div>
        <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-4">{t('select_theme')}</h2>
        <div className="flex justify-around items-center p-2 bg-slate-100 dark:bg-slate-700/50 rounded-full">
            {THEMES.map(theme => (
                <button
                    key={theme.id}
                    onClick={() => setThemeName(theme.id)}
                    title={t(theme.nameKey) as string}
                    className={`w-10 h-10 rounded-full transition-all duration-200 ${theme.color} ${themeName === theme.id ? 'ring-4 ring-offset-2 dark:ring-offset-slate-800 ring-[var(--color-primary)]' : 'ring-2 ring-transparent hover:ring-4'}`}
                />
            ))}
        </div>
      </div>

      <div className="pt-6 mt-2">
        <div className="border-t-4 border-red-500/50 rounded-lg p-4 bg-red-50 dark:bg-red-900/20">
            <h3 className="text-xl font-bold text-red-700 dark:text-red-400">{t('danger_zone_title')}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1 mb-4 text-sm">{t('danger_zone_desc')}</p>
            <button
            onClick={() => setShowConfirmDelete(true)}
            className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-400 transition-all duration-200"
            >
            {t('delete_progress_button')}
            </button>
        </div>
      </div>

      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in-fast">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 m-4 max-w-sm w-full space-y-6 text-center animate-pop-in">
                <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">{t('delete_confirm_title')}</h2>
                <p className="text-slate-600 dark:text-slate-300">{t('delete_confirm_message')}</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => setShowConfirmDelete(false)}
                        className="w-full bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-100 font-bold py-3 px-6 rounded-full hover:bg-slate-300 dark:hover:bg-slate-500 transition-transform duration-200 active:scale-95"
                    >
                        {t('cancel_button')}
                    </button>
                    <button
                        onClick={onDeleteProgress}
                        className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition-transform duration-200 active:scale-95"
                    >
                        {t('delete_button')}
                    </button>
                </div>
            </div>
        </div>
    )}

    </div>
  );
};

export default ProfileScreen;