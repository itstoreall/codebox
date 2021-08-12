import React, { useState } from 'react';
import CategorySection from '../../../Layout/Sections/CategorySection';
import s from './DnD.module.scss';

const DnD = () => {
  const [value, setValue] = useState('');
  const [drag, setDrag] = useState(false);
  const [status, setStatus] = useState('initial');
  const [cancelBtn, setCancelBtn] = useState('Select file to upload');
  const [timer, setTimer] = useState(null);

  // Drag Over
  const handleDragOver = e => {
    e.preventDefault();
    setDrag(true);
  };

  // Drag Leave
  const handleDragLeave = e => {
    e.preventDefault();
    setDrag(false);
  };

  // Upload image
  const handleImageUrl = e => {
    setDrag(false);

    const image = e.currentTarget.files[0];

    let imageReader = new FileReader();

    if (image?.type === 'image/png' || image?.type === 'image/jpeg') {
      getImageUrl(image, imageReader);
    } else if (!e.currentTarget.value) {
      return;
    } else {
      alert('Image should be in png, jpeg file format only!');
    }
  };

  // Get Url
  const getImageUrl = (image, imageReader) => {
    handleUploadingStatus();

    setTimer(
      setTimeout(() => {
        imageReader.onload = () => {
          setValue(imageReader.result);
        };

        image && imageReader.readAsDataURL(image);

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
          <p>Logo should be square, 100px, png or jpeg file format.</p>
        </div>

        <div className={s.dropArea}>
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
              onChange={handleImageUrl}
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

/*
// Upload image
  const handleImageUrl = e => {
    setDrag(false);

    // const image = e.currentTarget.files[0];

    // ---

    const reader = new FileReader();
    reader.readAsDataURL(e.currentTarget.files[0]);

    reader.onload = function (e) {
      const image = new Image();

      // Base64;
      image.src = reader.result;
      log(image.src);

      // size
      image.onload = () => {
        const width = image.naturalWidth;
        const height = image.naturalHeight;

        log(width, height);

        // if (height > 100 || width > 100) {
        //   alert('Height and Width must not exceed 100px.');
        //   return false;
        // }
        // alert('Uploaded image has valid Height and Width.');
        // return true;

        if (image?.type === 'image/png' || image?.type === 'image/jpeg') {
          getImageUrl(image.src, reader);
        } else if (!e.currentTarget.value) {
          return;
        } else {
          alert('Image should be in png, jpeg file format only!');
        }
      };
    };
*/
