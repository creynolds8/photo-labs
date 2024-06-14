import React, { useReducer } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const reducer = function(state, action) {
  if (action.type === 'toggle-fav') {
    if (state.favPhotos.includes(action.payload)) {
      return {...state, favPhotos: state.favPhotos.filter(id => id !== action.payload)}
    }
    return {...state, favPhotos: [...state.favPhotos, action.payload]}
  }
}

const HomeRoute = (props) => {
  const [ state, dispatch ] = useReducer(reducer, {favPhotos: []})
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} select={state.favPhotos.length > 0} />
      <PhotoList photos={props.photos} state={state} dispatch={dispatch}/>
    </div>
  );
};

export default HomeRoute;
