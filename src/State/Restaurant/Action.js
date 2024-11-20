import { api } from "../../component/Config/Api";
import {
  CREATE_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_EVENTS_FAILURE,
  CREATE_EVENTS_REQUEST,
  CREATE_EVENTS_SUCCESS,
  CREATE_RESTAURANT_FAILURE,
  CREATE_RESTAURANT_REQUEST,
  CREATE_RESTAURANT_SUCCESS,
  DELETE_EVENTS_FAILURE,
  DELETE_EVENTS_REQUEST,
  DELETE_EVENTS_SUCCESS,
  DELETE_RESTAURANT_FAILURE,
  DELETE_RESTAURANT_REQUEST,
  DELETE_RESTAURANT_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_RESTAURANTS_FAILURE,
  GET_ALL_RESTAURANTS_REQUEST,
  GET_ALL_RESTAURANTS_SUCCESS,
  GET_RESTAURANT_BY_ID_FAILURE,
  GET_RESTAURANT_BY_ID_REQUEST,
  GET_RESTAURANT_BY_ID_SUCCESS,
  GET_RESTAURANTS_CATEGORY_FAILURE,
  GET_RESTAURANTS_CATEGORY_REQUEST,
  GET_RESTAURANTS_CATEGORY_SUCCESS,
  UPDATE_RESTAURANT_FAILURE,
  UPDATE_RESTAURANT_REQUEST,
  UPDATE_RESTAURANT_SUCCESS,
  UPDATE_RESTAURANT_STATUS_FAILURE,
  UPDATE_RESTAURANT_STATUS_REQUEST,
  UPDATE_RESTAURANT_STATUS_SUCCESS,
  GET_RESTAURANTS_EVENTS_SUCCESS,
  GET_RESTAURANTS_EVENTS_FAILURE,
  GET_RESTAURANTS_EVENTS_REQUEST,
} from "./ActionType";

// Obter todos os restaurantes
export const getAllRestaurantsAction = (jwt) => async (dispatch) => {
  dispatch({ type: GET_ALL_RESTAURANTS_REQUEST });
  try {
    const { data } = await api.get("/api/restaurants", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data });
    console.log("All Restaurants:", data);
  } catch (error) {
    dispatch({
      type: GET_ALL_RESTAURANTS_FAILURE,
      payload: error.response?.data || error.message,
    });
    console.log("GetAllRestaurantsError:", error);
  }
};

// Obter restaurante por ID
export const getRestaurantById = ({ restaurantId, jwt }) => async (dispatch) => {
  console.log("restal",restaurantId)
  dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/restaurants/${restaurantId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: data });
    console.log("Restaurant:", data);
  } catch (error) {
    dispatch({
      type: GET_RESTAURANT_BY_ID_FAILURE,
      payload: error.response?.data || error.message,
    });
    console.log("GetRestaurantError:", error);
  }
};

// Criar restaurante
export const createRestaurantAction = ({ data, jwt }) => async (dispatch) => {
  dispatch({ type: CREATE_RESTAURANT_REQUEST });
  try {
    const response = await api.post("/api/admin/restaurant", data, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: response.data });
    console.log("Restaurant Created:", response.data);
  } catch (error) {
    dispatch({
      type: CREATE_RESTAURANT_FAILURE,
      payload: error.response?.data || error.message,
    });
    console.log("CreateRestaurantError:", error);
  }
};

// Atualizar restaurante
export const updateRestaurant = ({ restaurantId, restaurantData, jwt }) => async (dispatch) => {
  dispatch({ type: UPDATE_RESTAURANT_REQUEST });
  try {
    const response = await api.put(`/api/admin/restaurant/${restaurantId}`, restaurantData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: response.data });
    console.log("Restaurant Updated:", response.data);
  } catch (error) {
    dispatch({
      type: UPDATE_RESTAURANT_FAILURE,
      payload: error.response?.data || error.message,
    });
    console.log("UpdateRestaurantError:", error);
  }
};

