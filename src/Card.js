function Card(props) {
    console.log(props);
    return (
        <div>
            <div className="Card-container">
                <img
                    className="eqvilibium"
                    src={props.equilibrium}
                    alt="equilibrium"
                ></img>
                <img className="view" src={props.viewEye} alt="viewrEye"></img>
            </div>
        </div>
    );
}
export default Card;
