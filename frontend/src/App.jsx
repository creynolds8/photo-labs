import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";

import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
  const [modal, setModal] = useState({open: false, photo: null});
  const handleImageClick = (photo) => {
    setModal({open: true, photo: photo});
  };
  const handleCloseModal = () => {
    setModal({open: false, photo: null})
  }
  return (
    <div className="photo-list">
      <HomeRoute
        topics={topics}
        photos={photos}
        handleImageClick={handleImageClick}
      />
      {modal.open && <PhotoDetailsModal photo={modal.photo} handleCloseModal={handleCloseModal}/>}
    </div>
  );
};

export default App;
