import React from 'react';

import './App.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

// import PhotoListItem from './components/PhotoListItem';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="photo-list">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
