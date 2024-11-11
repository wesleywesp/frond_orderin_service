import { Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel, Checkbox, Button, } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";

const ingredients = [
    {
        category: "sushi",
        ingredients: ["rice", "fish", "seaweed", "soy sauce"]
    },
    {
        category:"Protein",
        ingredients: ["tuna", "salmon", "shrimp", "crab"]
    }
];

export const MenuCard = () => {
    const handleCheckBoxChange = (value) => {
        console.log(value);
    }
    return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div className="lg:flex items-center justify-between">
                <div className="lg:flex items-center lg:gap-5">
                    <img className="w-[7rem] h-[7rem] object-cover" src="https://images.pexels.com/photos/28701091/pexels-photo-28701091/free-photo-of-exquisite-japanese-sushi-platter-with-fresh-seafood.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt=" sushi mix sashimi"/>
                    <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                        <p className="font-semibold text-xl">Mix Sashime</p>
                        <p>€16,99</p>
                        <p className="text-gray-400">sashimi mix</p>

                    </div>
                </div>

            </div>
          </AccordionSummary>
          <AccordionDetails>
            <form>
                <div className="flex flex-wrap gap-5">
                    {
                        ingredients.map((item, index) =>(
                        <div key={index}>
                            <p>{item.category}</p>
                            <FormGroup>
                        {item.ingredients.map((ingredient, idx) => (
                            <FormControlLabel key={idx} control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={ingredient} />
                        ))}
                        </FormGroup>
                    
                        </div>
                        ))}
                </div>
                <div className="pt-5">
                    <Button variant="contained" disabled ={false}type="submit">{true?"Add to Cart":"Out Of Stock"}</Button>
                            
                </div>
            </form>
          </AccordionDetails>
        </Accordion>
    );
}

export default MenuCard;