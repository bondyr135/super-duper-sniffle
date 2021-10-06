import React, { useState } from 'react'
import './App.css';
import BreedsList from './BreedsList/BreedsList';
import Photos from './Photos/Photos';

function App() {

  const [ breed, setBreed ] = useState('')
  const [ reqCount, setReqCount ] = useState(1)

  /// HANDLES CLICKING ON A BREED
  function selectBreed (e) {
    let newBreed = e.target.value;
    setReqCount(1)
    setBreed(newBreed)
  }

  /// HANDLES A CLICK ON THE REFRESH BUTTON
  function refreshPhotos (e) {
    setReqCount(reqCount + 1)
  }

  return (
  <>
    <BreedsList className="list" clickOnBreed={selectBreed} displayedBreed={breed} />
    <Photos className="photos" refresh={refreshPhotos} displayedBreed={breed} counter={reqCount} />
  </>
  );
}

export default App;
