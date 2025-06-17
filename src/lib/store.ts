import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import servicesSlice from "./features/serviceSlice";

export const bookStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      services: servicesSlice,
    },
  });
};

export type AppStore = ReturnType<typeof bookStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
