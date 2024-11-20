import { Button, Card } from "@mui/material";
import React from "react";
export const OrderCard = ({item, order}) => {
  return( <Card className="flex justify-between item-center p-5">
    <div className="flex item-center space-x-5">
        <img className="w-16 h-16" src={item.food.image[0]}
        alt="product"/>
    
    <div>
        <p className="font-semibold">{item.food.name}</p>
        <p className="text-gray-500">€{item.totalprice}</p>
    </div>
    </div>
    <Button className="cursor-not-alowed">{order.orderStatus}</Button>

  </Card>)
}
export default OrderCard