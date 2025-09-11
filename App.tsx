// Implemented the main App component to manage application state and render different screens.
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AppState, Tree, PlantedTree, UserStats, Achievement } from './types';
import { TREES, ACHIEVEMENTS } from './constants';
import SettingsScreen from './components/SettingsScreen';
import TimerScreen from './components/TimerScreen';
import CompletionScreen from './components/CompletionScreen';
import ForestScreen from './components/ForestScreen';
import SplashScreen from './components/SplashScreen';
import Guide from './components/Guide';
import ProfileScreen from './components/ProfileScreen';

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

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [appState, setAppState] = useState<AppState>(AppState.SETTINGS);
  const [showGuide, setShowGuide] = useState(false);
  
  // Timer settings
  const [duration, setDuration] = useState(25 * 60);
  const [selectedTree, setSelectedTree] = useState<Tree>(TREES[0]);
  const [selectedTag, setSelectedTag] = useState<string>('Work');
  
  // Game state
  const [plantedForest, setPlantedForest] = useLocalStorage<PlantedTree[]>('plantedForest', []);
  const [coins, setCoins] = useLocalStorage<number>('coins', 0);
  const [unlockedTrees, setUnlockedTrees] = useLocalStorage<string[]>('unlockedTrees', ['oak', 'pine']);
  
  // New state for streaks, achievements, and stats
  const [unlockedAchievements, setUnlockedAchievements] = useLocalStorage<string[]>('unlockedAchievements', []);
  const [totalFocusTime, setTotalFocusTime] = useLocalStorage<number>('totalFocusTime', 0); // in seconds
  const [currentStreak, setCurrentStreak] = useLocalStorage<number>('currentStreak', 0);
  const [lastSessionDate, setLastSessionDate] = useLocalStorage<string | null>('lastSessionDate', null);
  const [sessionCompletionData, setSessionCompletionData] = useState<{
    newAchievements: Achievement[];
    streakInfo: { days: number; bonus: number } | null;
  } | null>(null);


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4500); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  const userStats: UserStats = useMemo(() => ({
    coins,
    plantedForest,
    unlockedTrees,
    totalFocusTime,
    currentStreak
  }), [coins, plantedForest, unlockedTrees, totalFocusTime, currentStreak]);

  const checkAchievements = useCallback((sessionDuration?: number) => {
    const newlyUnlocked = ACHIEVEMENTS.filter(ach => 
      !unlockedAchievements.includes(ach.id) && ach.condition(userStats, sessionDuration)
    );
    
    if (newlyUnlocked.length > 0) {
        setUnlockedAchievements(prev => [...prev, ...newlyUnlocked.map(a => a.id)]);
    }
    return newlyUnlocked;
  }, [unlockedAchievements, userStats, setUnlockedAchievements]);

  const handleStart = useCallback((newDuration: number, newTree: Tree, newTag: string) => {
    setDuration(newDuration);
    setSelectedTree(newTree);
    setSelectedTag(newTag);
    setAppState(AppState.TIMING);
  }, []);

  const handleCancel = useCallback(() => {
    // By user request, we are no longer adding a withered tree to the forest
    // when a user gives up on a timer. This prevents visual clutter and
    // the reported bug of trees overlapping.
    setAppState(AppState.SETTINGS);
  }, []);

  const handleComplete = useCallback(() => {
    // Coins
    const baseCoins = Math.ceil(duration / 60);
    
    // Streak Logic
    let streakInfo: { days: number, bonus: number } | null = null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString();
    
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const yesterdayStr = yesterday.toISOString();
    
    let newStreak = 1;
    if (lastSessionDate === yesterdayStr) {
      newStreak = currentStreak + 1;
    } else if (lastSessionDate === todayStr) {
      newStreak = currentStreak; // multiple sessions in one day don't break/increase streak
    }
    
    if(newStreak > 1) {
        streakInfo = { days: newStreak, bonus: newStreak };
    }
    
    const totalCoinsEarned = baseCoins + (streakInfo?.bonus || 0);
    
    setCoins(prev => prev + totalCoinsEarned);
    setCurrentStreak(newStreak);
    setLastSessionDate(todayStr);

    // Plant tree
    const newTree: PlantedTree = {
      id: `tree-${Date.now()}`,
      treeId: selectedTree.id,
      datePlanted: Date.now(),
      withered: false,
      tag: selectedTag,
      duration: duration,
    };
    setPlantedForest(prev => [...prev, newTree]);
    
    // Update stats
    setTotalFocusTime(prev => prev + duration);

    // Achievements
    const newAchievements = checkAchievements(duration);
    setSessionCompletionData({ newAchievements, streakInfo });
    
    setAppState(AppState.COMPLETED);
  }, [duration, selectedTree, setCoins, setPlantedForest, selectedTag, checkAchievements, currentStreak, lastSessionDate, setCurrentStreak, setLastSessionDate, setTotalFocusTime]);

  const handleReset = useCallback(() => {
    setAppState(AppState.SETTINGS);
  }, []);

  const handleViewForest = useCallback(() => {
    setAppState(AppState.FOREST);
  }, []);

  const handleViewProfile = useCallback(() => {
    setAppState(AppState.PROFILE);
  }, []);
  
  const handleUnlockTree = useCallback((treeId: string, price: number) => {
    if (coins >= price) {
      setCoins(c => c - price);
      setUnlockedTrees(prev => {
          const newUnlocked = [...prev, treeId];
          // Check achievements after state has updated
          const updatedStats = {...userStats, unlockedTrees: newUnlocked };
          ACHIEVEMENTS.forEach(ach => {
              if(!unlockedAchievements.includes(ach.id) && ach.condition(updatedStats)) {
                  setUnlockedAchievements(prevUnlocked => [...prevUnlocked, ach.id]);
              }
          });
          return newUnlocked;
      });
    }
  }, [coins, setCoins, setUnlockedTrees, userStats, unlockedAchievements, setUnlockedAchievements]);
  
  const handleDeleteProgress = useCallback(() => {
    const keysToRemove = [
        'plantedForest',
        'coins',
        'unlockedTrees',
        'unlockedAchievements',
        'totalFocusTime',
        'currentStreak',
        'lastSessionDate',
    ];
    
    keysToRemove.forEach(key => {
        try {
            window.localStorage.removeItem(key);
        } catch (error) {
            console.error(`Failed to remove ${key} from localStorage`, error);
        }
    });

    window.location.reload();
  }, []);

  const renderContent = () => {
    switch (appState) {
      case AppState.TIMING:
        return <TimerScreen duration={duration} tree={selectedTree} onComplete={handleComplete} onCancel={handleCancel} />;
      case AppState.COMPLETED:
        return <CompletionScreen 
                  duration={duration} 
                  tree={selectedTree} 
                  onReset={handleReset} 
                  onViewForest={handleViewForest}
                  completionData={sessionCompletionData}
                />;
      case AppState.FOREST:
        return <ForestScreen plantedForest={plantedForest} onBack={handleReset} />;
      case AppState.PROFILE:
        return <ProfileScreen userStats={userStats} onBack={handleReset} unlockedAchievements={unlockedAchievements} onDeleteProgress={handleDeleteProgress} />;
      case AppState.SETTINGS:
      default:
        return (
          <SettingsScreen 
            onStart={handleStart} 
            onViewForest={handleViewForest}
            onViewProfile={handleViewProfile}
            onShowGuide={() => setShowGuide(true)}
            coins={coins}
            unlockedTrees={unlockedTrees}
            onUnlockTree={handleUnlockTree}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-background-from-light)] to-[var(--color-background-to-light)] dark:from-slate-900 dark:to-[var(--color-background-to-dark)] flex items-center justify-center p-4 font-sans transition-colors duration-500">
      <SplashScreen isVisible={isLoading} />
      <main className="w-full max-w-md mx-auto">
        {renderContent()}
      </main>
      {showGuide && <Guide onClose={() => setShowGuide(false)} />}
    </div>
  );
};

export default App;