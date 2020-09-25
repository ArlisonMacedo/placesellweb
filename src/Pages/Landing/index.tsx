import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../../assets/image/sell.png'
import './styles.css'

function Landing () {
  return (
    <div id='page-landing'>
      <div className='logo-container'>
        <img src={logo} alt="Logo"/>

        <h1>Place Sell</h1>
        <h2>Anuncie aqui seu produto</h2>

        <div className="button">
          <Link to='/cadastro' className='announce'>
            Anunciar
          </Link>
        </div>

        <span className='totalConnections'>
          total de conexões 22 
        </span>
      </div>
    </div>
  )
}

export default Landing