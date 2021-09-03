import  { configureStore } from '@reduxjs/toolkit';

import SummaryStore from "./SummaryStore";
import TableStore from "./TableStore";

const store = configureStore({
    reducer :{
        summary: SummaryStore.reducer,
        table : TableStore.reducer
    }
})

export default store;