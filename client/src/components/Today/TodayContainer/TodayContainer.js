import React from 'react';
import DailyCounter from '../DailyCounter/DailyCounter';
import { Twemoji } from 'react-emoji-render';
import './today.css';

function TodayContainer() {

  return (
    <div className="today-container">
      <div className="today-content">
        <div className="today-data">
          <div className="about-baby">
            <div className="img">
              <Twemoji text=':baby:' onlyEmojiClassName="about-img" />
            </div>
            <h1>Baby Riku</h1>
          </div>
          <DailyCounter />
        </div>

        <div className="notes">
          <h1>Diary</h1>
          <textarea />
          <button className="button">Save</button>
        </div>
      </div>
    </div>
  )
};

export default TodayContainer;
