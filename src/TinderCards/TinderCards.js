import React, { useState } from 'react'
import  './TinderCards.css'
import {personList} from './TinderList.js'
import TinderCard from 'react-tinder-card'

function TinderCards() {

    const [people,setPeople]=useState(personList)
    const swiped =(dir,nameToDelete)=>{
        console.log("removing:"+nameToDelete)
    }

    const outOfFrame=(name)=>{
        console.log(name+ "left the screen")

    }
    return (
    <div className="tinderCards">
    <div className="tinderCards__cardContainer">
    {people.map((person)=>(
       <TinderCard
          className='swipe'
          key={person.name}
          preventSwipe={['up','down']}
          onSwipe={(dir)=>swiped(dir,person.name)}
          onCardLeftScreen={()=>outOfFrame(person.name)}
        >
          <div className= 'card' >
            <img src={
               `${person.url}`}
            ></img>
            <h2>{person.name}</h2>
          </div>
        </TinderCard>
        ))
            
        
    }
    </div>
    </div>
    )
}

export default TinderCards
