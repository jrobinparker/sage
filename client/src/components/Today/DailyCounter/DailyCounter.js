import React, { useState } from 'react';
import Counter from './counter';

function DailyCounter() {
  const [ naps, setNaps ] = useState(0);
  const [ feed, setFeed ] = useState(0);
  const [ pee, setPee ] = useState(0);
  const [ poo, setPoo ] = useState(0);

  const increase = counter => {
    switch (counter) {
      case 'naps':
        setNaps(prevNaps => prevNaps + 1);
        break;
      case 'feed':
        setFeed(prevFeed => prevFeed + 1);
        break;
      case 'pee':
        setPee(prevPee => prevPee + 1);
        break;
      case 'poo':
        setPoo(prevPoo => prevPoo + 1);
        break;
      default:
        break;
    }
  }

  const decrease = counter => {
    switch(counter) {
      case 'naps':
        naps <= 0 ? setNaps(0) :  setNaps(prevNaps => prevNaps - 1);
        break;
      case 'feed':
        feed <= 0 ? setFeed(0) :  setFeed(prevFeed => prevFeed - 1);
        break;
      case 'pee':
        pee <= 0 ? setPee(0) :  setPee(prevPee => prevPee - 1);
        break;
      case 'poo':
        poo <= 0 ? setPoo(0) :  setPoo(prevPoo => prevPoo - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="form">
      <Counter
        title='Naps'
        emoji='sleeping'
        count={naps}
        increase={() => increase('naps')}
        decrease={() => decrease('naps')}
      />
      <Counter
        title='Times fed'
        emoji='baby_bottle'
        count={feed}
        increase={() => increase('feed')}
        decrease={() => decrease('feed')}
      />
      <Counter
        title='Diaper changes (#1)'
        emoji='droplet'
        count={pee}
        increase={() => increase('pee')}
        decrease={() => decrease('pee')}
      />
      <Counter
        title='Diaper changes (#2)'
        emoji='poop'
        count={poo}
        increase={() => increase('poo')}
        decrease={() => decrease('poo')}
      />
    </div>
  )
}

export default DailyCounter;
