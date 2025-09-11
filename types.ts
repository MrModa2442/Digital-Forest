// FIX: Import React to make React types like React.FC available in this file.
import React from 'react';

export enum AppState {
  SETTINGS = 'SETTINGS',
  TIMING = 'TIMING',
  COMPLETED = 'COMPLETED',
  FOREST = 'FOREST',
  PROFILE = 'PROFILE',
}

export interface Tree {
  id: string;
  name: string;
  growthStages: string[];
  price: number;
}

export interface PlantedTree {
  id:string;
  treeId: string;
  datePlanted: number;
  withered: boolean;
  tag?: string;
  duration: number; // in seconds
}

export interface UserStats {
    coins: number;
    plantedForest: PlantedTree[];
    unlockedTrees: string[];
    totalFocusTime: number; // in seconds
    currentStreak: number;
}

export interface Achievement {
  id: string;
  nameKey: string;
  descriptionKey: string;
  goalLabelKey: string;
  badge: string; // SVG string
  condition: (stats: UserStats, sessionDuration?: number) => boolean;
}