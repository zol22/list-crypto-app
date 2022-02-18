import React, { useEffect, useState } from 'react'
import CoinsContainer from './CoinsContainer';
import { Grid, Box, TextField } from '@mui/material'


const styles = {
    loading: {
        textAlign:'center',
    },
}

function Home() {
    const [ coins, setCoins ] = useState([]) // This is a big array full of objects
    const [input, setInput] = useState(''); // not a space, empty,
    const [isLoading, setIsLoading] = useState(false);


    useEffect(()=> {
        fetchApi();
    },[])


    const handleChange = (e) => {
        setInput(e.target.value);
      }

    const filterCoinsList = coins.filter((coin) => coin.name.toLowerCase().includes(input.toLocaleLowerCase()))
      console.log(filterCoinsList) // at first when component loads, it will display all the coins because all the coin.name include "empty" ,const [input, setInput] = useState('')

    const fetchApi = () => {
        setIsLoading(true);
        fetch(' https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
        .then(response=> response.json())
        .then(res=> {
            setCoins(res);
            setIsLoading(false)
        })
    }
     
       
  return (
      <div>
        <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex',justifyContent: 'center', m:3}}>
            <TextField value={input} onChange={handleChange} id="outlined-basic" label="Please enter any crypto" sx={{ m: 1, width: '50ch' }} variant="outlined" />
        </Box>
        {isLoading && <h1 style={styles.loading}>Data Loading...</h1>}

        <Grid 
        container 
        spacing={2} 
        justifyContent='center'
        >
        {filterCoinsList?.map((coin)=> (
            <CoinsContainer 
                key={coin.id}
                id={coin.id}
                symbol={coin.symbol}
                name={coin.name}
                image={coin.image}
                currentPrice={coin.current_price}
            />
        ))}
        </Grid>

        
    </div>
  )
}

export default Home