import React, { useState } from 'react';
import { Twemoji } from 'react-emoji-render';
import './form.css';

function Form() {
  const [ naps, setNaps ] = useState(0);
  const [ feed, setFeed ] = useState(0);
  const [ poo, setPoo ] = useState(0);
  const [ pee, setPee ] = useState(0);

  const increaseNaps = () => {
    setNaps(prevNaps => prevNaps + 1)
  }

  const decreaseNaps = () => {
    if (naps <= 0) setNaps(0)
    else setNaps(prevNaps => prevNaps - 1)
  }

  return (
    <div className="form">
      <div className="form-section">
        <Twemoji text=":sleeping:" onlyEmojiClassName="emoji" />
        <div className="form-field">
          <label>Naps</label>
          <div className="counter">
            <span
              className="counter-button"
              onClick={decreaseNaps}
              >-</span>
            <span>{naps}</span>
            <span
              className="counter-button"
              onClick={increaseNaps}
              >+</span>
          </div>
        </div>
      </div>
      <div className="form-section">
        <Twemoji text=":baby_bottle:" onlyEmojiClassName="emoji" />
        <div className="form-field">
          <label>Times fed</label>
          <div className="counter">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </div>
        </div>
      </div>
      <div className="form-section">
        <Twemoji text=":droplet:" onlyEmojiClassName="emoji" />
        <div className="form-field">
          <label>Diaper changes (#1)</label>
          <div className="counter">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </div>
        </div>
      </div>
      <div className="form-section">
        <Twemoji text=":sleeping:" onlyEmojiClassName="emoji" />
        <div className="form-field">
          <label>Diaper changes(#2)</label>
          <div className="counter">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form;
