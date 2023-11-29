import { useNavigate } from "react-router-dom";
import arrow from "../../images/arrow.svg";
import "./BackButton.scss";

const BackButton = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/");
    };
    return (
        <button aria-label="Go back button" tabIndex={0} className="back-button" onClick={handleRedirect}>
         <img className="back-button__icon" src={arrow} alt="Arrow Icon" /> Back
        </button>
    );
};


export default BackButton;