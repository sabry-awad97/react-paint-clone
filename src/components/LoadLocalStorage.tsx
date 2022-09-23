import { STORED_CANVAS_KEY } from '../constants/localStorage';
import useReadLocalStorage from '../hooks/useReadLocalStorage';
import { useActions, useAppSelector } from '../redux/hooks';
import { getStoredData } from '../redux/selectors';

export function LoadLocalStorage() {
  const drawnData = useAppSelector(getStoredData);
  const data = useReadLocalStorage<typeof drawnData>(STORED_CANVAS_KEY);
  const { loadData, updatActiveToolText } = useActions();
  return (
    <div className="tool">
      <i
        onClick={() => {
          if (!data || !data.length) {
            updatActiveToolText('No Canvas Found');
            return;
          }

          loadData(data);
          updatActiveToolText('Canvas Loaded');
        }}
        className="fas fa-upload"
        title="Load Local Storage"
      ></i>
    </div>
  );
}
