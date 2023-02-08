import {React , useState , useEffect} from 'react'
import { getCoins } from '../services/api'
import { Loader } from './Loader'
import Coin from './Coin'
import "./Landing.scss"

const Landing = () => {

    const [coins , setCoins] = useState([]);
    const [search , setSearch] = useState("");

    useEffect(()=>{
        const fetchAPI = async () => {
            const data = await getCoins();
            console.log(data);
            setCoins(data);
        }
        fetchAPI()
    },[])

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='home'>
        <div className='search-box'>
            <input className='search-input' placeholder='search' value={search} onChange={searchHandler} type='text'/>
        </div>
        <div className='container'>
            
            {
                coins.length ? 
                <div className='coins' >
                    {
                        searchedCoins.length > 0 ?
                    
                        searchedCoins.map(coin => <Coin
                            key={coin.id}
                            name={coin.name}
                            symbol={coin.symbol}
                            image={coin.image}
                            price={coin.current_price}
                            marketCap = {coin.market_cap}
                            priceChange = {coin.price_change_percentage_24h}
                              />)
                              :
                              <span className='searchNotFound'>notFound</span>
                              
                    }
                </div>:
                <Loader/>
                
                }
        </div>
    </div>
  )
}

export default Landing