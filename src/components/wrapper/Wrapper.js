import { useEffect } from 'react';
import { useDispatch } from  'react-redux';
import Summary from "../summary/Summary";
import Table from "../table/Table";
import Filters from "../filters/Filters";
import './Wrapper.css';
import { SummaryActions } from '../../store/SummaryStore';
import { TableActions } from '../../store/TableStore';
function Wrapper() {

    const dispatch = useDispatch();
    useEffect(()=>{

        fetch("https://api.covid19api.com/summary", {method : 'GET'}).then(data => data.json()).then((data)=>{
            console.log(data);
            dispatch(SummaryActions.updateSummary(data.Global));
            dispatch(TableActions.updateTableStore(data.Countries));
        }).catch((err)=>{

            console.log("Error while fetching data");
        })
    },[])
    return (
        <div className="wrapper">
            <Summary></Summary>
            <Filters></Filters>
            <Table></Table>
        </div>
    )
}

export default Wrapper;