import React, { useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../app.constants';

function OrderForm() {
    const navigate = useNavigate();
    const [orderNumber, setOrderNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleOrderSearch = () => {
        console.log(orderNumber);
        axios
            .get(`${BASE_URL}/api/orders/${orderNumber}`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log(response);
                if (!response.data.order) {
                    setErrorMessage('Order number does not exists. Please enter a valid order number');
                } else {
                    setErrorMessage('Order number exists.');
                    // navigate('/product-verification', { state: { orderDetails: response.data } });
                }
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage('Order number does not exists. Please enter a valid order number');
            });
    };
    return (
        <div style={{ padding: 100 }}>
            <Paper elevation={3}>
                <Grid container spacing={3} direction={'column'} justify={'center'} alignItems={'center'}>
                    <Grid item xs={12}>
                        <Typography variant="h4">Enter Order Number</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="OrderNumber"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                        ></TextField>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 5 }}>
                        <Button variant="contained" fullWidth onClick={handleOrderSearch}>
                            Search Order
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        {errorMessage && (
                            <Typography variant="h6" color="red">
                                {errorMessage}
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default OrderForm;
