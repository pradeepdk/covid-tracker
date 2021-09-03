function Comparators () {
    function compareCountryDescending( a, b) {

        if ( a.Country > b.Country ){
            return -1;
        }
        if ( a.Country < b.Country ){
            return 1;
        }
        return 0;
    }
    function compareCountryAscending( a, b ) {
        if ( a.Country < b.Country ){
            return -1;
        }
        if ( a.Country > b.Country ){
            return 1;
        }
        return 0;
    }

    function compareNewConfirmedAscending( a, b ) {
        if ( a.NewConfirmed < b.NewConfirmed ){
            return -1;
        }
        if ( a.NewConfirmed > b.NewConfirmed ){
            return 1;
        }
        return 0;
    }
    function compareNewConfirmedDescending( a, b ) {
        if ( a.NewConfirmed > b.NewConfirmed ){
            return -1;
        }
        if ( a.NewConfirmed < b.NewConfirmed ){
            return 1;
        }
        return 0;
    }

    function compareTotalConfirmedAscending( a, b ) {
        if ( a.TotalConfirmed < b.TotalConfirmed ){
            return -1;
        }
        if ( a.NewConfirmed > b.NewConfirmed ){
            return 1;
        }
        return 0;
    }
    function compareTotalConfirmedDescending( a, b ) {
        if ( a.TotalConfirmed > b.TotalConfirmed ){
            return -1;
        }
        if ( a.TotalConfirmed < b.TotalConfirmed ){
            return 1;
        }
        return 0;
    }
    function compareNewDeathsAscending( a, b ) {
        if ( a.NewDeaths < b.NewDeaths ){
            return -1;
        }
        if ( a.NewDeaths > b.NewDeaths ){
            return 1;
        }
        return 0;
    }
    function compareNewDeathsDescending( a, b ) {
        if ( a.NewDeaths > b.NewDeaths ){
            return -1;
        }
        if ( a.NewDeaths < b.NewDeaths ){
            return 1;
        }
        return 0;
    }
    function compareTotalDeathsAscending( a, b ) {
        if ( a.TotalDeaths < b.TotalDeaths ){
            return -1;
        }
        if ( a.TotalDeaths > b.TotalDeaths ){
            return 1;
        }
        return 0;
    }
    function compareTotalDeathsDescending( a, b ) {
        if ( a.TotalDeaths > b.TotalDeaths ){
            return -1;
        }
        if ( a.TotalDeaths < b.TotalDeaths ){
            return 1;
        }
        return 0;
    }
    function compareNewRecoveredAscending( a, b ) {
        if ( a.NewRecovered < b.NewRecovered ){
            return -1;
        }
        if ( a.NewRecovered > b.NewRecovered ){
            return 1;
        }
        return 0;
    }
    function compareNewRecoveredDescending( a, b ) {
        if ( a.NewRecovered > b.NewRecovered ){
            return -1;
        }
        if ( a.NewRecovered < b.NewRecovered ){
            return 1;
        }
        return 0;
    }
    function compareTotalRecoveredAscending( a, b ) {
        if ( a.TotalRecovered < b.TotalRecovered ){
            return -1;
        }
        if ( a.TotalRecovered > b.TotalRecovered ){
            return 1;
        }
        return 0;
    }
    function compareTotalRecoveredDescending( a, b ) {
        if ( a.TotalRecovered > b.TotalRecovered ){
            return -1;
        }
        if ( a.TotalRecovered < b.TotalRecovered ){
            return 1;
        }
        return 0;
    }

    return {
        compareCountryDescending :compareCountryDescending,
        compareCountryAscending : compareCountryAscending,
        compareNewConfirmedAscending : compareNewConfirmedAscending,
        compareNewConfirmedDescending : compareNewConfirmedDescending,
        compareTotalConfirmedAscending : compareTotalConfirmedAscending,
        compareTotalConfirmedDescending : compareTotalConfirmedDescending,
        compareNewDeathsAscending : compareNewDeathsAscending,
        compareNewDeathsDescending : compareNewDeathsDescending,
        compareTotalDeathsAscending : compareTotalDeathsAscending,
        compareTotalDeathsDescending : compareTotalDeathsDescending,
        compareNewRecoveredAscending : compareNewRecoveredAscending,
        compareNewRecoveredDescending : compareNewRecoveredDescending,
        compareTotalRecoveredAscending : compareTotalRecoveredAscending,
        compareTotalRecoveredDescending : compareTotalRecoveredDescending
    }
}
export default Comparators();