// Excluir restaurante
export const deleteRestaurant = ({ restaurantId, jwt }) => async (dispatch) => {
  dispatch({ type: DELETE_RESTAURANT_REQUEST });
  try {
    await api.delete(`/api/admin/restaurant/${restaurantId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: restaurantId });
    console.log("Restaurant Deleted:", restaurantId);
  } catch (error) {
    dispatch({
      type: DELETE_RESTAURANT_FAILURE,
      payload: error.response?.data || error.message,
    });
    console.log("DeleteRestaurantError:", error);
  }
};

// Atualizar status do restaurante
export const updateRestaurantStatus = ({ restaurantId, jwt }) => async (dispatch) => {
  dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
  try {
    const response = await api.put(`/api/admin/restaurant/${restaurantId}/status`, {}, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: response.data });
    console.log("Restaurant Status Updated:", response.data);
  } catch (error) {
    dispatch({
      type: UPDATE_RESTAURANT_STATUS_FAILURE,
      payload: error.response?.data || error.message,
    });
    console.log("UpdateRestaurantStatusError:", error);
  }
};

// Outras funções foram corrigidas no mesmo padrão para nomes de ações, parâmetros e respostas consistentes.

export const createEventAction = ({ data, jwt, restaurantId }) => async (dispatch) => {
    dispatch({ type: CREATE_EVENTS_REQUEST });
    try {
      const res = await api.post(`/api/admin/restaurant/${restaurantId}`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
  
      dispatch({ type: CREATE_EVENTS_SUCCESS, payload: res.data });
      console.log("Create Restaurant Events:", res.data);
    } catch (error) {
      dispatch({
        type: CREATE_EVENTS_FAILURE,
        payload: error.response?.data || error.message,
      });
      console.log("EventsRestaurantError:", error);
    }
  };
  
  export const getAllEvents = ({ jwt }) => async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });
    try {
      const res = await api.get(`/api/events/`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
  
      dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data });
      console.log("All Events:", res.data);
    } catch (error) {
      dispatch({
        type: GET_ALL_EVENTS_FAILURE,
        payload: error.response?.data || error.message,
      });
      console.log("GetAllEventsError:", error);
    }
  };
  
  export const deleteEventAction = ({ eventId, jwt }) => async (dispatch) => {
    dispatch({ type: DELETE_EVENTS_REQUEST });
    try {
      await api.delete(`/api/admin/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
  
      dispatch({ type: DELETE_EVENTS_SUCCESS, payload: eventId });
      console.log("Deleted Event:", eventId);
    } catch (error) {
      dispatch({
        type: DELETE_EVENTS_FAILURE,
        payload: error.response?.data || error.message,
      });
      console.log("DeleteEventError:", error);
    }
  };
  
  export const getRestaurantsEvents = ({ restaurantId, jwt }) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_EVENTS_REQUEST });
    try {
      const res = await api.get(`/api/admin/events/restaurant/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
  
      dispatch({ type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: res.data });
      console.log("Get All Restaurant Events:", res.data);
    } catch (error) {
      dispatch({
        type: GET_RESTAURANTS_EVENTS_FAILURE,
        payload: error.response?.data || error.message,
      });
      console.log("GetRestaurantEventsError:", error);
    }
  };
  
  export const createCategoryAction = ({ reqData, jwt }) => async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });
    try {
      const res = await api.post(`/api/admin/category`, reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
  
      dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data });
      console.log("Created Category:", res.data);
    } catch (error) {
      dispatch({
        type: CREATE_CATEGORY_FAILURE,
        payload: error.response?.data || error.message,
      });
      console.log("CreateCategoryError:", error);
    }
  };
  
  export const getRestaurantsCategory = ({ jwt, restaurantId }) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });
    try {
      const res = await api.get(`/api/category/restaurants/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
  
      dispatch({ type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: res.data });
      console.log("Fetched Restaurant Categories:", res.data);
    } catch (error) {
      dispatch({
        type: GET_RESTAURANTS_CATEGORY_FAILURE,
        payload: error.response?.data || error.message,
      });
      console.log("GetRestaurantCategoryError:", error);
    }
  };
  