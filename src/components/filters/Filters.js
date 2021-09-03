import React, {useState,useEffect} from 'react';
import { TableActions } from '../../store/TableStore';
import { useDispatch, useSelector } from  'react-redux';
import './Filters.css';

function Filters() {
    const dispatch = useDispatch();

    //let debounceTimerForNewConfirmed = null;
    let minMaxValues = useSelector(state => state.table.minMaxValues);
    useEffect(()=>{
        setSelectedRangeValue(document.getElementById('newConfirmedFilter').value);
    },[minMaxValues])

    let [selectedRangeValue, setSelectedRangeValue] = useState(0);
    const getFilterValues = ()=> {
        let filterValues = {};
        filterValues.country = document.getElementById("countryFilter").value;
        filterValues.NewConfirmed = document.getElementById('newConfirmedFilter').value;
        return filterValues;
    }
    const filterChanged = () => {
        console.log("Filters changed");
        let filterValues = getFilterValues();
        dispatch(TableActions.applyFilter(filterValues));
    }

    const nameFilterHandler = (evt)=> {
        filterChanged();
    }
    const debounceForNewConfirmed = (func, delay) => {
        let debounceTimerForNewConfirmed
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimerForNewConfirmed)
            debounceTimerForNewConfirmed
                = setTimeout(() => func.apply(context, args), delay)
        }
    }


    const rangeChange = (evt)=>{
        setSelectedRangeValue(document.getElementById('newConfirmedFilter').value);
        filterChanged();
    }
    return (
        <div className="filterDiv">
            <div className="eachFilterDiv">
                <input id="countryFilter" className="filterInput" placeholder="Search country name..." type="text" onKeyUp={nameFilterHandler} />
            </div>
            <div className="eachFilterDiv">
                <div><p className="rangeLabel"> Minimum value: {minMaxValues.NewConfirmed.min}</p></div>
                <div><p className="rangeLabel"> Maximun value: {minMaxValues.NewConfirmed.max}</p></div>
                <div><p className="rangeLabel"> Selected value: {selectedRangeValue}</p></div>
                <input id="newConfirmedFilter" className="newConfirmedFilter" onInput={debounceForNewConfirmed(rangeChange,500)} defaultValue={minMaxValues.NewConfirmed.max} step="5" type="range" min={minMaxValues.NewConfirmed.min} max={minMaxValues.NewConfirmed.max}  />
            </div>
        </div>
    )
}

export default Filters;