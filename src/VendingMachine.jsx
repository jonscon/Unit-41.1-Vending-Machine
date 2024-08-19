import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
    return (
        <div className="VendingMachine">
            <div className="VendingMachine-greeting">
                <p>Welcome! What would you like to eat?</p>
            </div>
            <div className="VendingMachine-snacks">
                <Link to="/popcorn">
                    Popcorn
                </Link>
                <Link to="/pocky">
                    Pocky
                </Link>
                <Link to="/soda">
                    Soda
                </Link>
            </div>
        </div>
    )
}

export default VendingMachine;