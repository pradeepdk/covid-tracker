
import React, { useState } from 'react';
import { useDispatch } from  'react-redux';
import { SummaryActions } from '../store/SummaryStore';
import { TableActions } from '../store/TableStore';


function DataFacade() {
    const dispatch = useDispatch();

    const getFreshData = ()=>{
        let url = "https://api.covid19api.com/summary";

        fetch(url, {method : 'GET'}).then(data => data.json()).then((data)=>{
            console.log(data);
            dispatchSummaryAction(data);
            dispatchTableAction(data)
            dispatch(SummaryActions.updateSummary(data.Global));
            dispatch(TableActions.updateTableStore(data.Countries));
        }).catch((err)=>{
            console.log("Error while fetching data");
        })
    }

    const dispatchSummaryAction = (data)=>{
        dispatch(SummaryActions.updateSummary(data.Global));
    }

    const dispatchTableAction = (data)=>{
        dispatch(TableActions.updateTableStore(data.Countries));
    }

    return {
        getFreshData : getFreshData
    }
}

export default DataFacade();