import React from 'react'
import loader from "../images/loader.gif"

export const Loader = () => {
  return (
    <div>
        <img className='loader' src={loader} alt="loading..."/>
    </div>
  )
}
