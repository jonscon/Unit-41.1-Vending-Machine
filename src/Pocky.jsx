import { Link } from "react-router-dom";
import "./Pocky.css";

function Pocky() {
    return (
        <div className="Pocky">
            <div className="Pocky-text">
                <h1>Pocky</h1>
                <p>Take a strawberry Pocky!</p>
            </div>
            <div className="Pocky-back-button">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}

export default Pocky;