// Implemented the main App component to manage application state and render different screens.
import React, { useState, useEffect, useCallback } from 'react';
import { AppState, Tree, PlantedTree } from './types';
import { TREES } from './constants';
import SettingsScreen from './components/SettingsScreen';
import TimerScreen from './components/TimerScreen';
import CompletionScreen from './components/CompletionScreen';
import ForestScreen from './components/ForestScreen';
import SplashScreen from './components/SplashScreen';
import AuthScreen from './components/AuthScreen';
import Guide from './components/Guide';

// Custom hook for using localStorage
// FIX: Update useLocalStorage hook to correctly handle functional updates for state setters,
// by changing the setter's type from `(value: T) => void` to `React.Dispatch<React.SetStateAction<T>>`.
// This allows passing a function to update state based on the previous state, resolving type errors across the component.
const useLocalStorage = <T,>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

interface User {
  firstName: string;
  lastName: string;
}

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [appState, setAppState] = useState<AppState>(AppState.SETTINGS);
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const [showGuide, setShowGuide] = useState(false);
  
  // Timer settings
  const [duration, setDuration] = useState(25 * 60);
  const [selectedTree, setSelectedTree] = useState<Tree>(TREES[0]);
  
  // Game state
  const [plantedForest, setPlantedForest] = useLocalStorage<PlantedTree[]>('plantedForest', []);
  const [coins, setCoins] = useLocalStorage<number>('coins', 0);
  const [unlockedTrees, setUnlockedTrees] = useLocalStorage<string[]>('unlockedTrees', ['oak', 'pine']);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4500); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  const handleStart = useCallback((newDuration: number, newTree: Tree) => {
    setDuration(newDuration);
    setSelectedTree(newTree);
    setAppState(AppState.TIMING);
  }, []);

  const handleCancel = useCallback(() => {
    setAppState(AppState.SETTINGS);
  }, []);

  const handleComplete = useCallback(() => {
    const newCoins = Math.ceil(duration / 60);
    setCoins(prev => prev + newCoins);
    
    const newTree: PlantedTree = {
      id: `tree-${Date.now()}`,
      treeId: selectedTree.id,
      datePlanted: Date.now(),
    };
    setPlantedForest(prev => [...prev, newTree]);
    
    setAppState(AppState.COMPLETED);
  }, [duration, selectedTree, setCoins, setPlantedForest]);

  const handleReset = useCallback(() => {
    setAppState(AppState.SETTINGS);
  }, []);

  const handleViewForest = useCallback(() => {
    setAppState(AppState.FOREST);
  }, []);
  
  const handleAuth = useCallback((firstName: string, lastName:string) => {
    setUser({ firstName, lastName });
  }, [setUser]);
  
  const handleSignOut = useCallback(() => {
    setUser(null);
    setAppState(AppState.SETTINGS);
  }, [setUser]);

  const handleUnlockTree = useCallback((treeId: string, price: number) => {
    if (coins >= price) {
      setCoins(c => c - price);
      setUnlockedTrees(prev => [...prev, treeId]);
    }
  }, [coins, setCoins, setUnlockedTrees]);

  const renderContent = () => {
    if (!user) {
      return <AuthScreen onAuth={handleAuth} />;
    }
    
    switch (appState) {
      case AppState.TIMING:
        return <TimerScreen duration={duration} tree={selectedTree} onComplete={handleComplete} onCancel={handleCancel} />;
      case AppState.COMPLETED:
        return <CompletionScreen duration={duration} tree={selectedTree} onReset={handleReset} onViewForest={handleViewForest} />;
      case AppState.FOREST:
        return <ForestScreen plantedForest={plantedForest} onBack={handleReset} />;
      case AppState.SETTINGS:
      default:
        return (
          <SettingsScreen 
            onStart={handleStart} 
            onViewForest={handleViewForest}
            onShowGuide={() => setShowGuide(true)}
            userName={user.firstName}
            coins={coins}
            unlockedTrees={unlockedTrees}
            onUnlockTree={handleUnlockTree}
            onSignOut={handleSignOut}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 dark:from-slate-900 dark:to-emerald-900 flex items-center justify-center p-4 font-sans transition-colors duration-500">
      <SplashScreen isVisible={isLoading} />
      <main className="w-full max-w-md mx-auto">
        {renderContent()}
      </main>
      {showGuide && <Guide onClose={() => setShowGuide(false)} />}
    </div>
  );
};

export default App;