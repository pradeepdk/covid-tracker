
import Labels from '../../utils/ColumnHeaderLabel'
import { useDispatch } from  'react-redux';
import {TableActions} from "../../store/TableStore";

function TableHeader() {
    const dispatch = useDispatch();

    const sortAscending = (evt) => {
        console.log("Ascending is called");
        let field = evt.currentTarget.getAttribute('data-field');
        dispatch(TableActions.sortTableAscending(field));
    }
    const sortDescending = (evt) => {
        console.log("sortDescending is called");
        let field = evt.currentTarget.getAttribute('data-field');
        dispatch(TableActions.sortTableDescending(field));
    }
    return (
        <thead className="tableHeaderDiv">
            <tr>
              <th> {Labels["Country"]} <div className="iconsWrapper"> <span data-field="Country" className="sortAscending" onClick={sortAscending}>  </span> <span className="sortDescending" data-field="Country" onClick={sortDescending}>  </span> </div> </th>
              <th> {Labels["NewConfirmed"]} <div className="iconsWrapper"> <span data-field="NewConfirmed" className="sortAscending" onClick={sortAscending}>  </span> <span data-field="NewConfirmed" className="sortDescending" onClick={sortDescending}>  </span> </div> </th>
              <th> {Labels["TotalConfirmed"]} <div className="iconsWrapper"> <span data-field="TotalConfirmed" className="sortAscending" onClick={sortAscending}>  </span> <span data-field="TotalConfirmed" className="sortDescending" onClick={sortDescending}>  </span> </div> </th>
              <th> {Labels["NewDeaths"]} <div className="iconsWrapper"> <span data-field="NewDeaths" className="sortAscending" onClick={sortAscending}>  </span> <span data-field="NewDeaths" className="sortDescending" onClick={sortDescending}>  </span> </div> </th>
              <th> {Labels["TotalDeaths"]} <div className="iconsWrapper"> <span data-field="TotalDeaths" className="sortAscending" onClick={sortAscending}>  </span> <span data-field="TotalDeaths" className="sortDescending" onClick={sortDescending}>  </span> </div> </th>
              <th> {Labels["NewRecovered"]} <div className="iconsWrapper"> <span data-field="NewRecovered" className="sortAscending" onClick={sortAscending}>  </span> <span data-field="NewRecovered" className="sortDescending" onClick={sortDescending}>  </span> </div> </th>
              <th> {Labels["TotalRecovered"]} <div className="iconsWrapper"> <span data-field="TotalRecovered" className="sortAscending" onClick={sortAscending}>  </span> <span data-field="TotalRecovered" className="sortDescending" onClick={sortDescending}>  </span> </div> </th>
            </tr>
        </thead>
    )
}
export default TableHeader;