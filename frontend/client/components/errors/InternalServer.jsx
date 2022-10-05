import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function InternalServer() {
  const navigate = useNavigate()

  return (
    <>
      <h1>Error 500: An unexpected internal error has occurred</h1>
      <p>The administrator has been notified. Sorry for the inconvenience!</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}