import  { useSelector } from "react-redux";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import './Table.css';

function Table() {
    const TableArray = useSelector(state =>  {
        //console.log(state.summary.items);
        return state.table.items;
    });

    return (
        <div className="TableWrapper">
            <table className="trackingTable">
                <TableHeader></TableHeader>
                <TableRow commonProps={TableArray}></TableRow>
            </table>

        </div>
    )
}

export default Table;