import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ServiceDetail = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [detail, setDetail] = useState({});
    const history = useHistory();

    const handleClick = () => {
        history.push('/home');
    }

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    useEffect(() => {
        const foundDetail = details?.find(detail => detail.id == id);
        setDetail(foundDetail);
    }, [details])

    return (
        <div className="flex justify-center m-2">
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={detail?.img}
                />
                <CardContent className="text-justify">
                    <Typography className="text-blue-700" gutterBottom variant="h5" component="div">
                        {detail?.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {detail?.description}
                        <br />
                        {detail?.detail}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleClick} size="small">Go Back</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ServiceDetail;