import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reduce";
import { thunk } from "redux-thunk";
import { restaurantReducer } from "./Restaurant/Reducer";
import { menuItemReducer } from "./Menu/Reducer";
import cartReducer from "./Card/Reducer";
import orderReducer from "./Order/Reducer";
import restaurantsORdersReducer from "./RestaurantOrder/Reducer";
import { ingredientReducer }  from "./Ingredients/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,
    restaurantOrder: restaurantsORdersReducer,
    ingredient: ingredientReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
