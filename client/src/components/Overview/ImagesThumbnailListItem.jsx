
var ImagesThumbnailListItem = function ( {photo, index, handlePhotoIndexChange} ) {
  return (
    <img className="thumbnail" src={photo.thumbnail_url} onClick={() => {
        handlePhotoIndexChange(index);
      }
    }></img>
  )
};

export default ImagesThumbnailListItem;