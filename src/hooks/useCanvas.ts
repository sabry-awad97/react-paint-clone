import { useEffect, useRef } from 'react';
import { BRUSH_CURSOR, ERASER_CURSOR } from '../constants/brush';
import { downloadFile } from '../helpers/downloadFile';

import { useActions, useAppSelector } from '../redux/hooks';
import {
  getBrushColor,
  getBrushSize,
  getBucketColor,
  getIsCanvasCleared,
  getIsEraser,
  getIsImageDownloading,
  getIsDataLoading,
  getIsDrawing,
  getStoredData,
} from '../redux/selectors';
import useEventListener from './useEventListener';

const useCanvas = () => {
  const { updatIsDrawing, storeDrawnLine } = useActions();

  const brushColor = useAppSelector(getBrushColor);
  const brushSize = useAppSelector(getBrushSize);
  const bucketColor = useAppSelector(getBucketColor);
  const drawnData = useAppSelector(getStoredData);
  const isCanvasCleared = useAppSelector(getIsCanvasCleared);
  const isDataLoading = useAppSelector(getIsDataLoading);
  const isDrawing = useAppSelector(getIsDrawing);
  const isEraser = useAppSelector(getIsEraser);
  const isImageDownloading = useAppSelector(getIsImageDownloading);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    context.fillStyle = bucketColor;
    context.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);

    const restoreCanvas = () => {
      for (let i = 1; i < drawnData.length; i++) {
        context.beginPath();
        context.moveTo(drawnData[i - 1].x, drawnData[i - 1].y);
        context.lineWidth = drawnData[i].size;
        context.lineCap = 'round';
        if (drawnData[i].erase) {
          context.strokeStyle = bucketColor;
        } else {
          context.strokeStyle = drawnData[i].color;
        }
        context.lineTo(drawnData[i].x, drawnData[i].y);
        context.stroke();
      }
    };

    restoreCanvas();
  }, [bucketColor, isCanvasCleared, isDataLoading]);

  useEffect(() => {
    if (isImageDownloading) {
      downloadFile(canvasRef.current!.toDataURL('image/jpeg', 1));
    }
  }, [isImageDownloading]);

  useEffect(() => {
    const chanageCursorStyle = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.style.cursor = `url('${
        isEraser ? ERASER_CURSOR : BRUSH_CURSOR
      }'), auto`;
    };

    chanageCursorStyle();
  }, [isEraser]);

  const getMousePosition = ({ clientX, clientY }: MouseEvent) => {
    const { left, top } = canvasRef.current?.getBoundingClientRect()!;
    return { x: clientX - left, y: clientY - top };
  };

  useEventListener(
    'mousedown',
    event => {
      const context = canvasRef.current?.getContext('2d');
      if (!context) return;
      updatIsDrawing(true);
      const currentPosition = getMousePosition(event);
      context.moveTo(currentPosition.x, currentPosition.y);
      context.beginPath();
      context.lineCap = 'round';
      context.lineWidth = brushSize;
      context.strokeStyle = brushColor;
    },
    canvasRef
  );

  useEventListener('mouseup', () => updatIsDrawing(false), canvasRef);

  useEventListener(
    'mousemove',
    event => {
      const context = canvasRef.current?.getContext('2d');
      if (isDrawing && context) {
        const currentPosition = getMousePosition(event);
        context.lineTo(currentPosition.x, currentPosition.y);
        context.stroke();

        storeDrawnLine({
          x: currentPosition.x,
          y: currentPosition.y,
          color: brushColor,
          size: brushSize,
          erase: isEraser,
        });
      }
    },
    canvasRef
  );

  return canvasRef;
};

export default useCanvas;
