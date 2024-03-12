import { configureStore } from "@reduxjs/toolkit";
import userDetails from '../features/userData';
import taskDetails from '../features/taskData';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';


const persistConfig = {
    key: 'root',
    storage,
  }

const reducers = combineReducers({
    registration: userDetails,
    tasks: taskDetails,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;