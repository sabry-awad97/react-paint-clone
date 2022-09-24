import { useState } from 'react';
import { useActions } from '../redux/hooks';

export const Undo = () => {
  const { updatActiveToolText } = useActions();
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <div
      aria-disabled={isDisabled}
      className={'tool ' + (isDisabled ? 'is-disabled' : '')}
    >
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
