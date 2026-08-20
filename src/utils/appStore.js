import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSearchSlice";
import { persistStore, persistReducer } from "redux-persist";
import storageModule from "redux-persist/lib/storage";

const storage = storageModule.default || storageModule;
const persistConfig = {
  key: "user",
  storage,
};
const persistedUserReducer = persistReducer(persistConfig, userReducer);
const appStore = configureStore({
  reducer: {
    user: persistedUserReducer,
    movies: movieReducer,
    gpt: gptReducer,
  },
});
export const persistor = persistStore(appStore);
export default appStore;
