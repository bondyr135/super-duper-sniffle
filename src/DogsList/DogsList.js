import React from 'react'
import Breed from '../Breed/Breed'
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
    <aside className="breedsList">
        {BREEDS.map(name => {
          return <Breed className="breedItem" key={name} breedName={name} clicked={choose} breed={breed}/>
        })
      }
    </aside>
  )
}
