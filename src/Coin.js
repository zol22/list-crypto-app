import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card, CardHeader, Grid , CardMedia, CardContent,Typography, Button } from '@mui/material'



const styles = {
    loading: {
        textAlign:'center',
    },
    grid: {
        minWidth: "100%",
        minHeight: "100vh",
    },
    card: {
        height: "100%",
        width:"400px",
        backgroundColor:'whitesmoke',
        textAlign:"center",
    }, 
    img: {
        objectFit:'contain'
      },
    button: {
        paddingBottom:'10px',
        paddingTop:'10px',
        marginTop:'10px',
        marginBottom:'10px',
      },
    h5:{
        paddingBottom:'10px',
        paddingTop:'10px',
        fontWeight: 200,
        fontSize: '15px'

      },
    body2:{
        paddingBottom:'10px',
        paddingTop:'10px',
    }
}

function Coin() {

    const params = useParams();
    const [coinData, setCoinData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useNavigate();


    useEffect(()=> {
        setIsLoading(true);
        fetch(` https://api.coingecko.com/api/v3/coins/${params.id}`)
        .then(response => response.json())
        .then(data => {
            setCoinData(data);
            setIsLoading(false)
        })
    },[params.id])
  
    const goTo = () => {
        window.open(coinData?.links?.homepage[0], "_blank") //to open new page
    }
    const goBack = () => {
        history('/')
    }
  return (
    <div>
    {isLoading ? <h1 style={styles.loading}>Data Loading...</h1> : 
    (
        <Grid
        container
        direction="column"
        style={styles.grid}
        spacing={0}
        alignItems="center"
        justifyContent="center"
        >
            <Button size="medium" color="primary" variant="outlined" style={styles.button} onClick={goBack}>
                Go back to homepage
            </Button>

            <Card  style={styles.card}>
                <CardHeader title={coinData?.name} subheader={coinData?.symbol}/>
                <CardMedia
                component="img"
                height="120"
                image={coinData?.image?.large} // React wants to access the property before mounting, while the property has not yet received any content
                alt=""
                style={styles.img}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary" style={styles.body2}>
                        {coinData?.description?.en.slice(0,500)} ...
                    </Typography>
                    <Typography variant="h5" style={styles.h5}>
                        Market Cap Rank: # {coinData.market_cap_rank}
                    </Typography>
                    <Typography variant="h5" style={styles.h5}>
                        Coingecko Rank: # {coinData.coingecko_rank}
                    </Typography>
                    <Typography variant="h5" style={styles.h5}>
                        Votes up percentage:  {coinData?.sentiment_votes_up_percentage} %
                    </Typography>
                    <Typography variant="h5" style={styles.h5}>
                        Votes down percentage:  {coinData?.sentiment_votes_down_percentage} %
                    </Typography>
                    <Button size="small" color="primary" variant="outlined" style={styles.button} onClick={goTo}>
                    Go to {coinData.name} homepage
                </Button>
                </CardContent> 
        
                
            </Card>
        </Grid>
    )}
   
  </div>


  )
}

export default Coin