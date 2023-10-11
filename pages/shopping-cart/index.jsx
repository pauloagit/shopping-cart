import styles from './styles.module.css'
import {Box, Button, Card, CardContent, Divider, Grid, Typography, Stack} from '@mui/material'
import CartList from "@/components/cart/CartList";

const productsInCart = [
    {
        slug: 'Televisor',
        images: 'http://localhost:8083/images/tv_led.jpeg',
        title: 'Televisor Led',
        price: '99900',
        quantity: '1',
        color: 'Negro'
    },
    {
        slug: 'play',
        images: 'http://localhost:8083/images/play5.webp',
        title: 'Play 5',
        price: '59999',
        quantity: '2',
        color: 'Blanco'
    },
    {
        slug: 'nintendo',
        images: 'http://localhost:8083/images/switch.jpeg',
        title: 'Nintendo Switch',
        price: '350000',
        quantity: '5',
        color: 'Rojo'
    }
]
const ShoppingCart = () => {
    return (
        <>
            <Typography variant='h3' component='h3'>{`Carro (${productsInCart.length})`}</Typography>
            <Divider sx={{my: 1}}/>
            <Grid>
                <Grid item xs={12} sm={5}>
                    <CartList productsInCart={productsInCart}/>
                </Grid>
            </Grid>
            <Grid>
                <Button color="secondary" variant="contained" fullWidth>
                    Checkout
                </Button>
            </Grid>

        </>
    )
}

export default ShoppingCart