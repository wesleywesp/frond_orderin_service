import { api } from "../../component/Config/Api";
import { 
    GET_RESTAURANTS_ORDER_FAILURE, 
    GET_RESTAURANTS_ORDER_REQUEST, 
    GET_RESTAURANTS_ORDER_SUCCESS, 
    UPDATE_ORDER_STATUS_FAILURE, 
    UPDATE_ORDER_STATUS_REQUEST, 
    UPDATE_ORDER_STATUS_SUCCESS 
} from "./ActionType";

export const updateOrderStatus = ({ orderId, orderStatus, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
        try {
            const res = await api.put(
                `/api/admin/orders/${orderId}/${orderStatus}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: res.data });
            console.log("Order status updated", res.data);

        } catch (error) {
            dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error });
            console.error("UpdateOrderStatusError", error);
        }
    };
};

export const fetchRestaurantsOrder = ({ restaurantId, orderStatus, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST });
        try {
            const { data } = await api.get(
                `/api/admin/orders/restaurant/${restaurantId}`,
                {
                    params: {
                        order_status: orderStatus,
                    },
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            dispatch({ type: GET_RESTAURANTS_ORDER_SUCCESS, payload: data });
            console.log("Fetched restaurant orders", data);

        } catch (error) {
            dispatch({ type: GET_RESTAURANTS_ORDER_FAILURE, payload: error });
            console.error("FetchRestaurantOrdersError", error);
        }
    };
};
