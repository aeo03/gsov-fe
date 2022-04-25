import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { BASE_URL } from '../app.constants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    //const token = localStorage.getItem('token');

    const navigate = useNavigate();
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(userName, password);
        userName &&
            password &&
            axios
                .post(`${BASE_URL}/api/users/login`, { name: userName, password })
                .then((response) => {
                    console.log(response);
                    localStorage.setItem('token', response.data.token);
                    navigate('/orders');
                })
                .catch((err) => {
                    alert('Invalid username or password: ' + err.message);
                });
    };
    return (
        <div style={{ padding: 100 }}>
            <Paper elevation={3}>
                <Grid container spacing={3} direction={'column'} justify={'center'} alignItems={'center'}>
                    <Grid item xs={12}>
                        <Typography variant="h4">Employee Login</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Username"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            type={'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></TextField>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 5 }}>
                        <Button variant="contained" fullWidth onClick={handleLogin}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};
export default Login;
