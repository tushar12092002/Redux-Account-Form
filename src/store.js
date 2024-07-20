import accountreducer from "./features/account/accountslice";
import customerreducer from "./features/customers/customerslice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer :{
    account: accountreducer,
    customer : customerreducer
    }
})

export default store
