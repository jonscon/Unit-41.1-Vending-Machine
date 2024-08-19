import { Link } from "react-router-dom";
import "./Soda.css";

function Soda() {
    return (
        <div className="Soda">
            <div className="Soda-text">
                <h1>Choose Your Alliance</h1>
                <p>Coke?</p>
                <p>Diet Coke?</p>
                <p>Sprite?</p>
                <p>Dr.Pepper?</p>
            </div>
            <div className="Soda-back-button">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}

export default Soda;