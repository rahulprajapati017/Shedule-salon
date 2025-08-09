import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./reducers/Authreducer"
const Store = configureStore({
    reducer:{
        AuthReducer
        

    }
})

export default Store