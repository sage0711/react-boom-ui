import logo from '../../assets/logo.png'    
import telegram from '../../assets/telegram.png'
import twitter from '../../assets/twitter.png'
import "./header.style.css";

const Header = () => {

    return (
        <div className='landing-header'>
            <div className="pack">
                <div className="logo-container">
                    <img src={logo} className='logo' />
                </div>
                <div className="btn-grp">
                    <span className='link-item'><a href="#">PRESALE</a></span>
                    <span className='link-item'><a href="#">INFO</a></span>
                    <span className='link-item'><a href="#">TOKENOMICS</a></span>
                    <img src={twitter} className="twitter" />
                    <img src={telegram} className="telegram" />
                </div>
            </div>
        </div>
    );
}

export default Header;