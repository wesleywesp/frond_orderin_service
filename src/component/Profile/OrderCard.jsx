import { Button, Card } from "@mui/material";
import React from "react";
export const OrderCard = () => {
  return( <Card className="flex justify-between item-center p-5">
    <div className="flex item-center space-x-5">
        <img className="w-16 h-16" src="https://images.pexels.com/photos/3633990/pexels-photo-3633990.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="product"/>
    
    <div>
        <p className="font-semibold">sashime</p>
        <p className="text-gray-500">€19,60</p>
    </div>
    </div>
    <Button className="cursor-not-alowed">completed</Button>

  </Card>)
}
export default OrderCard