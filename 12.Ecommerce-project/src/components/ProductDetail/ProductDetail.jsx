import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button, Rating } from '@mui/material';
import Chip from '@mui/material/Chip';

export default function ProductDetail({ detail }) {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 240, objectFit: 'contain' }}
                image={detail.image}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" >
                        {detail.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                        style={{ marginTop: 10 }}
                    >
                        {detail.description}
                    </Typography>
                    <Chip style={{ margin: "5px 0" }} label={detail.category} />
                    <br />
                    <Rating style={{ padding: "10px 0" }} name="read-only" value={detail.rating.rate} readOnly />

                    <Typography component="div" variant="h5">
                        ${detail.price}
                    </Typography>
                    <div style={{ marginTop: 10 }}>
                        <Button className='add-to-cart' size="small">Add to Card</Button>
                        <Button className='view-detail' style={{ marginLeft: 6 }} size="small">BUY NOW</Button>
                    </div>
                </CardContent>
            </Box>

        </Card>
    );
}
