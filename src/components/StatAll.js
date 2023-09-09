import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import imgAvatar from '../assets/money-1425580_1920.png';

const Stats = () => {
  const stats = useSelector((state) => state.stats.stats);

  function shortRevenue(revenue) {
    return (parseInt(revenue, 10) / 1000000000).toFixed(2);
  }

  const [filter, setFilter] = useState('All');

  const tab = [{ id: 0, name: 'All' }];
  stats.map((stat) => (
    tab.push({
      id: stat.id,
      name: stat.calendarYear,
    })
  ));

  const searchedStats = stats.filter((data) => {
    const { calendarYear } = data;
    return calendarYear.includes(filter);
  });

  return (
    <>
      <ul className="filters">
        {tab.map((option) => (
          <button
            type="button"
            onClick={() => setFilter(option.name)}
            key={option.id}
            style={{ backgroundColor: filter === option.name ? '#ce4277' : 'white', color: filter === option.name ? 'white' : 'black' }}
          >
            { option.name }
          </button>
        ))}
      </ul>
      <section className="cards">
        {searchedStats.map((stat) => (
          <Link to={`/details/${stat.calendarYear}`} key={stat.id} className="card">
            <div className="avatar">
              <img src={imgAvatar} alt="" />
            </div>
            <div className="desc">
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
        {filter === 'All' && stats.length > 0 && stats.map((stat) => (
          <Link to={`/details/${stat.calendarYear}`} key={stat.id} className="card">
            <div className="avatar">
              <img src={imgAvatar} alt="" />
            </div>
            <div className="desc">
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
      </section>
    </>
  );
};

export default Stats;
