import  { useSelector } from "react-redux";

import SummaryValues from "./SummaryValues";
import './Summary.css';
function Summary() {
    const summaryArray = useSelector(state =>  {
        //console.log(state.summary.items);
        return state.summary.items
    });

    return (
        <div className="summaryDiv">
            <div className="summaryHeaderDiv"><p className="summaryHeaderText">Global Summary</p> </div>
                {summaryArray.map((item)=> (
                    <SummaryValues key={item.label} label={item.label} value={item.value}/>
                ))}
        </div>
    )
}

export default Summary;