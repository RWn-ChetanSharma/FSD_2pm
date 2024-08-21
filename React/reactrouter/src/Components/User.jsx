import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const params = useParams()
  return (
    <>
        <h1>User : {params.userId}</h1>
    </>
  )
}

export default User