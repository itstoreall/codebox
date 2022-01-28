import { useState } from 'react';
import App from '../../../Markup/FeatureTemplate';
import s from './Feature.module.scss';

const Feature = ({ viewTitle, featureTitle }) => {
  const description = `The image should be square, max 100px, png or jpeg file format.`;
  const [value, setValue] = useState('');
  const [drag, setDrag] = useState(false);
  const [status, setStatus] = useState('initial');
  const [cancelBtn, setCancelBtn] = useState('Select file to upload');
  const [timer, setTimer] = useState(null);

  // Drag over
  const handleDragOver = e => {
    e.preventDefault();
    setDrag(true);
  };

  // Drag leave
  const handleDragLeave = e => {
    e.preventDefault();
    setDrag(false);
  };

  // Upload image
  const handleUploadImg = e => {
    setDrag(false);
    handleUploadingStatus();

    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(e.currentTarget.files[0]);

    reader.onload = function () {
      const image = new Image();
      image.src = reader.result; // Base64;

      handleUploadingStatus();

      if (file.type === 'image/png' || file.type === 'image/jpeg') {
        image.onload = () => {
          const width = image.naturalWidth;
          const height = image.naturalHeight;

          if (width <= 100 || height <= 100) {
            changeImgUrl(image.src);
          } else {
            alert(
              `\nOops! \n\nThe uploaded image size is (${width} x ${height} px) \nBut it should only be max 100 x 100 px`,
            );
            handleCancelUploadingStatus();
          }
        };
      } else {
        alert(
          `\nOops! \n\nThe uploaded image type is "${
            file.type.split('/')[1]
          }" \nBut it should only be png or jpeg`,
        );
        handleCancelUploadingStatus();
      }
    };
  };

  // Change image url
  const changeImgUrl = url => {
    setTimer(
      setTimeout(() => {
        setValue(url);
        handleUploadedStatus();
      }, 2000),
    );
  };

  // Cancel uploading
  const handleCancelUploading = () => {
    clearTimeout(timer);
    handleCancelUploadingStatus();
  };

  // Uploading Status
  const handleUploadingStatus = () => {
    setStatus('uploading');
    setCancelBtn('Cancel');
  };

  // Downloaded Status
  const handleUploadedStatus = () => {
    setStatus('uploaded');
    setCancelBtn('Select file to replace');
  };

  // Cancel Status
  const handleCancelUploadingStatus = () => {
    if (value === '' || status === 'initial') {
      setStatus('initial');
      setCancelBtn('Select file to upload');
    } else if (value !== '' || status === 'uploading') {
      handleUploadedStatus();
    }
  };
  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.dnd}>
        <div className={s.dropArea}>
          {/* <div className={s.dropAreaActive}></div> */}
          {drag && <div className={s.dropAreaActive}></div>}
          <div className={s.dropArea__info}>
            {status !== 'uploading' && (
              <div className={s.dropArea__thumb}>
                {status === 'uploaded' && (
                  <img
                    className={s.dropArea__image}
                    src={value}
                    alt="company logo"
                  />
                )}
              </div>
            )}

            {status === 'uploading' && (
              <div className={s.preloader}>
                <div className={s.preloader__inner}>
                  <div className={s.preloader__thumb}></div>
                </div>
                <div>
                  <div className={s.preloader__barLeft}>
                    <div className={s.preloader__progress}></div>
                  </div>
                  <div className={s.preloader__barRight}>
                    <div className={s.preloader__progress}></div>
                  </div>
                </div>
              </div>
            )}

            {status === 'initial' && (
              <span className={s.dropArea__conditionsText}>
                Drag &amp; drop here
              </span>
            )}
            {status === 'uploading' && (
              <span className={s.dropArea__conditionsText}>Uploading</span>
            )}
            {status === 'uploaded' && (
              <span className={s.dropArea__conditionsText}>
                Drag &amp; drop here to replace
              </span>
            )}
            <span className={s.dropArea__orConditionsText}>- or -</span>
          </div>

          {status !== 'uploading' && (
            <input
              className={s.dropArea__input}
              data-btn-content={cancelBtn}
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleUploadImg}
              onDragOver={e => handleDragOver(e)}
              onDragLeave={e => handleDragLeave(e)}
            />
          )}

          {status === 'uploading' && (
            <span
              className={s.dropArea__btnCancel}
              onClick={handleCancelUploading}
            >
              Cancel
            </span>
          )}
        </div>
      </div>
    </App>
  );
};

export default Feature;
