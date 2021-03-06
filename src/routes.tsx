import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'


import Landing from './Pages/Landing'
import ProductForm from './Pages/ProductForm'


function Routes () {
  return (
    <BrowserRouter>
      <Route path='/'exact component={Landing}/>
      <Route path='/cadastro' component={ProductForm}/>
    </BrowserRouter>
  )
}

export default Routes