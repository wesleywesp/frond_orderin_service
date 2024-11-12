import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";

const EventsCard=()=>{
    return(
        <Card sx={{width:345}}>
            <CardMedia sx={{height: 345}} image="https://images.pexels.com/photos/20844826/pexels-photo-20844826/free-photo-of-sushi-held-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=300" alt="product"/>
    <CardContent>
        <Typography variant="h5" component={"div"}>Mochi</Typography>
        <Typography variant="body2">30% of on firt order</Typography>
        <div className="'py-2 space-y-2">
            <p>{"porto"}</p>
            <p className="text-sm text-blue-500">dezembro 14, 20224 15:00 AM</p>
            <p className="text-sm text-red-500">dezembro 15, 20224 15:00 AM</p>

        </div>
    </CardContent>

    {true && <CardActions>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
        </CardActions>}

  </Card>
    )
}
export default EventsCard