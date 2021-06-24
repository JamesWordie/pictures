import React from 'react';

const ImageList = (props) => {
  const images = props.images.map(({ urls, id, description }) => {
    return <img src={urls.thumb} key={id} alt={description} />
  });

  return <div>{images}</div>;
};

export default ImageList;
