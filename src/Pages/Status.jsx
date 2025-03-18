import { useLocation } from "react-router-dom";
import RejectionAnimation from "../Modules/RejectAnimation/RejectionAnimation";
import CheckmarkAnimation from "../Modules/SuccessAnimation/CheckmarkAnimation";
import Navbar from "../Modules/Navbar/Navbar";

const Status = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("status"); // Get the `status` from URL

    return (
        <div className="Status-Main page-margin">
            <Navbar />
            {status === "success" && <CheckmarkAnimation />}
            {status === "rejected" && <RejectionAnimation />}
            {!status && <p>Please provide a valid status query parameter.</p>}
        </div>
    );
};

export default Status;
