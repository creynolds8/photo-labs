import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} select={props.state.favPhotos.length > 0} />
      <PhotoList photos={props.photos} state={props.state} dispatch={props.dispatch} handleImageClick={props.handleImageClick}/>
    </div>
  );
};

export default HomeRoute;
