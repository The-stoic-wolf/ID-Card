import { configureStore } from "@reduxjs/toolkit";
import  UserSlice  from "../features/userSlice/UserSlice";

export const Store = configureStore({
    reducer : {
        user : UserSlice,
    }
})
