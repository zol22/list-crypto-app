import { Grid , Card, CardMedia, CardHeader, CardContent, Typography, CardActions, Button} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const styles = {
  grid: {
    textAlign: 'center'
  },
  card: {
    backgroundColor:'whitesmoke',
    height: '320px',
  },
  img: {
    objectFit:'contain'
  },
  button: {
    justifyContent:'center',
    padding:6,
  },
  cardActions: {
    justifyContent:'center',
  }
}

function CoinsContainer({id,symbol,name,image,currentPrice}) {

  const history = useNavigate();

  const coinMoreDetail = () => {
      history(`coin/${id}`);
  }

  return (
      
      <Grid item xs={6} md={3} lg={3}  sx={{margin:1}} style={styles.grid}>
        <Card sx={{ maxWidth: 400 }} style={styles.card}>
          <CardHeader title={name} subheader={symbol}/>
          <CardMedia
          component="img"
          height="100"
          image={image}
          alt=""
          style={styles.img}
        />
        <CardContent>
          <Typography variant="h5" >
            $ {currentPrice}
          </Typography>
        </CardContent>
        <CardActions style={styles.cardActions}>
          <Button size="medium" color="primary" variant="outlined" style={styles.button} onClick={coinMoreDetail}>
            More Info
          </Button>
      </CardActions>
        </Card>
      </Grid>
  )
}

export default CoinsContainer;