import { STORED_CANVAS_KEY } from '../constants/localStorage';
import { useActions } from '../redux/hooks';

export const ClearLocalStorage = () => {
  const { updatActiveToolText } = useActions();
  return (
    <div className="tool">
      <i
        className="fas fa-trash-alt"
        onClick={() => {
          updatActiveToolText('Local Storage Cleared');
          localStorage.removeItem(STORED_CANVAS_KEY);
        }}
        title="Clear Local Storage"
      ></i>
    </div>
  );
};
