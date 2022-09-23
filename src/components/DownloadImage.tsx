import { useActions } from '../redux/hooks';

export const DownloadImage = () => {
  const { updatActiveToolText, updatIsImageDownloaded } = useActions();
  return (
    <div className="tool">
      <a
        onClick={() => {
          updatIsImageDownloaded(true);
          updatActiveToolText('Image File Saved');
        }}
      >
        <i className="far fa-save" title="Save Image File"></i>
      </a>
    </div>
  );
};
