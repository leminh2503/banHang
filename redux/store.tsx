import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createSagaMiddleware from "redux-saga";

import Config from "../config";
import {configureStore} from "@reduxjs/toolkit";
import saga from "./saga";
import rootReducer from "./reducer";

const persistConfig = {
  key: Config.STORE_NAME,
  storage: AsyncStorage,
  keyPrefix: "",
  whitelist: ["userReducer"],
  blacklist: [""],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(saga);

export const persistor = persistStore(store);

export default store;
export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch;
