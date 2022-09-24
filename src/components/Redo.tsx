import { useState } from 'react';
import { useActions } from '../redux/hooks';

export const Redo = () => {
  const { updatActiveToolText } = useActions();
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div
      aria-disabled={isDisabled}
      className={'tool ' + (isDisabled ? 'is-disabled' : '')}
    >
      <i
        className="fas fa-redo-alt"
        onClick={() => {
          updatActiveToolText('Redo');
          setIsDisabled(isDisabled);
        }}
        title="Redo"
      ></i>
    </div>
  );
};
