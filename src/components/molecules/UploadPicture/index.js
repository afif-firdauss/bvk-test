import React from 'react';
import ImageUploading from "react-images-uploading";
import styles from './UploadPicture.module.css';

const UploadPicture = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <div className="mb-3">
      <label>Picture</label>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <div>
            {
              images.length === 0 && 
            <div
              className={styles.uploadCard}
              style={{ color: isDragging ? "red" : null}}
              onClick={onImageUpload}
              {...dragProps}
            >
              <p>Click or Drop here</p>
            </div>
            }
            {imageList.map((image, index) => (
              <div className=" d-flex flex-wrap" key={index}>
                <div key={index} className={styles.picture}>
                  <img src={image.data_url} alt="" width="100" />
                </div>
                <div className=" d-flex flex-column mt-auto">
                  <button className="btn btn-warning mb-2" onClick={() => onImageUpdate(index)}>Update</button>
                  <button className="btn btn-danger" onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  )
}

export default UploadPicture;