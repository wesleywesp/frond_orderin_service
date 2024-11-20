import { Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from "react";
import { CategrizeIngredients } from "../util/CategrizeIngredients";
import { addItemToCart } from "../../State/Card/Action";
import { useDispatch } from "react-redux";

export const MenuCard = ({ item }) => {
    const[selectedIngredients, setSelectedIngredients]=useState([])
    const dispatch = useDispatch();
    const handleCheckBoxChange=(item)=>{
        console.log("Selected ingredient:", item.name);
        if(selectedIngredients.includes(item.name)){
            setSelectedIngredients(selectedIngredients.filter((item)=>item.name!==item.name))
        }else{
            setSelectedIngredients([...selectedIngredients,item.name])
        }
    }
    const handleAddItemToCart = (e) => {
        e.preventDefault();
    
        const reqData = { 
            jwt: localStorage.getItem("jwt"),
            foodId: item.id, // Direto no corpo, sem encapsular em `carItem`
            quantity: 1,
            ingredients: selectedIngredients
        };
    
        dispatch(addItemToCart(reqData));
        console.log("add to cart", reqData);
    };
    

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className="lg:flex items-center justify-between">
                    <div className="lg:flex items-center lg:gap-5">
                        <img
                            className="w-[7rem] h-[7rem] object-cover"
                            src={item.image[0]}
                            alt={item.name}
                        />
                        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                            <p className="font-semibold text-xl">{item.name}</p>
                            <p>€{item.price}</p>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form onSubmit={handleAddItemToCart}>
                    <div className="flex flex-wrap gap-5">
                        {
                            Object.keys(CategrizeIngredients(item.ingredients || [])).map((category) => (
                                <div key={category}>
                                    {/* Exibindo a categoria */}
                                    <p>{category}</p>
                                    <FormGroup>
                                        {
                                            CategrizeIngredients(item.ingredients || [])[category].map((ingredient) => (
                                                <FormControlLabel
                                                    key={ingredient.name}
                                                    control={<Checkbox onChange={() => handleCheckBoxChange(ingredient)} />}
                                                    label={ingredient.name}
                                                />
                                            ))
                                        }
                                    </FormGroup>
                                </div>
                            ))
                        }
                    </div>
                    <div className="pt-5">
                        <Button //onChange={handleAddItemToCart}
                        variant="contained" disabled={item.isAvailable <= 0} type="submit">
                            {item.isAvailable> 0 ? "Add to Cart" : "Out Of Stock"}
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    );
}

export default MenuCard;
