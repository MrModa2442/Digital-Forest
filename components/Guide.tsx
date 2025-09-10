// Implemented the Guide component.
import React from 'react';
import { useTranslation } from '../i18n';

interface GuideProps {
  onClose: () => void;
}

const Guide: React.FC<GuideProps> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 animate-fade-in-fast" onClick={onClose}>
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 m-4 max-w-lg w-full space-y-6 text-slate-700 dark:text-slate-200 animate-slide-in-up-fast" onClick={e => e.stopPropagation()}>
        <h2 className="text-3xl font-bold text-emerald-800 dark:text-emerald-300 text-center">{t('guide_title')}</h2>
        
        <div className="space-y-4 text-left">
          <div>
            <h3 className="font-bold text-lg text-emerald-700 dark:text-emerald-400">{t('guide_step_1_title')}</h3>
            <p className="text-slate-600 dark:text-slate-300">{t('guide_step_1_desc')}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-emerald-700 dark:text-emerald-400">{t('guide_step_2_title')}</h3>
            <p className="text-slate-600 dark:text-slate-300">{t('guide_step_2_desc')}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-emerald-700 dark:text-emerald-400">{t('guide_step_3_title')}</h3>
            <p className="text-slate-600 dark:text-slate-300">{t('guide_step_3_desc')}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-emerald-700 dark:text-emerald-400">{t('guide_step_4_title')}</h3>
            <p className="text-slate-600 dark:text-slate-300">{t('guide_step_4_desc')}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-emerald-600 text-white font-bold py-3 px-6 rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-400 transform hover:scale-105 active:scale-100 transition-transform duration-200"
        >
          {t('guide_close_button')}
        </button>
      </div>
    </div>
  );
};

export default Guide;
