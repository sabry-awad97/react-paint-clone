import { useActions } from '../redux/hooks';

export const Undo = () => {
  const { updatActiveToolText } = useActions();
  return (
    <div className="tool">
      <i
        className="fas fa-undo-alt"
        onClick={() => {
          updatActiveToolText('Undo');
        }}
        title="Undo"
      ></i>
    </div>
  );
};
