import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Stats from '../components/StatAll';
import { fetchStatsAsync } from '../redux/stats/statsSlice';
import Header from '../components/Header';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatsAsync());
  });
  return (
    <div>
      <Header title="Years view" back="false" />
      <Stats />
    </div>
  );
}

export default Home;
