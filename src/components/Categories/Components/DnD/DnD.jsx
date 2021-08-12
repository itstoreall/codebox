import React, { useState } from 'react';
import CategorySection from '../../../Markup/Sections/CategorySection';
import s from './DnD.module.scss';

// const { log } = console;

const DnD = () => {
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
    const file = e.currentTarget.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(e.currentTarget.files[0]);

    reader.onload = function (e) {
      const image = new Image();
      image.src = reader.result; // Base64;

      image.onload = () => {
        const width = image.naturalWidth;
        const height = image.naturalHeight;

        validateImg(image.src, file.type, width, height);
      };
    };
  };

  // Validate image
  const validateImg = (url, type, width, height) => {
    setDrag(false);

    if (type === 'image/png' || type === 'image/jpeg') {
      if (height <= 100 || width <= 100) {
        handleUploadingStatus();
        changeImgUrl(url);
      } else {
        alert('Image should be: png, jpeg and size max 100x100 px');
      }
    } else {
      alert('Image should be: png, jpeg and size max 100x100 px');
    }
  };

  // Change image url
  const changeImgUrl = url => {
    setTimer(
      setTimeout(() => {
        setValue(url);
        handleDownloadedStatus();
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
  const handleDownloadedStatus = () => {
    setStatus('downloaded');
    setCancelBtn('Select file to replace');
  };

  // Cancel Status
  const handleCancelUploadingStatus = () => {
    if (value === '' || status === 'initial') {
      setStatus('initial');
      setCancelBtn('Select file to upload');
    } else if (value !== '' || status === 'uploading') {
      handleDownloadedStatus();
    }
  };

  return (
    <CategorySection>
      <div className={s.dnd}>
        <div className={s.dnd__header}>
          <h1 className={s.dnd__title}>Company Logo</h1>
          <p className={s.dnd__p}>
            Logo should be square, max 100px, png or jpeg file format.
          </p>
        </div>

        <div className={s.dropArea}>
          {/* <div className={s.dropAreaActive}></div> */}
          {drag && <div className={s.dropAreaActive}></div>}
          <div className={s.dropArea__info}>
            {status !== 'uploading' && (
              <div className={s.dropArea__thumb}>
                {status === 'downloaded' && (
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
            {status === 'downloaded' && (
              <span className={s.dropArea__conditionsText}>
                Drag &amp; drop here to replace
              </span>
            )}
            <span>- or -</span>
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
    </CategorySection>
  );
};

export default DnD;
