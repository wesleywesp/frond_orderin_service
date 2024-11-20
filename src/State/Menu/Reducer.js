import * as actionTypes from "./ActionType"
const initialState = {
    menuItems: [],
    loading: false,
    error: null,
    search: [],
    message: [],
}
export const menuItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_MENU_ITEM_REQUEST:
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_REQUEST:
        case actionTypes.DELETE_MENU_ITEM_REQUEST:
        case actionTypes.SEARCH_MENU_ITEM_REQUEST:
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                message: null

            }
        case actionTypes.CREATE_MENU_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                menuItems: [...state.menuItems, action.payload],
                message: "food created Successfully"
            }
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                menuItems: action.payload,
            }
        case actionTypes.DELETE_MENU_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                menuItems: state.menuItems.filter(
                    (menuItem) => menuItem.id !== action.payload
                ),
            };
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                menuItems: state.menuItems.map((menuItem) =>
                    menuItem.id === action.payload.id ? action.payload : menuItem),
                message: "food availability updated"
            }

        case actionTypes.SEARCH_MENU_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                search: action.payload,
            }
        case actionTypes.CREATE_MENU_ITEM_FAILURE:
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_FAILURE:
        case actionTypes.DELETE_MENU_ITEM_FAILURE:
        case actionTypes.SEARCH_MENU_ITEM_FAILURE:
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;


    }
};
export default menuItemReducer;