import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <>
      <h1>Error 404: Page not found</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}