import React from 'react';
import axios from 'axios';
import StarRate from './StarRate.jsx';
import UploadPhoto from './UploadPhoto.jsx';

const { useState, useEffect } = React;

function AddReview({ product_id, closeAddReview }) {
  const [showModal, setShowModal] = useState(true);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(null);
  const [recommend, setRecommend] = useState(true);
  const [summary, setSummary] = useState(null);
  const [email, setEmail] = useState(null);
  const [body, setBody] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [photos, setPhotos] = useState([]);

  const characteristics = {};

  const getProduct = (id) => {
    axios.get('/products/:product_id', { params: { pid: id } })
      .then((result) => {
        setName(result.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (!showModal) {
    return ('');
  }
  const clickClose = () => {
    setShowModal(!showModal);
    closeAddReview();
  };

  const setStarRating = (stars) => {
    setRating(stars);
  };

  const recommendClick = (e) => {
    console.log(e.target.value);
    setRecommend(e.target.value === true);
  };

  const sizeOnClick = (e) => {
    characteristics.size3 = e.target.value;
  };

  const widthOnClick = (e) => {
    characteristics.Width = e.target.value;
  };

  const comfortOnClick = (e) => {
    characteristics.Comfort = e.target.value;
  };

  const qualityOnClick = (e) => {
    characteristics.Quality = e.target.value;
  };

  const lengthOnClick = (e) => {
    characteristics.Length = e.target.value;
  };
  const fitOnClick = (e) => {
    characteristics.Fit = e.target.value;
  };

  const summaryChange = (e) => {
    setSummary(e.target.value);
  };

  const bodyChange = (e) => {
    setBody(e.target.value);
  };

  const nicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = () => {
    let messages = '';
    console.log();
    console.log()
  }

  useEffect(() => {
    getProduct(product_id);
  }, []);
  return (
    <div className="add-review">
      <span className="close" onClick={clickClose}>&times;</span>
      <form className="review-content">
        <div>
          <h2>Write Your Review</h2>
          <p>
            About
            <b>{` ${name}`}</b>
          </p>

        </div>
        <div>
          <h3>Overall rating (mandatory)</h3>
          <div>
            <p>
              {' '}
              <StarRate setStarRating={setStarRating} />
              {' '}
            </p>
          </div>

        </div>
        <div className="recommend-container">
          <h3>Do you commmend this product? (mandatory)</h3>
          <div>
            <input type="radio" id="yes" name="recommend" value="yes" onClick={recommendClick} defaultChecked />
            <label htmlFor="yes">Yes</label>

            <input type="radio" id="no" name="recommend" value="no" onClick={recommendClick} />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <div className="characteristcs">
          <h3>characteristcis</h3>
          <div className="product-size">
            <fieldset>
              <legend>Size</legend>
              <div>
                <input type="radio" id="size1" name="size" value="1" onClick={sizeOnClick} />
                <label>A size too small</label>
                <input type="radio" id="size2" name="size" value="2" onClick={sizeOnClick} />
                <label>1/2 a size too small</label>
                <input type="radio" id="size3" name="size" value="3" onClick={sizeOnClick} />
                <label>Perfect</label>
                <input type="radio" id="size4" name="size" value="4" onClick={sizeOnClick} />
                <label>1/2 a size too big</label>
                <input type="radio" id="size5" name="size" value="5" onClick={sizeOnClick} />
                <label>A size too wide</label>
              </div>
            </fieldset>
          </div>
          <div className="product-width">
            <fieldset>
              <legend>Width</legend>
              <div>
                <input type="radio" id="width1" name="width" value="1" onClick={widthOnClick} />
                <label>Too narrow</label>
                <input type="radio" id="width2" name="width" value="2" onClick={widthOnClick} />
                <label>Slightly narrow</label>
                <input type="radio" id="width3" name="width" value="3" onClick={widthOnClick} />
                <label>Ok</label>
                <input type="radio" id="width4" name="width" value="4" onClick={widthOnClick} />
                <label>Slightly wide</label>
                <input type="radio" id="width5" name="width" value="5" onClick={widthOnClick} />
                <label>Too wide</label>
              </div>
            </fieldset>
          </div>
          <div className="product-comfort">
            <fieldset>
              <legend>Comfort</legend>
              <div>
                <input type="radio" id="comfort1" name="comfort" value="1" onClick={comfortOnClick} />
                <label>Uncomfortable</label>
                <input type="radio" id="comfort2" name="comfort" value="2" onClick={comfortOnClick} />
                <label>Slightly uncomfortable</label>
                <input type="radio" id="comfort3" name="comfort" value="3" onClick={comfortOnClick} />
                <label>Ok</label>
                <input type="radio" id="comfort4" name="comfort" value="4" onClick={comfortOnClick} />
                <label>Comfortable</label>
                <input type="radio" id="comfort5" name="comfort" value="5" onClick={comfortOnClick} />
                <label>Perfect</label>
              </div>
            </fieldset>
          </div>
          <div className="product-quality">
            <fieldset>
              <legend>Quality</legend>
              <div>
                <input type="radio" id="quality1" name="quality" value="1" onClick={qualityOnClick} />
                <label>Poor</label>
                <input type="radio" id="quality2" name="quality" value="2" onClick={qualityOnClick} />
                <label>Below average</label>
                <input type="radio" id="quality3" name="quality" value="3" onClick={qualityOnClick} />
                <label>What I expected</label>
                <input type="radio" id="quality4" name="quality" value="4" onClick={qualityOnClick} />
                <label>Pretty great</label>
                <input type="radio" id="quality5" name="quality" value="5" onClick={qualityOnClick} />
                <label>Perfect</label>
              </div>
            </fieldset>
          </div>
          <div className="product-length">
            <fieldset>
              <legend>Length</legend>
              <div>
                <input type="radio" id="length1" name="length" value="1" onClick={lengthOnClick} />
                <label>Runs short</label>
                <input type="radio" id="length2" name="length" value="2" onClick={lengthOnClick} />
                <label>Runs slightly short</label>
                <input type="radio" id="length3" name="length" value="3" onClick={lengthOnClick} />
                <label>Perfect</label>
                <input type="radio" id="length4" name="length" value="4" onClick={lengthOnClick} />
                <label>Runs slightly long</label>
                <input type="radio" id="length5" name="length" value="5" onClick={lengthOnClick} />
                <label>Runs long</label>
              </div>
            </fieldset>
          </div>
          <div className="product-fit">
            <fieldset>
              <legend>Fit</legend>
              <div>
                <input type="radio" id="fit1" name="fit" value="1" onClick={fitOnClick} />
                <label>Runs tight</label>
                <input type="radio" id="fit2" name="fit" value="2" onClick={fitOnClick} />
                <label>Runs slightly tight</label>
                <input type="radio" id="fit3" name="fit" value="3" onClick={fitOnClick} />
                <label>Perfect</label>
                <input type="radio" id="fit4" name="fit" value="4" onClick={fitOnClick} />
                <label>Runs slightly long</label>
                <input type="radio" id="fit5" name="fit" value="5" onClick={fitOnClick} />
                <label>Runs long</label>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="review-summary">
          <h3>Review Summary</h3>
          <input type="text" value={summary} onChange={summaryChange} maxLength={60} placeholder="Example: Best purchase ever!" />
          <div className="review-body">
            <h3>Review Body</h3>
            <textarea value={body} onChange={bodyChange} minLength={51} maxLength={1000} placeholder="Why did you like the product or not?" />
          </div>
          <div className="upload-photos">
            <h3>Upload photos</h3>
            <UploadPhoto setPhotos={setPhotos} />
            <div className="uploaded-file" id="fileName" />
          </div>
          <div className="nickname">
            <h3>What is your nickname (mandatory)</h3>
            <input type="text" onChange={nicknameChange} placeholder="Example: jackson11!" maxLength={60} />
            <p><i>**For privacy reasons, do not use your full name or email address</i></p>
          </div>
          <div className="email">
            <h3>Your email (mandatory)</h3>
            <input type="text" onChange={emailChange} placeholder="Example: jackson11@email.com" maxLength={60} />
            <p><i>**For authentication reasons, you will not be emailed</i></p>
          </div>
          <div className="submit-button">
            <button type="button" onClick={submitHandler}>Submit</button>
          </div>
        </div>
      </form>

    </div>
  );
}
export default AddReview;
