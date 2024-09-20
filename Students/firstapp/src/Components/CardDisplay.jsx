import React from 'react'
import Card from './card'
import img1 from "../assets/1.jpeg"

function CardDisplay() {

  return (
    <>
        <Card  Cardimg={img1} title="Harsh" description="hey !" price="$ 500"/>       
    </>
  )
}

export default CardDisplay