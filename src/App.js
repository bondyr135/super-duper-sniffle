import React, { useState } from 'react'
import './App.css';
import DogsList from './DogsList';
import Photos from './Photos';

function App() {

  const [ breed, setBreed ] = useState('')
  const [ reqCount, setReqCount ] = useState(1)

  /// HANDLES CLICKING ON A BREED
  function handleClick (e){
    if (e.type === 'click') {
      let newBreed = e.target.innerHTML.toLowerCase();
      newBreed = newBreed.split(' ').reverse().join('/');
      setReqCount(1)
      setBreed(newBreed)
    } else {
      setReqCount(reqCount + 1)
    }
  }

  return (
  <>
    <DogsList className="list" choose={handleClick} breed={breed} />
    <Photos className="photos" refresh={handleClick} breed={breed} counter={reqCount} />
  </>
  );
}

export default App;
