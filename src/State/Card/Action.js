import { api, API_URL } from "../../component/Config/Api";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEARE_CART_FAILURE, CLEARE_CART_REQUEST, CLEARE_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALLCART_ITEMS_FAILURE, GET_ALLCART_ITEMS_REQUEST, GET_ALLCART_ITEMS_SUCCESS, REMOVE_CARTITEM_FAILURE, REMOVE_CARTITEM_REQUEST, REMOVE_CARTITEM_SUCCESS, UPDATE_CARITEM_FAILURE, UPDATE_CARITEM_REQUEST, UPDATE_CARITEM_SUCCESS } from "./ActionType";

export const findCart = (jwt) => {
    return async (dispatch) => {
        dispatch({ type: FIND_CART_REQUEST });
        try {
            const resp = await api.get(`/api/cart`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({ type: FIND_CART_SUCCESS, payload: resp.data });
            console.log("Cart Find", resp.data);

        } catch (error) {
            dispatch({ type: FIND_CART_FAILURE, payload: error });
            console.log("CartFindError", error);
        }
    };
};



export const getAllCartItems = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALLCART_ITEMS_REQUEST });
        try {
            const resp = await api.get(
                `/api/carts/${reqData.cartId}/item`,
                {
                    headers: {
                        Authorization: `Bearer ${reqData.jwt}`,
                    },
                }
            );

            dispatch({ type: GET_ALLCART_ITEMS_SUCCESS, payload: resp.data });
            console.log("All Cart Items", resp.data);

        } catch (error) {
            dispatch({ type: GET_ALLCART_ITEMS_FAILURE, payload: error });
            console.log("GetAllCartItemsError", error);
        }
    };
};




export const addItemToCart = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
        try {
            const { data } = await api.put(`/api/cart/add`, reqData, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });

            dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
            console.log("Item Added to Cart", data);

        } catch (error) {
            dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error });
            console.log("AddItemToCartError", error);
        }
    };
};

export const updateCartItem = (reqData) => {
    return async (dispatch) => {
        console.log("updateData", reqData, "jwt", reqData.data.jwt);
        dispatch({ type: UPDATE_CARITEM_REQUEST });
        try {
            const { data } = await api.put(`/api/cart-item/update`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.data.jwt}`,
                },
            });

            dispatch({ type: UPDATE_CARITEM_SUCCESS, payload: data });
            console.log("Updated Cart Item", data);

        } catch (error) {
            dispatch({ type: UPDATE_CARITEM_FAILURE, payload: error });
            console.log("UpdateCartItemError", error);
        }
    };
};




export const removeCartItem = ({cartItemId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: REMOVE_CARTITEM_REQUEST });
        try {
            const { data } = await api.delete(`/api/cart-item/${cartItemId}/remove`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({ type: REMOVE_CARTITEM_SUCCESS, payload:cartItemId });
            console.log("Deleted Menu Item", data);

        } catch (error) {
            dispatch({ type: REMOVE_CARTITEM_FAILURE, payload: error });
            console.log("DeleteMenuItemError", error);
        }
    };
};

export const clearCartAction = () => {
    return async (dispatch) => {
        dispatch({ type: CLEARE_CART_REQUEST });
        try {
            const jwt = localStorage.getItem("jwt");
            const { data } = await api.put(`/api/cart/clear`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({ type: CLEARE_CART_SUCCESS, payload: data });
            console.log("Cart Cleared", data);

        } catch (error) {
            dispatch({ type: CLEARE_CART_FAILURE, payload: error });
            console.log("ClearCartError", error);
        }
    };
};

