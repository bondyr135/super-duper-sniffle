import React from 'react'
import Breed from './Breed'
import './DogsList.css'

export default function DogsList({ choose, breed }) {
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


  return (
    <div className="breedsList">
        {BREEDS.map(name => {
          return <Breed key={name} breedName={name} clicked={choose} breed={breed}/>
        })
      }
    </div>
  )
}
