import { api, API_URL } from "../../component/Config/Api";
import { GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_SUCCESS } from "./ActionType";


export const getIngredientsOfRestaurant =({id,jwt})=>{
    return async(dispatch)=>{
        try{
            const res = await api.put(`/api/admin/ingredients/restaurant/${id}`,
                {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            },
        );
                   
        dispatch({ type: GET_INGREDIENTS, payload:res.data });
        console.log("All Restaurant", data);

        }catch(error){
               console.log("GetAllRestaurantError", error)
        }
     
    }
}

export const createIngredient =({data,jwt})=>{
    return async(dispatch)=>{
        dispatch({type:CREATE_INGREDIENT_REQUEST})
        try{
            const{data} = await api.post(`/api/admin/ingredients`,data,
                {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            },
        );
                   
        dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload:res.data });
        console.log("All Restaurant", data);

        }catch(error){
            dispatch({ type:CREATE_INGREDIENT_FAILURE, payload: error});
               console.log("GetAllRestaurantError", error)
        }
     
    }
}
export const getIngredientCategory =({id,jwt})=>{
    return async(dispatch)=>{
        try{
            const res = await api.get(`/api/admin/ingredients/restaurant/${id}/category`,
                {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            },
        );
                   
        dispatch({ type: GET_INGREDIENT_SUCCESS, payload:res.data });
        console.log("All Restaurant", data);

        }catch(error){
            dispatch({ type:CREATE_INGREDIENT_FAILURE, payload: error});
               console.log("GetAllRestaurantError", error)
        }
     
    }
}

export const updateStockOfIngredient =({id,jwt})=>{
    return async(dispatch)=>{
        try{
            const res = await api.put(`/api/admin/ingredients/${id}/stoke`,{}
                ,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            },
        );
                   
        dispatch({ type: UPDATE_STOCK, payload:res.data });
        console.log("All Restaurant", data);

        }catch(error){
               console.log("GetAllRestaurantError", error)
        }
     
    }
}