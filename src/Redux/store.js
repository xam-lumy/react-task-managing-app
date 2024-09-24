import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice'
import taskReducer from './task/taskSlice'


import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";


const persistConfig = {
    key: 'root',
    storage,
    version: 1
}
const rootReducer = combineReducers({
    userData: userReducer,
    taskName: taskReducer,
 
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: false})
})

export const persistor = persistStore(store)
export default store

// persistor.purge()


