import React from 'react'
import './Breed.css'

export default function Breed({ breedName, clicked, breed }) {

  const parsedName = breedName.split(' ').reverse().join('/');
  const isClicked = breed === parsedName.toLowerCase() ? 'button clicked' : 'button';

  return (
    <div className={"breedDiv"}>
      <button onClick={clicked} className={isClicked}>
        {breedName}
      </button>
    </div> 
  )
}
