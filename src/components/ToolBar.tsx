import { ActiveTool } from './ActiveTool';
import { Brush } from './Brush';
import { Bucket } from './Bucket';
import { ClearCanvas } from './ClearCanvas';
import { ClearLocalStorage } from './ClearLocalStorage';
import { DownloadImage } from './DownloadImage';
import { Eraser } from './Eraser';
import { LoadLocalStorage } from './LoadLocalStorage';
import { Redo } from './Redo';
import { SaveLocalStorage } from './SaveLocalStorage';
import { Undo } from './Undo';

export function ToolBar() {
  return (
    <div className="top-bar">
      <ActiveTool />
      <Brush />
      <Bucket />
      <Eraser />
      <ClearCanvas />
      <SaveLocalStorage />
      <LoadLocalStorage />
      <ClearLocalStorage />
      <Undo />
      <Redo />
      <DownloadImage />
    </div>
  );
}
