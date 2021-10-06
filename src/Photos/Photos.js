import React, { useState, useEffect } from 'react'
import './Photos.css'

export default function Photos({ displayedBreed, refresh, counter }) {
  const [ images, setImages ] = useState([]);

  /// CHANGES STATE WHENEVER A NEW BREED IS SELECTED OR A REFRESH REQUEST IS MADE
  useEffect(() => {
    if (displayedBreed !== '' ) {

      /// ACTUAL API CALL
    async function callDogs() {
        const numOfDogs = counter * 10;
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${displayedBreed}/images/random/${numOfDogs}`);
        const data = await response.json();
        let rawImages = data.message;
        setImages(rawImages.splice(rawImages.length - 10));
      } catch(e) { 
        alert('Apperantly something went wrong while trying to reach the API');
      }
    };

    callDogs();
  }
  }, [displayedBreed, counter])



  return (
    <main className="photos">
      <button onClick={refresh} className="refreshButton">REFRESH</button>
      <div className="gallery">
        {images.map(img => {
          return <img key={`${img}`} src={`${img}`} alt='Something went wrong' className="dogPic" />
        })}
      </div>
    </main>
  )
}
