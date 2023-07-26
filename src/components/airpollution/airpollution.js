const AirPollution = ({data}) => {
    return (
        <div className="air-pollution">
            <p className="AIQ">{data.list[0].main.aqi}</p>
        </div>
    )
}

export default AirPollution;