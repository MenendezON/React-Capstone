import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Link,
} from 'react-router-dom';

const Stats = () => {
  const stats = useSelector((state) => state.stats.stats);
  const [filter, setFilter] = useState('All');

  const tab = [{ id: 0, name: 'All' }];
  stats.map((stat) => (
    tab.push({
      id: stat.id,
      name: stat.calendarYear,
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

        {stats.length > 0 && filter === 'All' && stats.map((stat) => (
          <Link to={`/details/${stat.calendarYear}`} key={stat.id} className="card">
            <div>
              <p>{stat.calendarYear}</p>
              <h3>{stat.symbol}</h3>
              <h2>
                $
                { shortRevenue(stat.revenue)}
                {' '}
                bills
              </h2>
              <p>{stat.date}</p>
            </div>
          </Link>
        ))}
        {stats.length > 0 && filter !== 'All' && stats.filter((stat) => stat.calendarYear === filter).map((stat) => (
          <Link to={`/details/${stat.calendarYear}`} key={stat.id} className="card">
            <div>
              <p>{stat.calendarYear}</p>
              <h3>{stat.symbol}</h3>
              <h2>
                $
                { shortRevenue(stat.revenue)}
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

export default Stats;
