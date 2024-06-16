import React, { useReducer, useEffect } from "react";

export default function useApplicationData() {
  const reducer = function (state, action) {
    switch (action.type) {
      case "toggle-fav":
          if (state.favPhotos.includes(action.payload)) {
            return {
              ...state,
              favPhotos: state.favPhotos.filter((id) => id !== action.payload),
            };
          }
          return { ...state, favPhotos: [...state.favPhotos, action.payload] };
      case 'open-modal':
        const foundPhoto = state.photoData.find((photo) => photo.id === action.payload.id)
        return { ...state, modal: { open: true, photo: foundPhoto }}
      case 'close-modal':
        return {...state, modal: { open: false, photo: null }}
      case 'set-photo-data':
        return {...state, photoData: [...action.payload]}
      case 'set-topic-data':
        return {...state, topicData: [...action.payload]}
      case 'get-photos-by-topic':
        fetch(`/api/topics/photos/${action.payload}`)
          .then(res => res.json())
          .then(data => dispatch({payload: data, type: 'set-photo-data'}))
        return state
        default:
          return state;
    }
  };

  useEffect(() => {
    fetch('/api/photos', {method: 'GET'})
      .then(resPhotos => resPhotos.json())
      .then(photos => dispatch({payload: photos, type: 'set-photo-data'}))
    fetch('/api/topics', {method: 'GET'})
      .then(resTopics => resTopics.json())
      .then(topics => dispatch({payload: topics, type: 'set-topic-data'}))
  },[])

  const [state, dispatch] = useReducer(reducer, {
    favPhotos: [],
    modal: { open: false, photo: null },
    photoData: [],
    topicData: [],
  });

  return {
    state,
    dispatch,
  };
}
