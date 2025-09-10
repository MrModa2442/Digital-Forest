// Implemented the SettingsScreen component.
import React, { useState } from 'react';
import { TREES } from '../constants';
import type { Tree } from '../types';
import { useTranslation } from '../i18n';
import { useTheme } from '../theme';

interface SettingsScreenProps {
  onStart: (duration: number, tree: Tree, tag: string) => void;
  onViewForest: () => void;
  onViewProfile: () => void;
  onShowGuide: () => void;
  onSignOut: () => void;
  userName: string;
  coins: number;
  unlockedTrees: string[];
  onUnlockTree: (treeId: string, price: number) => void;
}

const DURATIONS = [1, 15, 25, 30, 45, 60, 90, 120]; // in minutes
const TAGS = ['Work', 'Study', 'Creative', 'Other'];

const SettingsScreen: React.FC<SettingsScreenProps> = ({
  onStart,
  onViewForest,
  onViewProfile,
  onShowGuide,
  onSignOut,
  userName,
  coins,
  unlockedTrees,
  onUnlockTree,
}) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [selectedDuration, setSelectedDuration] = useState(25 * 60);
  const [selectedTree, setSelectedTree] = useState<Tree>(TREES.find(t => unlockedTrees.includes(t.id)) || TREES[0]);
  const [selectedTag, setSelectedTag] = useState<string>('Work');
  const [error, setError] = useState<string>('');
  const [durationMode, setDurationMode] = useState<'preset' | 'slider'>('preset');

  const handleBuyTree = (tree: Tree) => {
    if (coins >= tree.price) {
      onUnlockTree(tree.id, tree.price);
      setSelectedTree(tree);
      setError('');
    } else {
      setError(t('not_enough_coins') as string);
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleSelectTree = (tree: Tree) => {
    if (unlockedTrees.includes(tree.id)) {
      setSelectedTree(tree);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 w-full max-w-md animate-slide-in-fade-in">
      <header className="text-center relative">
        <button
          onClick={toggleTheme}
          className="absolute top-0 left-0 text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-yellow-400 p-2 rounded-full transition-colors"
          aria-label={t('toggle_theme') as string}
        >
          {theme === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          )}
        </button>
        <h1 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300">{t('welcome_message', { name: userName })}</h1>
        <button
          onClick={onSignOut}
          className="absolute top-0 right-0 text-sm text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors font-semibold px-2 py-1"
          aria-label={t('sign_out_button') as string}
        >
          {t('sign_out_button')}
        </button>
        <div className="mt-2 flex items-center justify-center gap-2 text-lg font-semibold text-yellow-600 dark:text-yellow-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a.75.75 0 01.75.75v.552c1.124.228 2.14.71 2.992 1.368l.383-.383a.75.75 0 111.06 1.06l-.382.382c.658.853 1.14 1.869 1.368 2.992h.552a.75.75 0 010 1.5h-.552c-.228 1.124-.71 2.14-1.368 2.992l.382.382a.75.75 0 11-1.06 1.06l-.383-.382c-.853.658-1.869 1.14-2.992 1.368v.552a.75.75 0 01-1.5 0v-.552c-1.124-.228-2.14-.71-2.992-1.368l-.383.382a.75.75 0 11-1.06-1.06l.382-.382c-.658-.853-1.14-1.869-1.368-2.992H3.25a.75.75 0 010-1.5h.552c.228-1.124.71 2.14 1.368-2.992l-.382-.382a.75.75 0 011.06-1.06l.383.382c.853-.658 1.869 1.14 2.992-1.368V2.75A.75.75 0 0110 2zM8.5 7.25a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zM11.5 7.25a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5z"/></svg>
          <span>{t('your_coins')} {coins}</span>
        </div>
      </header>
      
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200">{t('select_tree')}</h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {TREES.map((tree) => {
            const isUnlocked = unlockedTrees.includes(tree.id);
            const isSelected = selectedTree.id === tree.id;
            return (
              <div key={tree.id} className="relative group">
                <button
                  onClick={() => handleSelectTree(tree)}
                  disabled={!isUnlocked}
                  title={t(tree.name as 'tree_oak') as string}
                  className={`w-full aspect-square rounded-lg flex items-center justify-center p-1 transition-all duration-200 ${
                    isSelected ? 'bg-emerald-200 dark:bg-emerald-800 ring-4 ring-emerald-400 dark:ring-emerald-500' : 'bg-slate-100 dark:bg-slate-700'
                  } ${!isUnlocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer group-hover:bg-slate-200 dark:group-hover:bg-slate-600'}`}
                >
                  <img src={tree.growthStages[3]} alt={t(tree.name as 'tree_oak') as string} className="w-full h-full object-contain" />
                </button>
                {!isUnlocked && (
                  <button onClick={() => handleBuyTree(tree)} className="absolute -bottom-1 -right-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-1.5 py-0.5 rounded-full hover:bg-yellow-500 transition-transform active:scale-95 shadow-md" title={t('buy_button', { price: tree.price }) as string}>
                    {tree.price}
                  </button>
                )}
                 {isUnlocked && tree.price > 0 && (
                  <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full h-5 w-5 flex items-center justify-center pointer-events-none">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
       
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200">{t('select_tag_label')}</h2>
        <div className="grid grid-cols-4 gap-3">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors text-sm ${
                selectedTag === tag
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {t(`tag_${tag.toLowerCase()}` as 'tag_work')}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200">{t('select_duration')}</h2>
            <div className="flex items-center p-1 bg-slate-200 dark:bg-slate-700 rounded-full">
                <button onClick={() => setDurationMode('preset')} className={`px-3 py-1 text-sm font-semibold rounded-full transition-all ${durationMode === 'preset' ? 'bg-white dark:bg-slate-600 text-emerald-700 dark:text-emerald-300 shadow' : 'text-slate-500 dark:text-slate-400'}`}>
                    {t('preset_label')}
                </button>
                <button onClick={() => setDurationMode('slider')} className={`px-3 py-1 text-sm font-semibold rounded-full transition-all ${durationMode === 'slider' ? 'bg-white dark:bg-slate-600 text-emerald-700 dark:text-emerald-300 shadow' : 'text-slate-500 dark:text-slate-400'}`}>
                    {t('slider_label')}
                </button>
            </div>
        </div>

        {durationMode === 'preset' ? (
            <div className="grid grid-cols-4 gap-3">
            {DURATIONS.map((min) => (
                <button
                key={min}
                onClick={() => setSelectedDuration(min * 60)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedDuration === min * 60
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
                >
                {t(min === 1 ? 'minute_one' : 'minutes_other', { count: min })}
                </button>
            ))}
            </div>
        ) : (
            <div className="space-y-2 pt-2">
                <input
                    type="range"
                    min={1 * 60}
                    max={180 * 60}
                    step={1 * 60}
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer accent-emerald-600 dark:accent-emerald-500"
                />
                <p className="text-center text-lg font-semibold text-emerald-700 dark:text-emerald-300">
                    {t('minutes_other', { count: selectedDuration / 60 })}
                </p>
            </div>
        )}
      </div>

      {error && <p className="text-red-500 text-sm text-center font-semibold animate-shake">{error}</p>}
      
      <div className="pt-4 space-y-3">
        <button
          onClick={() => onStart(selectedDuration, selectedTree, selectedTag)}
          className="w-full bg-emerald-600 text-white font-bold py-3 px-6 rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-400 transform hover:scale-105 active:scale-100 transition-transform duration-200"
        >
          {t('start_button')}
        </button>
        <div className="flex gap-3">
           <button
            onClick={onViewProfile}
            className="w-full bg-purple-500 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-400 transition-transform duration-200"
          >
            {t('my_profile_button')}
          </button>
          <button
            onClick={onViewForest}
            className="w-full bg-indigo-500 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-400 transition-transform duration-200"
          >
            {t('view_forest_button')}
          </button>
        </div>
        <button
            onClick={onShowGuide}
            className="w-full bg-slate-500 text-white font-bold py-3 px-6 rounded-full hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-400 transition-transform duration-200"
          >
            {t('guide_button')}
          </button>
      </div>
    </div>
  );
};

export default SettingsScreen;