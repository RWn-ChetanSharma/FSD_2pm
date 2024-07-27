import React from 'react'

function Array() {

    const color = ['orange', 'green', 'blue', 'red', 'yellow']
    const colorItem = color.map(color => <li key={color}>{color}</li>)
    console.log(colorItem);




  return (
    <>
        <ul >
            {colorItem}
        </ul>
    </>
  )
}

export default Array