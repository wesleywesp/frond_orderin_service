import { Button, Card, dividerClasses } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';import React from "react";
import { green, red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
 export const PaymentFail=()=>{

    const Navigate=useNavigate();
    return(

        <div className="min-h-screen px-5">
        <div className=" flex flex-col items-center justify-center h-[90vh]">
            <Card className="box w-full lg:w-1/4 flex flex-col items-center rounded-md p-5">
        < CancelIcon sx={{fontSize:"5rem", color:red[400]}}/>
        <h1 className="py-5 text-2xl font-semibold"> Sorry Your PaymentFail  </h1>
        <p className="py-3 text-center text-gray-400">try again</p>
        <p className="py-2 text-center text-gray-200 text-lg">Sorry</p>
        <Button onClick={()=>Navigate("/")} variant="contained" className="py-5" sx ={{margin:"1rem 0rem"}}>
        Go To Home
        </Button>
        </Card>
        </div>
        </div>
    )
 }