import { api, API_URL } from "../../component/Config/Api";
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType";

export const creatMenuItem = (menu, jwt) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.post(`/api/admin/food`, menu, { // Alterado para post
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
            console.log("Created Menu Item", data);

        } catch (error) {
            dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
            console.log("CreateMenuItemError", error);
        }
    };
};


export const getMenuByRestaurantId = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_REQUEST });
        try {
            console.log(reqData); // Verifique os valores
            const { data } = await api.get(
                `/api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`,
                {
                    headers: {
                        Authorization: `Bearer ${reqData.jwt}`,
                    },
                }
            );
            

            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_SUCCESS, payload: data });
            console.log("All Menu Items", data);

        } catch (error) {
            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_FAILURE, payload: error });
            console.log("GetMenuByRestaurantError", error);
        }
    };
};



export const searchMenuItem=({keyword,jwt})=>{
    return async(dispatch)=>{
        dispatch({type:SEARCH_MENU_ITEM_REQUEST})
        try{
            const{ data }= await api.get(`/api/food/search?name=${keyword}`,
                {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
                   
        dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
        console.log("All Menu Items", data);

        }catch(error){
            dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error});
               console.log("GetAllMenuItemError", error)
        }
     
    }

};
export const updateMenuItemAvailability = ({ foodId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST });
        try {
            const { data } = await api.put(`/api/admin/food/${foodId}`, {}, { // Adicionado "/" antes de ${foodId}
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data });
            console.log("Updated Menu Item Availability", data);

        } catch (error) {
            dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error });
            console.log("UpdateMenuItemAvailabilityError", error);
        }
    };
};




export const deleteFoodAction = ({ foodId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.delete(`/api/admin/food/${foodId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: foodId });
            console.log("Deleted Menu Item", data);

        } catch (error) {
            dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error });
            console.log("DeleteMenuItemError", error);
        }
    };
};
