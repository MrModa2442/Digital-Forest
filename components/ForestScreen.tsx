import React, { useMemo } from 'react';
import { PlantedTree } from '../types';
import { TREES } from '../constants';
import { useTranslation } from '../i18n';

interface ForestScreenProps {
  plantedForest: PlantedTree[];
  onBack: () => void;
}

// A simple pseudo-random number generator for consistent layouts
const seededRandom = (seed: number) => {
  let s = Math.sin(seed) * 10000;
  return s - Math.floor(s);
};

const ForestScreen: React.FC<ForestScreenProps> = ({ plantedForest, onBack }) => {
  const { t } = useTranslation();
  
  const positionedTrees = useMemo(() => {
    return plantedForest.slice().reverse().map((plantedTree, index) => {
      const treeData = TREES.find(t => t.id === plantedTree.treeId);
      if (!treeData) return null;

      const seed = index + plantedTree.datePlanted;
      const scale = seededRandom(seed * 10) * 0.4 + 0.8; // Random scale between 0.8 and 1.2
      const left = seededRandom(seed * 20) * 80 + 10; // Random horizontal position between 10% and 90%
      const bottom = seededRandom(seed * 30) * 20 + 5; // Random vertical position on the 'ground'
      
      const finalTransform = `scale(${scale}) translateX(-50%)`;

      return {
        ...plantedTree,
        treeData,
        style: {
          left: `${left}%`,
          bottom: `${bottom}%`,
          '--final-transform': finalTransform,
          transform: finalTransform,
          zIndex: Math.floor(bottom),
          animationDelay: `${index * 100}ms`,
        },
      };
    }).filter(Boolean);
  }, [plantedForest]);


  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8 space-y-4 animate-slide-in-fade-in flex flex-col h-[80vh] max-h-[700px]">
      <header className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-emerald-800 dark:text-emerald-300">{t('my_forest')}</h1>
        <button
          onClick={onBack}
          className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold py-2 px-4 rounded-full transition-colors flex items-center gap-2 hover:bg-emerald-50 dark:hover:bg-slate-700 active:scale-95"
          title={t('forest_back_button') as string}
          aria-label={t('forest_back_button') as string}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">{t('forest_back_button')}</span>
        </button>
      </header>

      <div className="flex-grow bg-gradient-to-b from-sky-200 to-green-300 dark:from-indigo-900 dark:to-slate-800 rounded-lg relative overflow-hidden">
        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-green-500 dark:bg-emerald-800 opacity-80"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-green-600 dark:bg-emerald-900 opacity-60"></div>
      
        {plantedForest.length === 0 ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-center text-green-900 dark:text-indigo-200 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-50" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h10a3 3 0 013 3v5a.997.997 0 01-.293-.707zM11 6a1 1 0 10-2 0v3H6a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V6z" />
            </svg>
            <p className="font-semibold text-lg mt-4">{t('forest_empty_header')}</p>
            <p className="opacity-70 mt-1">{t('forest_empty_message')}</p>
          </div>
        ) : (
          <div className="w-full h-full">
            {positionedTrees.map((item) => {
              if (!item || !item.treeData) return null;
              const finalStageUrl = item.treeData.growthStages[item.treeData.growthStages.length - 1];
              const treeName = t(item.treeData.name as 'tree_oak') as string;
              const date = new Date(item.datePlanted).toLocaleDateString();
              const tag = item.tag ? t(`tag_${item.tag.toLowerCase()}` as 'tag_work') as string : '';

              const titleText = item.withered
                ? treeName
                : (tag 
                    ? t('planted_on_date_with_tag', { treeName, date, tag }) 
                    : t('planted_on_date', { treeName, date })
                  ) as string;

              return (
                <div 
                  key={item.id} 
                  className="absolute w-20 h-20 sm:w-24 sm:h-24 animate-grow-up"
                  style={item.style as React.CSSProperties}
                  title={titleText}
                >
                    <img src={finalStageUrl} alt={treeName} className={`max-w-full max-h-full object-contain drop-shadow-md ${item.withered ? 'tree-withered' : ''}`} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForestScreen;