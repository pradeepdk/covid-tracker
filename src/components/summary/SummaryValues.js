function SummaryValues(props) {
    return (
        <div className="eachSummarySection">
            <p className="summarySectionLabel">{props.label}</p>
            <p className="summarySectionValue">{props.value}</p>

            <p className="summarySectionValueLoading"></p>
        </div>
    )
}

export default SummaryValues;