import React from "react";
import { Card, Chip, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { isPresentInFavorites } from "../Config/Logic";
import{addFavorite} from "../../State/Authentication/Action"
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ item }) => {
    const navigate = useNavigate();
  // Defina uma imagem padrão caso `item.image` esteja vazio ou indefinido
  const defaultImage = "https://via.placeholder.com/150";
  const jwt = localStorage.getItem("jwt");

  const dispatch = useDispatch();
  const {auth}=useSelector(store=>store)

  const handleAddToFavorite = () => {
    const restaurantId = item.id; // Aqui, 'item' é o objeto com a informação do restaurante
    dispatch(addFavorite(restaurantId, jwt)); // Passando apenas o valor do id, não o objeto completo
};

const handleNavigateToRestaurant = () => {
    if (item?.open) {
        const path = `/restaurant/${item.address.city}/${item.name}/${item.id}`;
        console.log("Navigating to:", path);
        navigate(path);
    }
}



  return (
    <Card className="w-[18rem]">
      <div className={`${item.open ? "cursor-pointer" : "cursor-not-allowed"} relative`}>
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src={item.image?.[0] || defaultImage} // Alterado de `images` para `image`
          alt={`${item?.name|| "Restaurant"} Image`}
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={item?.open ? "success" : "error"}
          label={item?.open ? "Open" : "Closed"}
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p onClick={handleNavigateToRestaurant} className="font-semibold text-lg cursor-pointer">{item?.name || "Restaurant Name"}</p>
          <p className="text-gray-500 text-sm">{item?.description || "No description available."}</p>
        </div>
        <div>
          <IconButton onClick={handleAddToFavorite}>
            {isPresentInFavorites(auth.favorites
, item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
