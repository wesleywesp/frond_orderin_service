import React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCartItem, updateCartItem } from "../../State/Card/Action";


const CartItem = ({item}) => {
    const{auth,cart}=useSelector(store=>store);
    const navigator=useNavigate();
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const handleUpdateCartIitem=(value)=>{
        if (item.quantity + value <= 0) {
            handleRemoveCartItem(); // Remove o item
            return;
        }
        const data={cartItemId:item.id, quantity:item.quantity+value, jwt}
        console.log("data",data,"jwt",jwt)
        dispatch(updateCartItem({data}))

    }
    const handleRemoveCartItem = () => {
        dispatch(removeCartItem({ cartItemId: item.id, jwt: auth.jwt || jwt }));
    };

    return (
        <div className="px-5">
            <div className="lg:flex items-center lg:space-x-5">
                <div>
                    <img
                        className="w-[5rem] h-[5rem]"
                        src={item.food.image[0] || "https://via.placeholder.com/150"}
                        alt="Sashimi"
                    />
                </div>
                <div className="flex items-center justify-between lg:w-[70%]">
                    <div className="space-y-1 lg:space-y-3 w-full">
                        <p>{item.food.name}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                                <IconButton onClick={()=> handleUpdateCartIitem(-1)}>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                <div className="w-5 h-5 text-xs flex items-center justify-center">
                                    {item.quantity}
                                </div>
                                <IconButton onClick={()=> handleUpdateCartIitem(+1)}>
                                    <AddCircleOutlineIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>{item.totalprice}</p>
                </div>
            </div>
            <div className="pt-3 space-x-2">
                {item.ingredients.map((ingredient) => (<Chip label={ingredient}/>))}
            </div>
        </div>
    );
};

export default CartItem;
