import './Header.css';
import React, { useState } from 'react';
import { SummaryActions } from '../../store/SummaryStore';
import { TableActions } from '../../store/TableStore';
import { useDispatch } from  'react-redux';


function Header() {
    const [lastRefreshedDate, setDate] = useState(new Date().toTimeString());
    const dispatch = useDispatch();
    const refreshButtonHandler = ()=>{
        fetch("https://api.covid19api.com/summary", {method : 'GET'}).then(data => data.json()).then((data)=>{
            console.log(data);
            dispatch(SummaryActions.updateSummary(data.Global));
            dispatch(TableActions.updateTableStore(data.Countries));
            setDate(new Date().toTimeString());
        }).catch((err)=>{
            console.log("Error while fetching data");
        })

    }
    return (
        <header className="header">
            <div className="logoDiv">
                <p className="logoText">Covid Tracker</p>
            </div>
            <div className="refreshedDiv">
                <button className="refreshButton" onClick={refreshButtonHandler}>Refresh</button>
                <p>Last Refreshed : {lastRefreshedDate}</p>
            </div>
        </header>
    )
}

export default Header;