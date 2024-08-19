import { Link } from "react-router-dom";
import "./Popcorn.css";
function Popcorn() {
    return (
        <div className="Popcorn">
            <div className="Popcorn-text">
                <h1>Popcorn</h1>
                <p>BOOM CHICKA POP. BOOM CHICKA POP POP.</p>
            </div>
            <div className="Popcorn-back-button">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}

export default Popcorn;