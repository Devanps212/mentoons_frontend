import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import rootReducer from "../rootReducer/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authSlice"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
