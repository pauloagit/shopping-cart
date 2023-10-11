import React from "react"
import {Box, Button, CardActionArea, CardMedia, Grid, Link, Typography} from '@mui/material'

const CartList = ({productsInCart}) => {
    return (
        <>
            {
                productsInCart.map(product => (
                    <Grid container spacing={2} key={product.slug} sx={{mb: 1}}>
                        <Grid item xs={3}>
                            <Link>
                                <CardActionArea>
                                    <CardMedia
                                        image={product.images}
                                        component='img'
                                        sx={{borderRadius: '5px'}}
                                    />
                                </CardActionArea>
                            </Link>
                        </Grid>
                        <Grid item xs={7}>
                            <Box display='flex' flexDirection='column'>
                                <Typography variant='body1'>{product.title}</Typography>
                                <Typography variant='body1'>Color: <strong>{product.color}</strong></Typography>

                                <Typography variant='h5'>{product.quantity}</Typography>

                            </Box>
                        </Grid>
                        <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                            <Typography variant='subtitle1'>{`$${product.price}`}</Typography>

                            <Button variant='text' color='secondary'>
                                Remover
                            </Button>
                        </Grid>
                    </Grid>
                ))
            }
        </>
    )

}

export default CartList