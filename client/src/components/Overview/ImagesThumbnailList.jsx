import ImagesThumbnailListItem from './ImagesThumbnailListItem.jsx';

var ImagesThumbnailList = function ( {photoArray, handlePhotoIndexChange} ) {
  var index = -1;
  return (
    <div className="imgThumbnailList">
      {
        photoArray.map((item) => {
          index++;
          return <ImagesThumbnailListItem photo={photoArray[index]} index={index} handlePhotoIndexChange={handlePhotoIndexChange} />
        })
      }
    </div>
  )
};

export default ImagesThumbnailList;