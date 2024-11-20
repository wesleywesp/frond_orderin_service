import { api, API_URL } from "../../component/Config/Api";
import { 
    CREATE_ORDER_FAILURE, 
    CREATE_ORDER_REQUEST, 
    CREATE_ORDER_SUCCESS, 
    GET_USERS_NOTIFICATION_FAILURE, 
    GET_USERS_NOTIFICATION_REQUEST, 
    GET_USERS_NOTIFICATION_SUCCESS, 
    GET_USERS_ORDERS_FAILURE, 
    GET_USERS_ORDERS_REQUEST, 
    GET_USERS_ORDERS_SUCCESS 
} from "./ActionType";

export const createOrder = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_ORDER_REQUEST });
        try {
            const { data } = await api.post(
                `/api/order`, // Endpoint ajustado, certifique-se de que é o correto
                reqData.order,
                {
                    headers: {
                        Authorization: `Bearer ${reqData.jwt}`, // Corrigido
                    },
                }
            );

            // Se necessário redirecionar para uma URL de pagamento
             if (data.payment_url) {
                window.location.href = data.payment_url;
             }

            dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
            console.log("Order Created", data);

        } catch (error) {
            dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
            console.log("CreateOrderError", error);
        }
    };
};

export const getUsersOrders = (jwt) => {
    return async (dispatch) => {
        console.log("jwt",jwt)
        dispatch({ type: GET_USERS_ORDERS_REQUEST });
        try {
            const { data } = await api.get(
                `/api/order/user`, 
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("Resposta do servidor:", data);

            dispatch({ type: GET_USERS_ORDERS_SUCCESS, payload: data });
            console.log("User Orders", data);

        } catch (error) {
            dispatch({ type: GET_USERS_ORDERS_FAILURE, payload: error });
            console.log("GetUsersOrdersError", error);
        }
    };
};

export const getUsersNotificationAction = (jwt) => { // jwt adicionado como argumento
    return async (dispatch) => {
        dispatch({ type: GET_USERS_NOTIFICATION_REQUEST });
        try {
            const { data } = await api.get(
                `/api/notifications`, // Certifique-se do endpoint correto
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            dispatch({ type: GET_USERS_NOTIFICATION_SUCCESS, payload: data });
            console.log("User Notifications", data);

        } catch (error) {
            dispatch({ type: GET_USERS_NOTIFICATION_FAILURE, payload: error });
            console.log("GetUsersNotificationError", error);
        }
    };
};
