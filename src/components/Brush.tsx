import {
  DEFAULT_BRUSH_SIZE,
  MAXIMUM_BRUSH_SIZE,
  MINIMUM_BRUSH_SIZE,
} from '../constants/brush';
import { useActions, useAppSelector } from '../redux/hooks';
import { getBrushColor, getBrushSize, getIsEraser } from '../redux/selectors';

export const Brush = () => {
  const {
    updateBrushColor,
    updateBrushSize,
    updatIsEraser,
    updatActiveToolText,
  } = useActions();

  const brushColor = useAppSelector(getBrushColor);
  const brushSize = useAppSelector(getBrushSize);
  const isEraser = useAppSelector(getIsEraser);

  return (
    <div className="brush tool">
      <i
        onClick={() => {
          updatIsEraser(false);
          updateBrushColor(brushColor);
          updateBrushSize(DEFAULT_BRUSH_SIZE);
          updatActiveToolText('Brush');
        }}
        style={{
          color: isEraser ? 'white' : 'black',
        }}
        className="fas fa-brush"
        title="Brush"
      ></i>
      <input
        className="jscolor"
        data-jscolor={JSON.stringify({
          value: brushColor,
          previewSize: 0,
        })}
        onInput={e => {
          updatIsEraser(false);
          updateBrushColor(e.currentTarget.value);
        }}
      />
      <span className="size" title="Brush Size">
        {brushSize < 10 ? '0' + brushSize : brushSize}
      </span>
      <input
        type="range"
        min={MINIMUM_BRUSH_SIZE}
        max={MAXIMUM_BRUSH_SIZE}
        value={brushSize}
        onChange={e => updateBrushSize(+e.target.value)}
        className="slider"
      />
    </div>
  );
};
