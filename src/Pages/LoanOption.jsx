import Cards from "../Modules/Cards";
import VideoPlayer from "../Modules/VideoPlayer/VideoPlayer";
import Navbar from "../Modules/Navbar/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Camera from "../Modules/Camera/Camera";




const LoanOption = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("a"); // Get the `status` from URL
    useEffect(() => {
        if (status == 'b') {
            const loanCard = document.getElementById("loanCard");
            if (loanCard) {
                loanCard.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, []);



    return (
        <div className="loanOp-Main">
            <Navbar />
            <Camera />
            <div className="loanOpt-container">
                <div className="l-opt-q1">How this process <span className="loan-selected-green"> works?</span></div>
                <VideoPlayer />


                <div id="loanCard"><Cards /></div>
            </div>

        </div>
    )
}

export default LoanOption;