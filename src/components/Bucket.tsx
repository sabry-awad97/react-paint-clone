import { useActions, useAppSelector } from '../redux/hooks';
import { getBucketColor } from '../redux/selectors';

export function Bucket() {
  const bucketColor = useAppSelector(getBucketColor);
  const { updateBucketColor } = useActions();

  return (
    <div className="bucket tool">
      <i className="fas fa-fill-drip" title="Background Color"></i>
      <input
        className="jscolor"
        data-jscolor={JSON.stringify({
          value: bucketColor,
          previewSize: 0,
        })}
        onInput={e => updateBucketColor(e.currentTarget.value)}
      />
    </div>
  );
}
