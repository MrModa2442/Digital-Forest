

import React, { useState } from 'react';
import { useTranslation } from '../i18n';

interface AuthScreenProps {
  onAuth: (firstName: string, lastName: string) => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onAuth }) => {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      setError(t('auth_error') as string);
      return;
    }
    setError('');
    onAuth(firstName, lastName);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 space-y-6 text-center animate-slide-in-fade-in">
      <div className="flex justify-center items-center">
        <svg className="h-12 w-12 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
          <path d="M12 7v6" />
          <path d="M9 9l6 6" />
          <path d="M15 9l-6 6" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-300">{t('digital_forest')}</h1>
      <p className="text-slate-500 dark:text-slate-400">
        {t('auth_header')}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="sr-only">{t('first_name_placeholder')}</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={t('first_name_placeholder') as string}
            className="w-full px-4 py-3 border border-slate-300 dark:bg-slate-700 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 transition dark:text-white"
            aria-label={t('first_name_placeholder') as string}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="sr-only">{t('last_name_placeholder')}</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={t('last_name_placeholder') as string}
            className="w-full px-4 py-3 border border-slate-300 dark:bg-slate-700 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 transition dark:text-white"
            aria-label={t('last_name_placeholder') as string}
          />
        </div>
        
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white font-bold py-3 px-6 rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-400 transform hover:scale-105 active:scale-100 transition-transform duration-200"
        >
          {t('auth_button')}
        </button>
      </form>
    </div>
  );
};

export default AuthScreen;
