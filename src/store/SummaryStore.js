import { createSlice } from '@reduxjs/toolkit';
import Labels from '../utils/ColumnHeaderLabel';

const initialState = {
    items : [
        {
            label : Labels.NewConfirmed,
            value : 0
        },
        {
            label : Labels.NewDeaths,
            value : 0
        },
        {
            label : Labels.NewRecovered,
            value : 0
        },
        {
            label : Labels.TotalConfirmed,
            value : 0
        },
        {
            label : Labels.TotalDeaths,
            value : 0
        },
        {
            label : Labels.TotalRecovered,
            value : 0
        }
    ]
}


const SummaryStore = createSlice({
    name : 'summarySlice',
    initialState,
    reducers : {
        updateSummary(state,actions){
            let globalValues = actions.payload;
            let items = []
            for(let key in Labels){
                if(globalValues[key] === undefined){
                    continue;
                }
                items.push({
                    label : Labels[key],
                    value : globalValues[key]
                })
            }
            state.items = items;

            console.log("Summary updates should be done here");
        }
    }
})

export const SummaryActions = SummaryStore.actions;
export default SummaryStore;

