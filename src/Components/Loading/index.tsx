import React from 'react'
import ReactLoading from 'react-loading'


function Loading (){
  return (
    <div className='loading'>

    <ReactLoading  type='bars' color='#AB05F2' height={222} width={50}/>
    
    </div>
  )
}


export default Loading