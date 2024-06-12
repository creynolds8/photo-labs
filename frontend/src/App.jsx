import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const photoObjs = [];

while (photoObjs.length < 3) {
  photoObjs.push(sampleDataForPhotoListItem)
}

const photos = photoObjs.map((photo, index) => <PhotoListItem key={index} photo={photo}/>)

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="photo-list">
      {photos}
    </div>
  );
};

export default App;
