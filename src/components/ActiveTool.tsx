import { useEffect } from 'react';
import { useActions, useAppSelector } from '../redux/hooks';
import { getActiveToolText } from '../redux/selectors';

export function ActiveTool() {
  const activeToolText = useAppSelector(getActiveToolText);
  const { updatActiveToolText } = useActions();

  useEffect(() => {
    setTimeout(() => {
      if (activeToolText !== 'Brush') {
        updatActiveToolText('Brush');
      }
    }, 1500);
  }, [activeToolText]);

  return (
    <div className="active-tool">
      <span title="Active Tool">{activeToolText}</span>
    </div>
  );
}
