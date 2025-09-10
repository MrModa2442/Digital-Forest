// FIX: Import React to make React types like React.FC available in this file.
import React from 'react';

export enum AppState {
  SETTINGS = 'SETTINGS',
  TIMING = 'TIMING',
  COMPLETED = 'COMPLETED',
  FOREST = 'FOREST',
}

export interface Tree {
  id: string;
  name: string;
  growthStages: string[];
  price: number;
}

export interface PlantedTree {
  id: string;
  treeId: string;
  datePlanted: number;
}
