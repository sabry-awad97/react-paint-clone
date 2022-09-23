// @ts-ignore
import jscolor from '@eastdesire/jscolor';
import { useEffect } from 'react';

const useJsColor = () => {
  useEffect(() => {
    jscolor.install();
  }, []);
};

export default useJsColor;
