import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dragons from '../components/dragons';
import { fetchDragonsAsync } from '../redux/dragons/dragonsSlice';
import Headers from '../components/Header';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragonsAsync());
  });
  return (
    <div>
      <Headers title="Years view" back="false" />
      <Dragons />
    </div>
  );
}

export default Home;
