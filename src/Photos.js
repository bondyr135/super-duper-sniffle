import React, { useState, useEffect } from 'react'
import './Photos.css'

export default function Photos({ refresh, breed, counter }) {
  const [ images, setImages ] = useState([])

  function refreshPhotos() {
    const refreshEvent = new Event('refresh')
    refresh(refreshEvent)
  }

  /// CHANGES STATE WHENEVER A NEW BREED IS SELECTED\PAGE UPLOADS
  useEffect(() => {
    if (breed !== '' ) {
      callDogs();
  }
  }, [breed, counter])

  /// MAKES ACTUALL API REQUEST
  function callDogs() {
    const pages = counter * 10;
    fetch(
      `https://dog.ceo/api/breed/${breed}/images/random/${pages}`
    )
    .then(res => {
      return res.json();
    })
    .then(data => {
      let rawImages = data.message;
      setImages(rawImages.splice(rawImages.length - 10))
    })
    .catch(e => 
      console.log(e)
    )
  }

  return (
    <div className="photos">
      <button onClick={refreshPhotos} className="refreshButton">REFRESH</button>
      <div className="gallery">
      {images.map(img => {
        return <img key={`${img}`} src={`${img}`} alt='Something went wrong' className="dogPic" />
      })}
      </div>
    </div>
  )
}
