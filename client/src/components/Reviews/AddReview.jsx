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
  const [summary, setSummary] = useState('');
  const [email, setEmail] = useState(null);
  const [body, setBody] = useState(null);
  const [bodyCharsLen, setBodyCharsLen] = useState(null);

  const [nickname, setNickname] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [characteristics, setCharacteristics] = useState({});

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
    setRecommend(e.target.value === true);
  };

  const sizeOnClick = (e) => {
    const newCharteristics = { ...characteristics, Size: parseInt(e.target.value, 10) };
    setCharacteristics(newCharteristics);
  };

  const widthOnClick = (e) => {
    const newCharteristics = { ...characteristics, Width: parseInt(e.target.value, 10) };
    setCharacteristics(newCharteristics);
  };

  const comfortOnClick = (e) => {
    const newCharteristics = { ...characteristics, Comfort: parseInt(e.target.value, 10) };
    setCharacteristics(newCharteristics);
  };

  const qualityOnClick = (e) => {
    const newCharteristics = { ...characteristics, Quality: parseInt(e.target.value, 10) };
    setCharacteristics(newCharteristics);
  };

  const lengthOnClick = (e) => {
    const newCharteristics = { ...characteristics, Length: parseInt(e.target.value, 10) };
    setCharacteristics(newCharteristics);
  };
  const fitOnClick = (e) => {
    const newCharteristics = { ...characteristics, Fit: parseInt(e.target.value, 10) };
    setCharacteristics(newCharteristics);
  };

  const summaryChange = (e) => {
    setSummary(e.target.value);
  };

  const bodyChange = (e) => {
    setBody(e.target.value);
    setBodyCharsLen(e.target.value.length);
  };

  const nicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
  }
  const submitHandler = () => {
    const messages = ['You must enter the following'];
    const data = {};
    data.product_id = product_id;
    if (rating) {
      data.rating = rating;
    } else {
      messages.push('Overall Rating');
    }

    if (Object.keys(characteristics).length > 0) {
      console.log(characteristics);
      data.characteristics = { ...characteristics };
    } else {
      messages.push('Characteristics');
    }
    if (body && bodyCharsLen >= 50) {
      data.body = body;
    } else {
      messages.push('Review Body');
    }
    if (nickname) {
      data.name = nickname;
    } else {
      messages.push('Nickname');
    }
    if (email && isValidEmail(email)) {
      data.email = email;
    } else {
      messages.push('Email');
    }
    data.summary = summary;

    data.recommend = recommend;
    data.photos = photos;
    if (messages.length > 1) {
      alert(messages.join('\n'));
    } else {
      axios.post('/reviews', data)
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
          <div className="star-rating">
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
            <input type="radio" id="yes" name="recommend" value="true" onClick={recommendClick} defaultChecked />
            <label htmlFor="yes">Yes</label>

            <input type="radio" id="no" name="recommend" value="false" onClick={recommendClick} />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <div className="characteristcs">
          <h3>characteristcis</h3>
          <div className="product-size">
            <fieldset>
              <legend>Size</legend>
              <div className="radio-container">
                <label className="radio-btn">
                  {' '}
                  <input type="radio" id="size1" name="size" value="1" onClick={sizeOnClick} />
                  A size too small
                </label>

                <label className="radio-btn">
                  <input type="radio" id="size2" name="size" value="2" onClick={sizeOnClick} />
                  1/2 a size too small
                </label>

                <label className="radio-btn">
                  <input type="radio" id="size3" name="size" value="3" onClick={sizeOnClick} />
                  Perfect
                </label>

                <label className="radio-btn">
                  <input type="radio" id="size4" name="size" value="4" onClick={sizeOnClick} />
                  1/2 a size too big
                </label>

                <label className="radio-btn">
                  <input type="radio" id="size5" name="size" value="5" onClick={sizeOnClick} />
                  A size too wide
                </label>
              </div>
            </fieldset>
          </div>
          <div className="product-width">
            <fieldset>
              <legend>Width</legend>
              <div className="radio-container">

                <label className="radio-btn">
                  <input type="radio" id="width1" name="width" value="1" onClick={widthOnClick} />
                  Too narrow
                </label>

                <label className="radio-btn">
                  <input type="radio" id="width2" name="width" value="2" onClick={widthOnClick} />
                  Slightly narrow
                </label>

                <label className="radio-btn">
                  <input type="radio" id="width3" name="width" value="3" onClick={widthOnClick} />
                  Ok
                </label>

                <label className="radio-btn">
                  <input type="radio" id="width4" name="width" value="4" onClick={widthOnClick} />
                  Slightly wide
                </label>

                <label className="radio-btn">
                  <input type="radio" id="width5" name="width" value="5" onClick={widthOnClick} />
                  Too wide
                </label>
              </div>
            </fieldset>
          </div>
          <div className="product-comfort">
            <fieldset>
              <legend>Comfort</legend>
              <div className="radio-container">

                <label className="radio-btn">
                  <input type="radio" id="comfort1" name="comfort" value="1" onClick={comfortOnClick} />
                  Uncomfortable
                </label>

                <label className="radio-btn">
                  {' '}
                  <input type="radio" id="comfort2" name="comfort" value="2" onClick={comfortOnClick} />
                  Slightly uncomfortable
                </label>

                <label className="radio-btn">
                  <input type="radio" id="comfort3" name="comfort" value="3" onClick={comfortOnClick} />
                  Ok
                </label>

                <label className="radio-btn">
                  <input type="radio" id="comfort4" name="comfort" value="4" onClick={comfortOnClick} />
                  Comfortable
                </label>

                <label className="radio-btn">
                  {' '}
                  <input type="radio" id="comfort5" name="comfort" value="5" onClick={comfortOnClick} />
                  Perfect
                </label>
              </div>
            </fieldset>
          </div>
          <div className="product-quality">
            <fieldset>
              <legend>Quality</legend>
              <div className="radio-container">

                <label className="radio-btn">
                  <input type="radio" id="quality1" name="quality" value="1" onClick={qualityOnClick} />
                  Poor
                </label>

                <label className="radio-btn">
                  <input type="radio" id="quality2" name="quality" value="2" onClick={qualityOnClick} />
                  Below average
                </label>

                <label className="radio-btn">
                  <input type="radio" id="quality3" name="quality" value="3" onClick={qualityOnClick} />
                  What I expected
                </label>

                <label className="radio-btn">
                  {' '}
                  <input type="radio" id="quality4" name="quality" value="4" onClick={qualityOnClick} />
                  Pretty great
                </label>

                <label className="radio-btn">
                  <input type="radio" id="quality5" name="quality" value="5" onClick={qualityOnClick} />
                  Perfect
                </label>
              </div>
            </fieldset>
          </div>
          <div className="product-length">
            <fieldset>
              <legend>Length</legend>
              <div className="radio-container">

                <label className="radio-btn">
                  <input type="radio" id="length1" name="length" value="1" onClick={lengthOnClick} />
                  Runs short
                </label>

                <label className="radio-btn">
                  <input type="radio" id="length2" name="length" value="2" onClick={lengthOnClick} />
                  Runs slightly short
                </label>

                <label className="radio-btn">
                  {' '}
                  <input type="radio" id="length3" name="length" value="3" onClick={lengthOnClick} />
                  Perfect
                </label>

                <label className="radio-btn">
                  <input type="radio" id="length4" name="length" value="4" onClick={lengthOnClick} />
                  Runs slightly long
                </label>

                <label className="radio-btn">
                  <input type="radio" id="length5" name="length" value="5" onClick={lengthOnClick} />
                  Runs long
                </label>
              </div>
            </fieldset>
          </div>
          <div className="product-fit">
            <fieldset>
              <legend>Fit</legend>
              <div className="radio-container">

                <label className="radio-btn">
                  <input type="radio" id="fit1" name="fit" value="1" onClick={fitOnClick} />
                  Runs tight
                </label>

                <label className="radio-btn">
                  <input type="radio" id="fit2" name="fit" value="2" onClick={fitOnClick} />
                  Runs slightly tight
                </label>

                <label className="radio-btn">
                  <input type="radio" id="fit3" name="fit" value="3" onClick={fitOnClick} />
                  Perfect
                </label>

                <label className="radio-btn">
                  <input type="radio" id="fit4" name="fit" value="4" onClick={fitOnClick} />
                  Runs slightly long
                </label>

                <label className="radio-btn">
                  <input type="radio" id="fit5" name="fit" value="5" onClick={fitOnClick} />
                  Runs long
                </label>
              </div>
            </fieldset>
          </div>
        </div>
        <div>
          <h3>Review Summary</h3>
          <div className="review-summary">
            <input className="summary-input" type="text" value={summary} onChange={summaryChange} maxLength={60} placeholder="Example: Best purchase ever!" />
          </div>

        </div>
        <div className="review-body">
          <h3>Review Body</h3>
          <textarea rows="7" className="body-input" value={body} onChange={bodyChange} minLength={50} maxLength={1000} placeholder="Why did you like the product or not?" />
          <div>
            <span>{ bodyCharsLen < 50 ? `Minimum required characters left: [${50 - bodyCharsLen}]` : 'Minimum reached'}</span>
          </div>
        </div>
        <div className="upload-photos">
          <h3>Upload photos</h3>
          <UploadPhoto setPhotos={setPhotos} />
          <div className="uploaded-file" id="fileName" />
        </div>
        <div className="nickname">
          <h3>What is your nickname (mandatory)</h3>
          <input className="nickname-input" type="text" value={nickname} onChange={nicknameChange} placeholder="Example: jackson11!" maxLength={60} />
          <p><i>**For privacy reasons, do not use your full name or email address</i></p>
        </div>
        <div className="email">
          <h3>Your email (mandatory)</h3>
          <input className="email-input" type="text" value={email} onChange={emailChange} placeholder="Example: jackson11@email.com" maxLength={60} />
          <p><i>**For authentication reasons, you will not be emailed</i></p>
        </div>
        <div>
          <button className="submit-button" type="button" onClick={submitHandler}>Submit</button>
        </div>

      </form>

    </div>
  );
}
export default AddReview;
