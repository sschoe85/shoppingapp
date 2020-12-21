import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import storage from 'redux-persist/lib/storage' //local storage
import persistReducer from "redux-persist/es/persistReducer";
import directoryReducer from "./directory/directory.reducer";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']  //this is the reducer that we store
}

const rootReducer =  combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);