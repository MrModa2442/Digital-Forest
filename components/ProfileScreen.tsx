import React, { useState, useMemo } from 'react';
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

// --- START: Dashboard Components ---

const TagPieChart: React.FC<{ data: Record<string, number> }> = ({ data }) => {
    const { t } = useTranslation();
    const COLORS = ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-tertiary)', '#f59e0b', '#10b981'];
    
    const total = useMemo(() => Object.values(data).reduce((sum, value) => sum + value, 0), [data]);
    
    if (total === 0) {
        return <div className="text-center text-slate-500 dark:text-slate-400 p-4">{t('no_tagged_sessions')}</div>;
    }

    const chartData = useMemo(() => {
        let cumulativePercent = 0;
        return Object.entries(data).map(([label, value], index) => {
            const percent = value / total;
            const startAngle = cumulativePercent * 360;
            const endAngle = (cumulativePercent + percent) * 360;
            cumulativePercent += percent;
            return {
                label,
                value,
                percent,
                startAngle,
                endAngle,
                color: COLORS[index % COLORS.length]
            };
        });
    }, [data, total]);

    const getArcPath = (startAngle: number, endAngle: number, radius: number) => {
        const start = polarToCartesian(radius, startAngle);
        const end = polarToCartesian(radius, endAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y} L 0 0 Z`;
    };

    const polarToCartesian = (radius: number, angleInDegrees: number) => {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: radius * Math.cos(angleInRadians),
            y: radius * Math.sin(angleInRadians)
        };
    };

    return (
        <div className="flex flex-col md:flex-row items-center gap-4">
            <svg viewBox="-55 -55 110 110" className="w-32 h-32 transform -rotate-90">
                {chartData.map(slice => (
                    <path key={slice.label} d={getArcPath(slice.startAngle, slice.endAngle, 50)} fill={slice.color} />
                ))}
            </svg>
            <ul className="text-sm space-y-1">
                {chartData.map(item => (
                    <li key={item.label} className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{t(`tag_${item.label.toLowerCase()}` as 'tag_work')}</span>
                        <span className="text-slate-500 dark:text-slate-400">({(item.percent * 100).toFixed(1)}%)</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// --- END: Dashboard Components ---

const ProfileScreen: React.FC<ProfileScreenProps> = ({ userStats, unlockedAchievements, onBack, onDeleteProgress }) => {
  const { t, locale, setLocale, availableLocales } = useTranslation();
  const { themeName, setThemeName } = useTheme();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  
  const plantedCount = userStats.plantedForest.filter(t => !t.withered).length;
  const witheredCount = userStats.plantedForest.length - plantedCount;
  
  const dashboardData = useMemo(() => {
    const successfulSessions = userStats.plantedForest.filter(t => !t.withered && t.duration);

    const focusByTag = successfulSessions.reduce((acc, tree) => {
        const tag = tree.tag || 'Other';
        acc[tag] = (acc[tag] || 0) + tree.duration;
        return acc;
    }, {} as Record<string, number>);
    
    return { focusByTag };
  }, [userStats.plantedForest]);

  const StatCard: React.FC<{ label: string; value: string | number; icon: React.ReactNode }> = ({ label, value, icon }) => (
    <div className="bg-slate-100 dark:bg-slate-700/50 p-4 rounded-lg text-center">
      <div className="text-[var(--color-primary)] dark:text-[var(--color-primary)] w-8 h-8 mx-auto mb-2">{icon}</div>
      <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{value}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 animate-slide-in-fade-in w-full max-w-md max-h-[90vh] overflow-y-auto">
      <header className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700 sticky top-0 bg-white dark:bg-slate-800 z-10 -mx-6 sm:-mx-8 px-6 sm:px-8 pt-0">
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
          <StatCard label={t('withered_trees') as string} value={witheredCount} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>} />
          <StatCard label={t('total_focused') as string} value={formatTime(userStats.totalFocusTime)} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>} />
          <StatCard label={t('current_streak') as string} value={userStats.currentStreak} icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M25,48 C 20,40 14,35 14,28 C 12,24 16,20 18,22 C 18,15 25,5 25,5 C 25,5 32,15 32,22 C 34,20 38,24 36,28 C 36,35 30,40 25,48Z" fill="#059669"/>
              <path d="M25,45 C 22,38 18,34 18,28 C 19,25 20,24 22,26 C 22,21 25,12 25,12 C 25,12 28,21 28,26 C 30,24 31,25 32,28 C 32,34 28,38 25,45Z" fill="#34d399"/>
              <path d="M25,42 C 23,38 21,35 21,30 C 22,28 23,28 24,29 C 24,25 25,19 25,19 C 25,19 26,25 26,29 C 27,28 28,28 29,30 C 29,35 27,38 25,42Z" fill="#a7f3d0"/>
            </svg>
          } />
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-4">{t('productivity_dashboard')}</h2>
        <div className="bg-slate-100 dark:bg-slate-700/50 p-4 rounded-lg">
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">{t('focus_by_tag')}</h3>
            <TagPieChart data={dashboardData.focusByTag} />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-4">{t('achievements_title')}</h2>
        <div className="grid grid-cols-4 gap-x-4 gap-y-6">
          {ACHIEVEMENTS.map(ach => {
            const isUnlocked = unlockedAchievements.includes(ach.id);
            const title = `${t(ach.nameKey as 'ach_first_tree_name')}\n${t(ach.descriptionKey as 'ach_first_tree_desc')}\n${isUnlocked ? '' : `(${t(ach.goalLabelKey as 'ach_goal_1_tree')})`}`.trim();

            return (
              <div key={ach.id} className="flex flex-col items-center text-center" title={title}>
                <div className={`relative group w-full aspect-square transition-opacity ${isUnlocked ? 'opacity-100' : 'opacity-40'}`}>
                  <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg p-2" dangerouslySetInnerHTML={{ __html: ach.badge }} />
                  {!isUnlocked && (
                      <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                      </div>
                  )}
                </div>
                <p className={`text-xs mt-2 font-medium w-full truncate ${isUnlocked ? 'text-slate-700 dark:text-slate-200' : 'text-slate-500 dark:text-slate-400'}`}>
                    {isUnlocked ? t(ach.nameKey as 'ach_first_tree_name') : t(ach.goalLabelKey as 'ach_goal_1_tree')}
                </p>
              </div>
            );
          })}
        </div>
      </div>

       <div className="space-y-4 border-t border-slate-200 dark:border-slate-700 pt-6">
            <div>
                <label htmlFor="language-select" className="text-xl font-semibold text-slate-700 dark:text-slate-200 block mb-2">{t('select_language')}</label>
                <select 
                    id="language-select" 
                    value={locale} 
                    onChange={e => setLocale(e.target.value as any)}
                    className="w-full p-2 border border-slate-300 rounded-md dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                >
                    {availableLocales.map(loc => <option key={loc} value={loc}>{loc.toUpperCase()}</option>)}
                </select>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2">{t('select_theme')}</h3>
                <div className="flex gap-4">
                    {THEMES.map(theme => (
                        <button key={theme.id} onClick={() => setThemeName(theme.id)} className={`flex-1 p-2 rounded-md border-2 transition-colors ${themeName === theme.id ? 'border-[var(--color-primary)]' : 'border-transparent'}`}>
                            <span className={`block w-8 h-8 rounded-full ${theme.color} mx-auto`}></span>
                            <span className="block mt-2 text-sm text-center text-slate-600 dark:text-slate-300">{t(theme.nameKey as 'theme_forest')}</span>
                        </button>
                    ))}
                </div>
            </div>
       </div>

      <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
        <h2 className="text-xl font-semibold text-red-600 dark:text-red-500">{t('danger_zone_title')}</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">{t('danger_zone_desc')}</p>
        <button onClick={() => setShowConfirmDelete(true)} className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-400 transition-colors">
          {t('delete_progress_button')}
        </button>
      </div>

      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 animate-fade-in-fast" onClick={() => setShowConfirmDelete(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 m-4 max-w-sm w-full space-y-4 animate-pop-in" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 text-center">{t('delete_confirm_title')}</h3>
            <p className="text-slate-600 dark:text-slate-300 text-center">{t('delete_confirm_message')}</p>
            <div className="flex gap-4 pt-2">
              <button onClick={() => setShowConfirmDelete(false)} className="w-full bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-100 font-bold py-3 rounded-full hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">{t('cancel_button')}</button>
              <button onClick={() => { onDeleteProgress(); setShowConfirmDelete(false); }} className="w-full bg-red-500 text-white font-bold py-3 rounded-full hover:bg-red-600 transition-colors">{t('delete_button')}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileScreen;