import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import "./muiCard.css";

export default function MuiCard({ product, setOpen }) {
    console.log("Mui-card", product);
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
                <Button className='add-to-cart' size="small">Add to Card</Button>
                <Button className='view-detail' size="small" onClick={() => setOpen(true)}>View Details</Button>
            </CardActions>
        </Card>
    );
}