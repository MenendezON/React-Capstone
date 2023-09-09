import React from 'react';
import { useSelector } from 'react-redux';
import {
  useParams, Link,
} from 'react-router-dom';

const SpecDetails = () => {
  const stats = useSelector((state) => state.stats.stats);

  const filter = useParams();
  function shortRevenue(revenue) {
    return revenue.toLocaleString('en-US');
  }

  return (
    <>
      {stats.length > 0 && filter !== 'All' && stats.filter((stat) => stat.calendarYear === filter.yearToFilter).map((stat) => (
        <section key={stat.id}>
          <fieldset className="card-spec">
            <legend>{stat.date}</legend>
            <p>{stat.calendarYear}</p>
            <h3>{stat.symbol}</h3>
            <h2>
              $
              {shortRevenue(stat.revenue).toLocaleString('en-US')}
              {' '}
              {stat.reportedCurrency}
            </h2>
          </fieldset>
          <ul>
            <li>
              <p>Filling</p>
              <h3>{stat.fillingDate}</h3>
            </li>
            <li>
              <p>Accepted</p>
              <h3>{stat.acceptedDate}</h3>
            </li>
            <li>
              <p>Gross profit</p>
              <h3>
                {stat.grossProfit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                {' '}
                {stat.reportedCurrency}
              </h3>
            </li>
            <li>
              <p>Cost of revenue</p>
              <h3>
                {stat.costOfRevenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                {' '}
                {stat.reportedCurrency}
              </h3>
            </li>
            <li>
              <p>Net income</p>
              <h3>
                {stat.netIncome.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                {' '}
                {stat.reportedCurrency}
              </h3>
            </li>
            <li>
              <p>Operating income</p>
              <h3>
                {stat.operatingIncome.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                {' '}
                {stat.reportedCurrency}
              </h3>
            </li>
            <li>
              <p>Link</p>
              <h3><Link to={stat.link}>Click on this link</Link></h3>
            </li>
            <li>
              <p>Final Link</p>
              <h3><Link to={stat.finaLink}>Click on this link</Link></h3>
            </li>
          </ul>
        </section>
      ))}
    </>
  );
};

export default SpecDetails;
