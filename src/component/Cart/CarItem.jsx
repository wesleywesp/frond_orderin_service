import React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Chip } from "@mui/material";


const CartItem = () => {
    return (
        <div className="px-5">
            <div className="lg:flex items-center lg:space-x-5">
                <div>
                    <img
                        className="w-[5rem] h-[5rem]"
                        src="https://images.pexels.com/photos/28701091/pexels-photo-28701091/free-photo-of-exquisite-japanese-sushi-platter-with-fresh-seafood.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Sashimi"
                    />
                </div>
                <div className="flex items-center justify-between lg:w-[70%]">
                    <div className="space-y-1 lg:space-y-3 w-full">
                        <p>Sashimi</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                                <IconButton>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                <div className="w-5 h-5 text-xs flex items-center justify-center">
                                    {5}
                                </div>
                                <IconButton>
                                    <AddCircleOutlineIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>19,99</p>
                </div>
            </div>
            <div className="pt-3 space-x-2">
                {[1,1,1].map((item) => (<Chip label="sashime"/>))}
            </div>
        </div>
    );
};

export default CartItem;
