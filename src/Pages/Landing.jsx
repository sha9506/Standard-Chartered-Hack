import logo from '../Assets/logo.png';
import { useNavigate } from "react-router-dom";


const Landing = () => {

    const navigate = useNavigate();

    return (
        <div className="landing">
            <div className="landing-nav">
                <div className='navbar-landing'>
                    <img src={logo} alt="logo" className='logo' />
                </div>
            </div>

            <div className='landing-intro'>
                <div className='l-quote'>
                    From here, possibilities are everywhere
                </div>
                <div className='l-small-quote'>
                    We’re here to connect your potential to possibilities in the world’s most <br /> dynamic markets.
                </div>
                <button className='l-button' onClick={() => { navigate('/loanOption') }} >Learn How > </button>
            </div>
        </div>
    )
}
export default Landing;