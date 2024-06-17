import ImagesThumbnailList from './ImagesThumbnailList.jsx';
import React from 'react';

var Images = function ( {photoArray} ) {
  const [activePhotoIndex, setActivePhotoIndex] = React.useState(0);
  var handlePhotoIndexChange = function (newIndex) {
    setActivePhotoIndex(newIndex);
  }
  return (
    <div className="images">
      <ImagesThumbnailList photoArray={photoArray} handlePhotoIndexChange={handlePhotoIndexChange}/>
      <i className="imgArrow" onClick={() => {
        if (activePhotoIndex === 0) {
          setActivePhotoIndex(photoArray.length - 1);
        } else {
          setActivePhotoIndex(activePhotoIndex - 1);
        }
      }}className="fa-solid fa-arrow-left"></i>
      <img className="mainimg" src={photoArray[activePhotoIndex].url}></img>
      <i  className="imgArrow" onClick={() => {
        if (activePhotoIndex === photoArray.length - 1) {
          setActivePhotoIndex(0);
        } else {
          setActivePhotoIndex(activePhotoIndex + 1);
        }
      }} className="fa-solid fa-arrow-right"></i>
    </div>
  )
};

export default Images;