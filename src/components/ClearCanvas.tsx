import { useActions } from '../redux/hooks';

export const ClearCanvas = () => {
  const { clearCanvas } = useActions();
  const { updatActiveToolText } = useActions();
  return (
    <div className="tool">
      <i
        className="fas fa-delete-left"
        onClick={() => {
          clearCanvas();
          updatActiveToolText('Canvas Cleared');
        }}
        title="Clear"
      ></i>
    </div>
  );
};
