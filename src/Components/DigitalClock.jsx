import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import "./DigitalClock.css"

function DigitalClock() {
    let time = new Date().toLocaleTimeString();
    let month = new Date().toLocaleString('default', { month: 'long' });
    let day = new Date().toLocaleString('default', { weekday: 'long' });

    const [cTime, setTime] = useState(time);
    const [cMonth, setMonth] = useState(month);
    const [cDay, setDay] = useState(day);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        month = new Date().toLocaleString('default', { month: 'long' });
        day = new Date().toLocaleString('default', { weekday: 'long' });
        setTime(time);
        setMonth(month);
        setDay(day);
    }
    setInterval(UpdateTime);

    return (
        <>
            <Grid container justifyContent="center" alignItems="center" height="100vh">
                <Grid item lg={4}>
                    <Typography variant='h1' sx={{ color: "#ffffff", fontFamily: "'Lobster', sans-serif", fontSize: "50px", textAlign: "center", marginBottom: "2rem" }}>Digital Clock</Typography>
                    <Grid container justifyContent="space-around">
                        <Grid item><Typography variant='h5' className='month-text' sx={{ fontFamily: "'Lobster', sans-serif" }}>{cMonth}</Typography> </Grid>
                        <Grid item> <Typography variant='h5' className='month-text' sx={{ fontFamily: "'Lobster', sans-serif" }}>{cDay}</Typography></Grid>
                    </Grid>
                    <Grid container justifyContent="center" mt={2}>
                        <Grid item><Typography variant='h1' className='neonText'>{cTime}</Typography></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )

}

export default DigitalClock