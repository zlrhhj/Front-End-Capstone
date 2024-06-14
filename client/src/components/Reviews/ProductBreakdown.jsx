import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacteristicsBar from './CharacteristicsBar.jsx';

function ProductBreakdown({ id }) {
  const [characteristics, setCharacteristics] = useState(null);

  const getReviewMeta = () => {
    axios.get('reviews/meta', { params: { product_id: id } })
      .then((results) => {
        setCharacteristics(results.data.characteristics);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getReviewMeta();
  }, []);
  return (
    <div className="product-breakdown-container">
      {
        characteristics && characteristics.Quality
          ? (
            <div className="characteristics-container">
              <span>Quality</span>
              <CharacteristicsBar value={characteristics.Quality.value} labels={['Poor', 'Ok', 'Perfect']} />
            </div>
          ) : ''
      }
      {
        characteristics && characteristics.Size
          ? (
            <div className="characteristics-container">
              <span>Size</span>
              <CharacteristicsBar value={2} labels={['Too small', 'Perfect', 'Too large']} />
            </div>
          ) : ''
      }
      {
        characteristics && characteristics.Width
          ? (
            <div className="characteristics-container">
              <span>Width</span>
              <CharacteristicsBar value={3} labels={['Too narrow', 'Ok', 'Too wide']} />
            </div>
          ) : ''
      }
      {
        characteristics && characteristics.Comfort
          ? (
            <div className="characteristics-container">
              <span>Comfort</span>
              <CharacteristicsBar value={4} labels={['Poor', 'Ok', 'Perfect']} />
            </div>
          ) : ''
      }
      {
        characteristics && characteristics.Length
          ? (
            <div className="characteristics-container">
              <span>Length</span>
              <CharacteristicsBar value={4} labels={['Short', 'Perfect', 'Long']} />
            </div>
          ) : ''
      }
      {
        characteristics && characteristics.Fit
          ? (
            <div className="characteristics-container">
              <span>Fit</span>
              <CharacteristicsBar value={4} labels={['Tight', 'Perfect', 'Long']} />
            </div>
          ) : ''
      }

    </div>

  );
}
export default ProductBreakdown;
