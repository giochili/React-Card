function Price(props) {
    return (
        <div className="price-container">
            <img
                className="price-etherium"
                alt="etherium"
                src={props.etherium}
            ></img>
            <p className="price-para">{props.pricePara}</p>
        </div>
    );
}
export default Price;
