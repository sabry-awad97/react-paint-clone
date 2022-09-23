import React from 'react';

import useCanvas from '../hooks/useCanvas';

interface CanvasProps {
  width?: number;
  height?: number;
}

const Canvas: React.FC<CanvasProps> = ({ width, height }) => {
  const canvasRef = useCanvas();
  return <canvas id="canvas" ref={canvasRef} height={height} width={width} />;
};

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default Canvas;
