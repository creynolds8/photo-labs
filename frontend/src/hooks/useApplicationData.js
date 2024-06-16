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
        default:
          return state;
    }
  };

  useEffect(() => {
    fetch('/api/photos', {method: 'GET'})
      .then(res => res.json())
      .then(data => dispatch({payload: data ,type: 'set-photo-data'}))
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
