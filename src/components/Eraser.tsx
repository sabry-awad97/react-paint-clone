import { MAXIMUM_BRUSH_SIZE } from '../constants/brush';
import { useActions, useAppSelector } from '../redux/hooks';
import { getBucketColor, getIsEraser } from '../redux/selectors';

export const Eraser = () => {
  const isEraser = useAppSelector(getIsEraser);
  const bucketColor = useAppSelector(getBucketColor);
  const {
    updatIsEraser,
    updateBrushColor,
    updateBrushSize,
    updatActiveToolText,
  } = useActions();

  return (
    <div className="tool">
      <i
        onClick={() => {
          updatIsEraser(true);
          updateBrushColor(bucketColor);
          updateBrushSize(MAXIMUM_BRUSH_SIZE);
          updatActiveToolText('Eraser');
        }}
        className="fas fa-eraser"
        title="Eraser"
        style={{
          color: isEraser ? 'black' : 'white',
        }}
      ></i>
    </div>
  );
};
