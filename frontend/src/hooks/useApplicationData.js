import React, { useReducer } from "react";

import photos from "mocks/photos";

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
        const foundPhoto = photos.find((photo) => photo.id === action.payload.id)
        return { ...state, modal: { open: true, photo: foundPhoto }}
      case 'close-modal':
        return {...state, modal: { open: false, photo: null }}
        default:
          return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { favPhotos: [], modal: { open: false, photo: null } });

  return {
    state,
    dispatch,
  };
}
