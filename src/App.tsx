// @ts-ignore
import Canvas from './components/Canvas';
import { MobileMessage } from './components/MobileMessage';
import { ToolBar } from './components/ToolBar';
import useJsColor from './hooks/useJsColor';

const App = () => {
  useJsColor();

  return (
    <>
      <ToolBar />
      <MobileMessage />
      <Canvas />
    </>
  );
};

export default App;
