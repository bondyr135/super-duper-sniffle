import React from 'react'
import './Breed.css'

export default function Breed({ breedName, clicked, shownBreed }) {

  /// CHECKS WHETHER THE CURRENT RENDERED BREED IS THE ONE DISPLAYED
  const parsedName = breedName.split(' ').reverse().join('/').toLowerCase();
  const isClicked = parsedName === shownBreed ? 'breedButton clicked' : 'breedButton';

  return (
      <button onClick={clicked} className={isClicked} value={parsedName} >
        {breedName}
      </button>
  )
}
