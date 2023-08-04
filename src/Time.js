function Time(props) {
    return (
        <div className="time-container">
            <img className="clock" src={props.clockIcon} alt="clock"></img>
            <p className="time-para">{props.timePara}</p>
        </div>
    );
}
export default Time;
