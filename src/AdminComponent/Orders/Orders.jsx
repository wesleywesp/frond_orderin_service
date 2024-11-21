import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderTable from "./OrderTable";


const orderStatus=[
    {label:"Pending", value:"PANDING"},
    {label:"Completed", value:"COMPLITED"},
    {label:"All", value:"ALL"}
]


export const Orders =()=> {
const [filterValue, setFiltervalue]=useState()

const handleFilter=(e, value)=>{
    setFiltervalue(value)

}

    return (
        <div className="px-2">
            <Card className="p-5">

                <Typography sx ={{paddingBottom:"1rem"}} variant="h5">
                    Order Status

                </Typography>
                <FormControl>
                    <RadioGroup onChange={handleFilter}row name=" category" value={filterValue || "all"}>
                        {orderStatus.map((item)=><FormControlLabel
                    key ={item.label}
                    value={item.value}
                    control={<Radio/>}
                    label={item.label}
                    sx={{color:"gray"}}
                
                />)}
                    </RadioGroup>
                </FormControl>
            </Card>
            <OrderTable/>

        </div>
    )
}