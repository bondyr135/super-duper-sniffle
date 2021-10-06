import React from 'react'
import Breed from '../Breed/Breed'
import './BreedsList.css'


const BREEDS = [
  'Golden Retriever',
  'Pomeranian',
  'Dachshund',
  'Appenzeller',
  'Beagle',
  'Brabancon',
  'Chihuahua',
  'Blood Hound',
  'Labrador',
  'Malamute'
]

export default function BreedsList({ clickOnBreed, displayedBreed }) {

  return (
    <aside className="breedsList">
        {BREEDS.map(name => {
          return <Breed 
            className="breedItem" 
            key={name} 
            breedName={name} 
            clicked={clickOnBreed} 
            shownBreed={displayedBreed}
            />
        })
      }
    </aside>
  )
}
