import React from 'react'
import './Breed.css'

export default function Breed({ breedName, clicked, breed }) {

  const isClicked = breed === breedName.toLowerCase() ? 'button clicked' : 'button';

  return (
    <div className={"breedDiv"}>
      <button onClick={clicked} className={isClicked}>
        {breedName}
      </button>
    </div> 
  )
}
