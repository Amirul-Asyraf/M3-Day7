import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers/index';
// import countReducer from "../reducers/countReducer";
// import todoReducer from "../reducers/todoReducer";

//Saves all the data in a storage that is placed in the "root" (basically the main html file)
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

//used to "persist" the reducer files
const persistedReducer = persistReducer(persistConfig, rootReducer)

//functions similarly as "export default configureStore"
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  
let persistor = persistStore(store)

export { store, persistor };
// export default configureStore({
//     reducer: {
//         count: countReducer,
//         todo: todoReducer,
//     },
// })