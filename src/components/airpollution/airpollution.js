import "./airpollution.css";

//create a list of air quality levels
const AIQ_LEVELS = [
    "Good",
    "Fair",
    "Moderate",
    "Poor",
    "Very Poor"
]

//create a component that will display the air pollution
const AirPollution = ({data}) => {
    const airQuality = AIQ_LEVELS[data.list[0].main.aqi-1];

    return (
        <div className="air-pollution">
            <label className="AIQ-title">Air Quality Index</label>
            <div className="bottom">
                <p className="AIQ">{airQuality}</p>
                <div className="AIQ-details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">SO<sub>2</sub></span>
                        <span className="parameter-value">{data.list[0].components.co}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">NO<sub>2</sub></span>
                        <span className="parameter-value">{data.list[0].components.no2}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">PM<sub>2.5</sub></span>
                        <span className="parameter-value">{data.list[0].components.pm2_5}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">O<sub>3</sub></span>
                        <span className="parameter-value">{data.list[0].components.o3}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirPollution;