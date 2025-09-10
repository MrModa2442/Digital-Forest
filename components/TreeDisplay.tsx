import React from 'react';
import type { Tree } from '../types';
import { useTranslation } from '../i18n';

interface TreeDisplayProps {
  tree: Tree;
  progress: number;
}

const TreeDisplay: React.FC<TreeDisplayProps> = ({ tree, progress }) => {
  const { t } = useTranslation();
  const { growthStages } = tree;
  const numStages = growthStages.length;
  // Determine which stage to display based on progress.
  const stageIndex = Math.min(Math.floor(progress * numStages), numStages - 1);
  
  const currentStageUrl = growthStages[stageIndex];
  
  // By giving the key the stageIndex, React will re-mount the component
  // when the stage changes, which ensures animations re-run correctly.
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <img
        key={`tree-img-${stageIndex}`}
        src={currentStageUrl}
        // FIX: Cast the inner `t()` call to `string` because the `options` object for `t()` expects `string | number`, not `string | string[]`.
        alt={t('tree_alt_text', { treeName: t(tree.name as 'tree_oak') as string, stage: stageIndex + 1 }) as string}
        className="max-w-full max-h-full object-contain animate-grow-elastic origin-bottom"
      />
    </div>
  );
};

export default TreeDisplay;
