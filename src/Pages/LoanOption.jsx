import Cards from "../Modules/Cards";
import Navbar from "../Modules/Navbar";
import VideoPlayer from "../Modules/VideoPlayer/VideoPlayer";


const LoanOption = () => {
    return (
        <div className="loanOp-Main">
            <Navbar />
            <div className="loanOpt-container">
                <div className="l-opt-q1">How Loan Works?</div>
                <VideoPlayer />
                <div id="loanCard"><Cards /></div>
            </div>

        </div>
    )
}

export default LoanOption;