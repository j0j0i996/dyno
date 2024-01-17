// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'; // helps with state reconciliation
import questionnaireReducer from './questionnaireSlice'; // assuming you have this slice defined elsewhere

// Define the root reducer as a combination of your other slices
const rootReducer = combineReducers({
  questionnaire: questionnaireReducer,
});

// Configuration for redux-persist
const persistConfig = {
  key: 'root', // key is the name under which the data will be stored in localStorage
  storage, // define which storage to use
  stateReconciler: autoMergeLevel2, // tells redux-persist how to reconcile the initial and stored states of the application
  whitelist: ['questionnaire'], // you can choose which parts of the state to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  // middleware and other store enhancers can go here
});

// Export the store's persistor
export const persistor = persistStore(store);