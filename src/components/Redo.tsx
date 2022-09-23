import { useActions } from '../redux/hooks';

export const Redo = () => {
  const { updatActiveToolText } = useActions();
  return (
    <div className="tool">
      <i
        className="fas fa-redo-alt"
        onClick={() => {
          updatActiveToolText('Redo');
        }}
        title="Redo"
      ></i>
    </div>
  );
};
