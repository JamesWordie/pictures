import React from 'react';
import '../css/image-list.css';
import ImageCard from './image-card';

const ImageList = (props) => {
  // destructured out by urls, id and descriptiopn instead of image. repeated 3 times CORRECTED
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  });

  return (
    <div className="image-list">
      {images}
    </div>
  );
};

export default ImageList;
