import { api, API_URL } from "../../component/Config/Api";
import axios from "axios";
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENTS_FAILURE, CREATE_EVENTS_REQUEST, CREATE_EVENTS_SUCCESS, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_EVENTS_FAILURE, DELETE_EVENTS_REQUEST, DELETE_EVENTS_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_EVENTS_FAILURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, GET_ALL_RESTAURANTS_REQUEST, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, GET_RESTAURANTS_CATEGORY_FAILURE, GET_RESTAURANTS_CATEGORY_REQUEST, GET_RESTAURANTS_CATEGORY_SUCCESS, GET_RESTAURANTS_EVENTS_REQUEST, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS } from "./ActionType";


export const getAllRestaurantsAction =(jwt)=>{
    return async(dispatch)=>{
        dispatch({type:GET_ALL_RESTAURANTS_REQUEST})
        try{
            const{ data }= await api.get("/api/restaurants",{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
                   
        dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: data });
        console.log("All Restaurant", data);

        }catch(error){
            dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error});
               console.log("GetAllRestaurantError", error)
        }
     
    }
}

export const getRestaurantById =(reqData)=>{
    return async(dispatch)=>{
        dispatch({type:GET_RESTAURANT_BY_ID_REQUEST})
        try{
            const res= await api.get(`/api/restaurants/${reqData.restaurantId}`,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
                   
        dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: res.data });
        console.log("Restaurant ", res.data);

        }catch(error){
            dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error});
               console.log("GetRestaurantError ", error)
        }
     
    }
}

export const getRestaurantByUserId =(jwt)=>{
    return async(dispatch)=>{
        dispatch({type:GET_RESTAURANT_BY_USER_ID_REQUEST})
        try{
            const{ data }= await api.get(`/api/admin/restaurant/user`,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
                   
        dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: response.data });
        console.log("Restaurant ", data);

        }catch(error){
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error});
               console.log("GetRestaurantError ", error)
        }
     
    }
}

export const creatRestaurantByUserId =(reqData)=>{
    return async(dispatch)=>{
        dispatch({type:CREATE_RESTAURANT_REQUEST})
        try{
            const{ data }= await api.post(`/api/admin/restaurant`, reqData.data,{
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                }
            });
                   
        dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload:data });
        console.log("Restaurant Created ", data);

        }catch(error){
            dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error});
               console.log("CreateRestaurantError ", error)
        }
     
    }
}


export const updateRestaurant =({restaurantId, restaurantData, jwt })=>{
    return async(dispatch)=>{
        dispatch({type:UPDATE_RESTAURANT_REQUEST})
        try{
            const res= await api.put(`/api/admin/restaurant/${restaurantId}`, restaurantData,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
                   
        dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: res.data });
        console.log("Restaurant Updated ", data);

        }catch(error){
            dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error});
               console.log("UpdateRestaurantError ", error)
        }
     
    }
}

export const deleteRestaurant =({restaurantId, jwt })=>{
    return async(dispatch)=>{
        dispatch({type:DELETE_RESTAURANT_REQUEST})
        try{
            const res = await api.delete(`/api/admin/restaurant/${restaurantId}`,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
                   
        dispatch({ type:DELETE_RESTAURANT_SUCCESS, payload: restaurantId });
        console.log("Restaurant Deleted ", data);

        }catch(error){
            dispatch({ type:DELETE_RESTAURANT_FAILURE, payload: error});
               console.log("DeleteRestaurantError ", error)
        }
     
    }
}


export const updateRestaurantStatus =({restaurantId, jwt })=>{
    return async(dispatch)=>{
        dispatch({type:UPDATE_RESTAURANT_STATUS_REQUEST})
        try{
            const res= await api.put(`/api/admin/restaurant/${restaurantId}/status`,{},{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
                   
        dispatch({ type:UPDATE_RESTAURANT_STATUS_SUCCESS, payload: res.data});
        console.log("Restaurant Status ", res.data);

        }catch(error){
            dispatch({ type:UPDATE_RESTAURANT_STATUS_FAILURE, payload: error});
               console.log("StatusRestaurantError ", error)
        }
     
    }
}

export const createEventAction =({data,jwt, restaurantId })=>{
    return async(dispatch)=>{
        dispatch({typ:CREATE_EVENTS_REQUEST})
        try{
            const res= await api.post(`/api/admin/restaurant/${restaurantId}`,data,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
                   
        dispatch({ type:CREATE_EVENTS_SUCCESS, payload: res.data});
        console.log("Create Restaurante Events ", res.data);

        }catch(error){
            dispatch({ type:CREATE_EVENTS_FAILURE, payload: error});
               console.log("EventsRestaurantError ", error)
        }
     
    }
}

export const getAllEvents =({jwt})=>{
    return async(dispatch)=>{
        dispatch({type:GET_ALL_EVENTS_REQUEST})
        try{
            const res= await api.get(`/api/events/`,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
                   
        dispatch({ type:GET_ALL_EVENTS_SUCCESS, payload: res.data});
        console.log("Restaurant Status ", res.data);

        }catch(error){
            dispatch({ type:GET_ALL_EVENTS_FAILURE, payload: error});
               console.log("StatusRestaurantError ", error)
        }
     
    }
}


export const deleteEventAction =({eventId ,jwt})=>{
    return async(dispatch)=>{
        dispatch({type:DELETE_EVENTS_REQUEST})
        try{
            const res= await api.delete(`/api/admin/events/${eventId}`,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
                   
        dispatch({ type:DELETE_EVENTS_SUCCESS, payload: eventId});
        console.log("Deleted Restaurant Events ", eventId);

        }catch(error){
            dispatch({ type:DELETE_EVENTS_FAILURE, payload: error});
               console.log("DeleteRestaurantEventsError ", error)
        }
     
    }
}

export const GetRestaurantsEvents =({restaurantId ,jwt})=>{
    return async(dispatch)=>{
        dispatch({type:GET_RESTAURANTS_EVENTS_REQUEST})
        try{
            const res= await api.delete(`/api/admin/events/restaurant${restaurantId}`,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
                   
        dispatch({ type:DELETE_EVENTS_SUCCESS, payload: res.data});
        console.log("Get All Restaurants Events ", eventId);

        }catch(error){
            dispatch({ type:DELETE_EVENTS_FAILURE, payload: error});
               console.log("GetAllRestaurantEventsError ", error)
        }
     
    }
}

export const createCategoryAction =({rreqData ,jwt})=>{
    return async(dispatch)=>{
        dispatch({type:CREATE_CATEGORY_REQUEST})
        try{
            const res= await api.post(`/api/admin/category`, reqData,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
                   
        dispatch({ type:CREATE_CATEGORY_SUCCESS, payload: res.data});
        console.log("Create category ", res.data);

        }catch(error){
            dispatch({ type:CREATE_CATEGORY_FAILURE, payload: error});
               console.log("CreateCategoryError ", error)
        }
     
    }
}

export const getRestaurantsCategory =({jwt, restaurantId})=>{
    return async(dispatch)=>{
        dispatch({type:GET_RESTAURANTS_CATEGORY_REQUEST})
        try{
            const res= await api.post(`/api/category/restaurants/${restaurantId}`, reqData,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
                   
        dispatch({ type:GET_RESTAURANTS_CATEGORY_SUCCESS, payload: res.data});
        console.log("Create category ", res.data);

        }catch(error){
            dispatch({ type:GET_RESTAURANTS_CATEGORY_FAILURE, payload: error});
               console.log("CreateCategoryError ", error)
        }
     
    }
}
