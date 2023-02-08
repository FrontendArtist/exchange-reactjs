import React from 'react'
import './Coin.scss'
const Coin = ({name , image , symbol , price , marketCap , priceChange}) => {
  return (
    <div className='coin'>
        <img className='coin__image' src={image} alt={name} />
        <span className='coin__name'>{name}</span>
        <span className='coin__symbol'>{symbol.toUpperCase()}</span>
        <span className='coin__price'>{price.toLocaleString()} $</span>
        <span className={priceChange>0 ? 'coin__priceChange' : 'coin__priceChange coin__priceChange--negative'  }>{priceChange.toFixed(2)}</span>
        <span className='coin__marketCap'>{marketCap.toLocaleString()} $</span>
     </div>
  )
}

export default Coin