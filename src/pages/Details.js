import React from 'react';
import Headers from '../components/Header';
import SpecDetails from '../components/SpecDetails';

function Details() {
  return (
    <div>
      <Headers title="Content view" back="true" />
      <SpecDetails />
    </div>
  );
}

export default Details;
