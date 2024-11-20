import { api, API_URL } from "../../component/Config/Api";
import axios from "axios";
import { REGISTER_FAILURE, LOGIN_FAILURE, REGISTER_REQUEST, ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from "./ActionType";

export const registerUser = (reqData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        if (data.jwt) localStorage.setItem("jwt", data.jwt);

        if (reqData && reqData.navigator) {
            if (data.role === "ROLE_RESTAURANT_OWNER") {
                reqData.navigator("/admin/restaurant");
            } else {
                reqData.navigator("/");
            }
        } else {
            console.error("Navigator não encontrado em reqData");
        }
        

        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
        console.log("Register Success", data);

    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error.toString() });
        console.log("error", error);
    }
};


export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData);
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            console.log("Token armazenado no localStorage:", data.jwt);
        }
        
        if (data.role === "ROLE_RESTAURANT_OWNER") {
            reqData.navigator("/admin/restaurant");
        } else {
            reqData.navigator("/");
        }
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
        console.log("Login Success", data);
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.toString() });
        console.log("error", error);
    }
};

export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });

    try {
        const jwt = localStorage.getItem("jwt");
        const { data } = await api.get('/api/user/profile', {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        });
        
        dispatch({ type: GET_USER_SUCCESS, payload: data });
        console.log("User Profile", data);
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error.toString() });
        console.log("Erro:", error);
    }
};




export const addFavorite = (restaurantId, jwt) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST });
    console.log("restaurantId1111", restaurantId);
    
    try {
        // Verifique se restaurantId é numérico ou string antes de passá-lo
        const { data } = await api.put(`/api/restaurants/${restaurantId}/add-favorites`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        // Certifique-se de que data é o que você espera (objeto do restaurante ou apenas o id)
        dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
        console.log("Add To Favorites", data);

    } catch (error) {
        dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error.toString() });
        console.log("Error adding to favorites", error);
    }
};



export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
    console.log("Logout Success");
};
