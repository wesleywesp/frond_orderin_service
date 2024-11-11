import React from "react";
import { Card, Chip, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RestaurantCard = () => {
    return (
        <Card className="w-[18rem]">
            <div className={`${true ? 'cursor-pointer' : "cursor-not-allowed"} relative`}>
                <img
                    className="w-full h-[10rem] rounded-t-md object-cover"
                    src="https://images.pexels.com/photos/3633990/pexels-photo-3633990.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="mochi Restaurante"
                />
                <Chip
                    size="small"
                    className="absolute top-2 left-2"
                    color={true ? "success" : "error"}
                    label={true ? "Open" : "Closed"}
                />
            </div>
            <div className="p-4 textPart lg:flex w-full justify-between">
                <div className="space-y-1">
                    <p className="font-semibold text-lg">Mochi</p>
                    <p className="text-gray-500 text-sm">
                        We have the best sushi of Porto!
                    </p>
                </div>
                <div>
                    <IconButton>
                        {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </div>
            </div>
        </Card>
    );
};

export default RestaurantCard;
