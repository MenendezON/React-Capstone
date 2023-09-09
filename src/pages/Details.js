import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Headers from '../components/Header';
import SpecDetails from '../components/SpecDetails';
import { fetchStatsAsync } from '../redux/stats/statsSlice';

function Details() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatsAsync());
  });
  return (
    <div>
      <Headers title="Content view" back="true" />
      <SpecDetails />
    </div>
  );
}

export default Details;
