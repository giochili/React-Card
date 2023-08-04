import "./styles/index.css";
import Card from "./Card";
import Name from "./Name";
import Paragraph from "./Paragraph";
import Price from "./Price";
import Time from "./Time";
import Profile from "./Profile";

const myObj = {
    equilibrium: "./images/image-equilibrium.jpg",
    viewEye: "./images/icon-view.svg",
    clockIcon: "./images/icon-clock.svg",
    etherium: "./images/icon-ethereum.svg",
    avatar: "./images/image-avatar.png",
    cardName: "Equilibrium #3429",
    cardParagraph: "Our Equilibrium collection \n promotes balance and calm.",
    pricePara: "0.041 ETH",
    timePara: "3 days left",
    profileTXT: "Creation of",
    strong: "Jules Wyvern",
};

const App = (props) => (
    <div className="App-container">
        <Card equilibrium={myObj.equilibrium} viewEye={myObj.viewEye} />
        <Name cardName={myObj.cardName} />
        <Paragraph cardParagraph={myObj.cardParagraph} />
        <div className="price-time">
            <Price etherium={myObj.etherium} pricePara={myObj.pricePara} />
            <Time clockIcon={myObj.clockIcon} timePara={myObj.timePara} />
        </div>
        <Profile
            avatar={myObj.avatar}
            profileTXT={myObj.profileTXT}
            strong={myObj.strong}
        />
    </div>
);

//

export default App;
