import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/buttonBack.scss'

function Button({back}) {

  const navigate = useNavigate()

  return (
    <button className='buttonBack' onClick = {() => navigate('/')}>Back</button>
    )
}

export default Button