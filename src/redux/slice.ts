import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILine } from '../types';

const initialState = {
  brushSize: 10,
  bucketColor: '#FFFFFF',
  brushColor: '#A51DAB',
  isEraser: false,
  isCanvasCleared: false,
  activeToolText: 'Brush',
  isDataLoading: false,
  isDrawing: false,
  isImageDownloading: false,
  drawnData: [] as ILine[],
};

const slice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    updateBucketColor: (state, action: PayloadAction<string>) => {
      state.bucketColor = action.payload;
    },
    updateBrushColor: (state, action: PayloadAction<string>) => {
      state.brushColor = action.payload;
    },
    updateBrushSize: (state, action: PayloadAction<number>) => {
      state.brushSize = action.payload;
    },
    updatIsEraser: (state, action: PayloadAction<boolean>) => {
      state.isEraser = action.payload;
    },
    updatActiveToolText: (state, action: PayloadAction<string>) => {
      state.activeToolText = action.payload;
    },
    updatIsDrawing: (state, action: PayloadAction<boolean>) => {
      state.isCanvasCleared = false;
      state.isDataLoading = false;
      state.isImageDownloading = false;
      state.isDrawing = action.payload;
    },
    updatIsImageDownloaded: (state, action: PayloadAction<boolean>) => {
      state.isImageDownloading = action.payload;
    },
    storeDrawnLine: (state, action: PayloadAction<ILine>) => {
      state.drawnData.push(action.payload);
    },
    loadData: (state, action: PayloadAction<ILine[]>) => {
      state.drawnData = action.payload;
      state.isDataLoading = true;
    },
    clearCanvas: state => {
      state.drawnData = [];
      state.isCanvasCleared = true;
    },
  },
});

export const actions = slice.actions;
export const reducer = slice.reducer;
