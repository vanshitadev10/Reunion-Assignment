import React, { Fragment, useState } from 'react';

import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Properties from './components/Properties/Properties';

const App = () => {

  const [data, setData] = useState('');
  const [favData, setFavData] = useState('');
  const [favour, setFavour] = useState('');
  console.log(data)

  const filterData = (filter) => {
    setData(filter);
    console.log(data)
  }

  const favouriteData = (fav) => {
    setFavData(fav);
    console.log(data)
  }

  const currentFavour = (fav) => {
    setFavour(fav);
  }

  return (
    <Fragment>
      <Header />
      <h1 className='heading'>Search properties to rent</h1>
      <Filter currentFilterValues={filterData} favouriteFilterValues={favouriteData} currentFavour={currentFavour} />
      <Properties currentData={data} favourite={favData} currentFavourData={favour} />
    </Fragment>
  );
};

export default App;