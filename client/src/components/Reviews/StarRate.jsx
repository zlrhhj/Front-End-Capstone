/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as SolidStar } from '@fortawesome/free-solid-svg-icons';

const { useState } = React;

function StarRate() {
  const [rating, setRating] = useState(null);
  const [starText, setStarText] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const selected = (stars) => {
    switch (stars) {
    case 1:
      setStarText('1 star - "Poor"');
      break;
    case 2: setStarText('2 stars - "Fair'); break;
    case 3: setStarText('3 stars - "Average'); break;
    case 4: setStarText('4 stars - "Good"'); break;
    case 5: setStarText('5 stars - "Great"'); break;
    default: setStarText(null);
    }
  };

  const clickStarHandler = (stars) => {
    selected(stars);
    setIsSelected(true);
    setTimeout(() => {
      console.log(starText);
      console.log(isSelected);
    }, 2000);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        let width;
        if (currentRate <= rating) {
          width = '100%';
        } else {
          width = '0';
        }

        return (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            key={currentRate}
            value={currentRate}
            style={{
              position: 'relative',
              display: 'inline-block',
              width: '20px',
              height: '20px',
              cursor: 'pointer',
            }}
            onClick={() => { setRating(currentRate); clickStarHandler(currentRate); }}
          >
            <FontAwesomeIcon icon={SolidStar} color="lightgrey" />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${width}`,
                overflow: 'hidden',
              }}
            >
              <FontAwesomeIcon icon={SolidStar} color="#ffc107" />
            </div>
          </div>
        );
      })}
      <div>
        {isSelected ? `  ${starText}` : ' '}
      </div>

    </div>
  );
}

export default StarRate;
