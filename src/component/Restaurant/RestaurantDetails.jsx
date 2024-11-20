import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';
import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRestaurantById, getRestaurantsCategory } from "../../State/Restaurant/Action";
import { getMenuByRestaurantId } from "../../State/Menu/Action";

const foodTypes = [
    { label: "All", value: "all" },
    { label: "vegetarian only", value: "vegetarian" },
    { label: "non-vegetarian", value: "non_vegetarian" },
    { label: "seasonal", value: "seasonal" }
];
const RestaurantDetails = () => {
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");

    const dispatch = useDispatch();
    const { auth, restaurant, menu } = useSelector(store => store);

    const [foodType, setFoodType] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("");
    ; // Usar uma variável de estado única para categoria

    const { id } = useParams();
    const restaurantId = id;

    // Carregar o menu com base nos filtros
    useEffect(() => {
        dispatch(getMenuByRestaurantId({
            jwt,
            restaurantId,
            vegetarian: foodType === "vegetarian",
            nonveg: foodType === "non_vegetarian",
            seasonal: foodType === "seasonal",
            foodCategory: selectedCategory,
        }));
    }, [selectedCategory, foodType, jwt, restaurantId, dispatch]);  // Adicionando foodType para garantir que ambos filtros sejam considerados

    // Carregar informações do restaurante e categorias
    useEffect(() => {
        dispatch(getRestaurantById({ restaurantId, jwt }));
        dispatch(getRestaurantsCategory({ jwt, restaurantId }));
    }, [restaurantId, jwt, dispatch]); // O efeito precisa ser executado uma vez quando o componente for montado

    // Função para lidar com a seleção de categoria
    const handleFilterCategory = (e) => {
        const value = e.target.value;
        // Se o valor clicado for "all", envia uma string vazia; caso contrário, envia o valor normal
        setSelectedCategory(value);
    };





    const handleFilterFoodType = (e) => {
        const value = e.target.value;
        setFoodType(value); // Atualizar o tipo de comida
    };





    return (
        <div className="px-5 lg:px-20">
            <section>
                <h3 className="text-gray-500 py-2 mt-10">Home/porto/restaurant sushi/2</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img
                                className="w-full h-[400px] object-cover"
                                src={restaurant.restaurant?.image[0]}
                                alt=""
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className="w-full h-[400px] object-cover"
                                src={restaurant.restaurant?.image[1]}
                                alt=""
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className="w-full h-[400px] object-cover"
                                src={restaurant.restaurant?.image[2]}
                                alt=""
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className="pt-3 pd-5">
                    <h3 className="text-4xl font-semibold">{restaurant.restaurant?.name}</h3>
                    <p className="text-gray-500 mt-1">
                        {restaurant.restaurant?.description}
                    </p>
                    <div className="space-y-3 mt-3">
                        <p className="text-gray-500 flex item-center gap-3">
                            <LocationOnIcon />
                            {restaurant.restaurant?.address.city}
                        </p>
                        <p className="text-gray-500 flex item-center gap-3">
                            <TodayIcon />{restaurant.restaurant?.opningHours}
                        </p>
                    </div>
                </div>
            </section>
            <Divider />
            <section className="pt-[2rem] lg:flex relative">
                <div className="space-y-10 lg:w-[20%] filter">
                    <div className="box space-y-5 lg:sticky top-28">
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>
                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilterFoodType} name="food_type" //value={foodType}
                                >
                                    {foodTypes.map((item, index) => (
                                        <FormControlLabel key={index} value={item.value} control={<Radio />} label={item.label} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup
                                    onChange={handleFilterCategory} // Função que manipula o clique
                                    name="food_category"
                                    value={selectedCategory} // Controle do valor selecionado
                                >
                                    <FormControlLabel
                                        key="all"
                                        value=""
                                        control={<Radio />}
                                        label="All"
                                    />
                                    {restaurant.categories.map((item) => (
                                        <FormControlLabel
                                            key={item.id}
                                            value={item.name}
                                            control={<Radio />}
                                            label={item.name}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>



                        </div>
                    </div>
                </div>
                <div className="space-y-5 lg:w-[80%] lg:pl-10">
                    {menu.menuItems.map((item) => <MenuCard item={item} />)}
                </div>
            </section>
        </div>
    );
};

export default RestaurantDetails;


