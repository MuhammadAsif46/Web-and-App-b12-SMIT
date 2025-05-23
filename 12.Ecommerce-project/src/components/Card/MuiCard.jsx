import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import "./muiCard.css";
import CartContext from '../../Context/cart';

export default function MuiCard({ product, viewDetails }) {
    const { cart, setCart } = React.useContext(CartContext)


    const addToCart = () => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        cartData.push(product)
        localStorage.setItem("cart", JSON.stringify(cartData))
        setCart(cartData.length)
    }

    return (
        <Card style={{ width: 300, height: 380, position: "relative" }}>
            <div>
                <img style={{ height: 150, width: "100%", objectFit: "contain" }} src={product.image} alt="" />
            </div>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    ${product.price}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.title.slice(0, 50)}...
                </Typography>
            </CardContent>
            <Rating style={{ padding: 10 }} name="read-only" value={product.rating.rate} readOnly />
            <CardActions style={{ position: "absolute", bottom: 10 }}>
                <Button className='add-to-cart' onClick={addToCart} size="small">Add to Card</Button>
                <Button className='view-detail' size="small" onClick={() => viewDetails(product.id)}>View Details</Button>
            </CardActions>
        </Card>
    );
}