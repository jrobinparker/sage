import React from 'react';
import { Twemoji } from 'react-emoji-render';
import './daily-counter.css';

export default function Counter({ emoji, title, count, increase, decrease }) {
  return (
    <div className="form-section">
      <Twemoji text={`:${emoji}:`} onlyEmojiClassName="emoji" />
      <div className="form-field">
        <label>{title}</label>
        <div className="counter">
          <span
            className="counter-button"
            onClick={decrease}
            >-</span>
          <span>{count}</span>
          <span
            className="counter-button"
            onClick={increase}
            >+</span>
        </div>
      </div>
    </div>
  )
};
