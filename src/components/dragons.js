import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Link,
} from 'react-router-dom';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  const [filter, setFilter] = useState('All');

  const tab = [{ id: 0, name: 'All' }];
  dragons.map((dragon) => (
    tab.push({
      id: dragon.id,
      name: dragon.calendarYear,
    })
  ));

  function shortRevenue(revenue) {
    return (parseInt(revenue, 10) / 1000000000).toFixed(2);
  }

  return (
    <>
      <ul className="filters">
        {tab.map((option) => (
          <button
            type="button"
            onClick={() => { setFilter(option.name); }}
            key={option.id}
            style={{ backgroundColor: filter === option.name ? '#ce4277' : 'white', color: filter === option.name ? 'white' : 'black' }}
          >
            { option.name }
          </button>
        ))}
      </ul>
      <section className="cards">

        {dragons.length > 0 && filter === 'All' && dragons.map((dragon) => (
          <Link to={`/details/${dragon.calendarYear}`} key={dragon.id} className="card">
            <div>
              <p>{dragon.calendarYear}</p>
              <h3>{dragon.symbol}</h3>
              <h2>
                $
                { shortRevenue(dragon.revenue)}
                {' '}
                bills
              </h2>
            </div>
          </Link>
        ))}
        {dragons.length > 0 && filter !== 'All' && dragons.filter((dragon) => dragon.calendarYear === filter).map((dragon) => (
          <Link to={`/details/${dragon.calendarYear}`} key={dragon.id} className="card">
            <div>
              <p>{dragon.calendarYear}</p>
              <h3>{dragon.symbol}</h3>
              <h2>
                $
                { shortRevenue(dragon.revenue)}
                {' '}
                bills
              </h2>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Dragons;
