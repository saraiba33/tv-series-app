import React from 'react'
import spinner from '../../assets/spinner.gif'
import '../Loader/index.css'

function Loader() {
  return (
    <div>
        <img src={spinner} alt="spinning-loader" className='spinner' />
    </div>
  )
}

export default Loader