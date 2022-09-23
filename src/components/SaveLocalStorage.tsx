import { STORED_CANVAS_KEY } from '../constants/localStorage';
import useLocalStorage from '../hooks/useLocalStorage';
import { useActions, useAppSelector } from '../redux/hooks';
import { getStoredData } from '../redux/selectors';

export const SaveLocalStorage = () => {
  const drawnData = useAppSelector(getStoredData);

  const { updatActiveToolText } = useActions();

  const [_, saveData] = useLocalStorage(STORED_CANVAS_KEY, drawnData);

  return (
    <div className="tool">
      <i
        className="fas fa-download"
        onClick={() => {
          saveData(drawnData);
          updatActiveToolText('Canvas Saved');
        }}
        title="Save Local Storage"
      ></i>
    </div>
  );
};
