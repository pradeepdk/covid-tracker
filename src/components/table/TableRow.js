import React from 'react';

function TableRow(props) {
    //console.log("Props : " + JSON.stringify(props));
    return (
        <tbody>
            {
                props.commonProps.map((country)=>{
                    return (
                        <tr key={country.ID}>
                            <td>{country.Country}</td>
                            <td>{country.NewConfirmed}</td>
                            <td>{country.TotalConfirmed}</td>
                            <td>{country.NewDeaths}</td>
                            <td>{country.TotalDeaths}</td>
                            <td>{country.NewRecovered}</td>
                            <td>{country.TotalRecovered}</td>
                        </tr>
                    )
                })
            }
        </tbody>

    )
}

export default TableRow;