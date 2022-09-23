import { RootState } from './store';
import { createSelector } from '@reduxjs/toolkit';

const selectState = (state: RootState) => state;

export const getStoredData = createSelector(
  [selectState],
  ({ drawnData }) => drawnData
);

export const getBucketColor = createSelector(
  [selectState],
  ({ bucketColor }) => bucketColor
);

export const getBrushColor = createSelector(
  [selectState],
  ({ brushColor }) => brushColor
);

export const getBrushSize = createSelector(
  [selectState],
  ({ brushSize }) => brushSize
);

export const getIsEraser = createSelector(
  [selectState],
  ({ isEraser }) => isEraser
);

export const getIsMouseDown = createSelector(
  [selectState],
  ({ isMouseDown }) => isMouseDown
);

export const getIsCanvasCleared = createSelector(
  [selectState],
  ({ isCanvasCleared }) => isCanvasCleared
);

export const getActiveToolText = createSelector(
  [selectState],
  ({ activeToolText }) => activeToolText
);

export const getIsDataLoading = createSelector(
  [selectState],
  ({ isDataLoading }) => isDataLoading
);

export const getIsImageDownloading = createSelector(
  [selectState],
  ({ isImageDownloading }) => isImageDownloading
);
