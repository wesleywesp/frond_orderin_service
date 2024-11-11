import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';
import React, { useState } from "react";
import MenuCard from "./MenuCard"

const categories = ["pizza", "burger", "kebab", "sushi"];
const foodTypes = [
    { label: "All", value: "all" },
    { label: "vegetarian only", value: "vegetarian" },
    { label: "non-vegetarian", value: "non_vegetarian" },
    { label: "seasonal", value: "seasonal" }
];

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all");
    const [categoryFilter, setCategoryFilter] = useState('');

    const handleFilter = (e) => {
        const { name, value } = e.target;
        if (name === "food_type") {
            setFoodType(value);
        } else if (name === "food_category") {
            setCategoryFilter(value);
        }
    };

    const menu=[1,1,1,1,1]

    return (
        <div className="px-5 lg:px-20">
            <section>
                <h3 className="text-gray-500 py-2 mt-10">Home/porto/restaurant sushi/2</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img
                                className="w-full h-[400px] object-cover"
                                src="https://images.pexels.com/photos/28059306/pexels-photo-28059306/free-photo-of-design-projeto-visual-interior.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt=""
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className="w-full h-[400px] object-cover"
                                src="https://images.pexels.com/photos/27067944/pexels-photo-27067944/free-photo-of-homem-mao-barra-bar.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt=""
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className="w-full h-[400px] object-cover"
                                src="https://images.pexels.com/photos/29033155/pexels-photo-29033155/free-photo-of-configuracao-de-jantar-elegante-no-interior-do-restaurante-de-toquio.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt=""
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className="pt-3 pd-5">
                    <h3 className="text-4xl font-semibold">Mochi Sushi Bar</h3>
                    <p className="text-gray-500 mt-1">
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum optio sint ad natus necessitatibus autem magnam perferendis odio repellat! Ad incidunt magnam necessitatibus, unde nihil sequi doloribus fugit tempore quae.</span>
                    </p>
                    <div className="space-y-3 mt-3">
                        <p className="text-gray-500 flex item-center gap-3">
                            <LocationOnIcon />
                            <span>ermesinte 4334</span>
                        </p>
                        <p className="text-gray-500 flex item-center gap-3">
                            <TodayIcon />
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis molestiae accusamus asperiores</span>
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
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                    {foodTypes.map((item) => (
                                        <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_category" value={categoryFilter}>
                                    {categories.map((item) => (
                                        <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 lg:w-[80%] lg:pl-10">
                                {menu.map((item)=><MenuCard/>)}
                </div>
            </section>
        </div>
    );
};

export default RestaurantDetails;

