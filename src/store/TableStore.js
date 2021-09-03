import { createSlice } from '@reduxjs/toolkit';

import Comparators from "../utils/Comparators";

const initialState = {
    items : [
        {
            ID: "0",
            Country: "",
            CountryCode: "",
            Slug: "",
            NewConfirmed: 0,
            TotalConfirmed: 0,
            NewDeaths: 0,
            TotalDeaths: 0,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: "",
        }
    ],
    completeItems : [],
    minMaxValues :{
        NewConfirmed : {
            min : 0,
            max : 0
        },
        TotalConfirmed : {
            min : 0,
            max : 0
        },
        NewDeaths : {
            min : 0,
            max : 0
        },

    }
};

const TableStore = createSlice({
    name: 'summarySlice',
    initialState,
    reducers: {
        updateTableStore(state,actions){
            state.items = actions.payload;
            state.completeItems = actions.payload;
            let minNewDeaths = actions.payload[0].NewDeaths;
            let maxNewDeaths = actions.payload[0].NewDeaths;
            let minNewConfirmed = actions.payload[0].NewConfirmed;
            let maxNewConfirmed = actions.payload[0].NewConfirmed;
            let minTotalConfirmed = actions.payload[0].TotalConfirmed;
            let maxTotalConfirmed = actions.payload[0].TotalConfirmed;

            actions.payload.map((eachCountry)=>{
                if(eachCountry.NewConfirmed < minNewConfirmed){
                    minNewConfirmed = eachCountry.NewConfirmed;
                }
                if(eachCountry.NewConfirmed > maxNewConfirmed){
                    maxNewConfirmed = eachCountry.NewConfirmed;
                }
                if(eachCountry.TotalConfirmed > maxTotalConfirmed){
                    maxTotalConfirmed = eachCountry.TotalConfirmed;
                }
                if(eachCountry.TotalConfirmed < minTotalConfirmed){
                    minTotalConfirmed = eachCountry.TotalConfirmed;
                }
                if(eachCountry.NewDeaths > maxNewDeaths) {
                    maxNewDeaths = eachCountry.NewDeaths;
                }
                if(eachCountry.NewDeaths < minNewDeaths) {
                    minNewDeaths = eachCountry.NewDeaths;
                }
            })

            state.minMaxValues['NewConfirmed'].min = minNewConfirmed;
            state.minMaxValues['NewConfirmed'].max = maxNewConfirmed;

            state.minMaxValues['TotalConfirmed'].min = minTotalConfirmed;
            state.minMaxValues['TotalConfirmed'].max = maxTotalConfirmed;

            state.minMaxValues['NewDeaths'].min = minNewDeaths;
            state.minMaxValues['NewDeaths'].max = maxNewDeaths;

            //console.log("Table array : " + JSON.stringify(state.items));
        },
        sortTableAscending(state,actions){
            console.log("sortTableAscending is called!!" + actions.payload);
            switch (actions.payload) {
                case "Country":
                    state.items.sort(Comparators.compareCountryAscending);
                    break;
                case "NewConfirmed":
                    state.items.sort(Comparators.compareNewConfirmedAscending);
                    break;
                case "TotalConfirmed":
                    state.items.sort(Comparators.compareTotalConfirmedAscending);
                    break;
                case "NewDeaths":
                    state.items.sort(Comparators.compareNewDeathsAscending);
                    break;
                case "TotalDeaths":
                    state.items.sort(Comparators.compareTotalDeathsAscending);
                    break;
                case "NewRecovered":
                    state.items.sort(Comparators.compareNewRecoveredAscending);
                    break;
                case "TotalRecovered":
                    state.items.sort(Comparators.compareTotalRecoveredAscending);
                    break;
                default :
                    break;
            }

        },
        sortTableDescending(state,actions){
            console.log("sortTableDescending is called!!"+ actions.payload);
            switch (actions.payload) {
                case "Country":
                    state.items.sort(Comparators.compareCountryDescending);
                    break;
                case "NewConfirmed":
                    state.items.sort(Comparators.compareNewConfirmedDescending);
                    break;
                case "TotalConfirmed":
                    state.items.sort(Comparators.compareTotalConfirmedDescending);
                    break;
                case "NewDeaths":
                    state.items.sort(Comparators.compareNewDeathsDescending);
                    break;
                case "TotalDeaths":
                    state.items.sort(Comparators.compareTotalDeathsDescending);
                    break;
                case "NewRecovered":
                    state.items.sort(Comparators.compareNewRecoveredDescending);
                    break;
                case "TotalRecovered":
                    state.items.sort(Comparators.compareTotalRecoveredDescending);
                    break;
                default :
                    break;
            }
        },

        applyFilter(state,actions) {
            console.log("Apply filters called");
            let items = state.completeItems.filter(country => {
                if(country.Country.includes(actions.payload.country) && country.NewConfirmed <= actions.payload.NewConfirmed) {
                    return true;
                }
            });
            state.items = items;
        }

    }
})


export const TableActions = TableStore.actions;
export default TableStore;


