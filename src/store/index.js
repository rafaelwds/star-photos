import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import Reactotron from "../config/Reactotron";
import rootReducer from "./ducks";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, Reactotron.createEnhancer());
const persistor = persistStore(store);

export { store, persistor };
