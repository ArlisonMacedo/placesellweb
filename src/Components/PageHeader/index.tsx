import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/image/sell.png'


import iconback from '../../assets/image/left-arrow.png'

import './styles.css'

interface PropsPageHeader {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PropsPageHeader> = (props) => {
  return (
    <header className="page-header">
      <div className='top-bar-container'>
        <Link to='/'>
          <img src={iconback} alt="voltar"  id='iconback'/>
        </Link>

        <img src={logo} alt="Place-sell"/>
      </div>
      <div className='header-content'>
        <strong>{props.title}</strong>
        {props.description && (<p>{props.description}</p>)}

        {props.children}
      </div>
    </header>
  )
}

export default PageHeader