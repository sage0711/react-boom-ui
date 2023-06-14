import '../../assets/fonts.css'
import png1 from '../../assets/1.png';
import './splash.style.css';

const Splash = () => {

    return (
        <div className="landing-splash">
            <div className="splash-image-container">
                <img src={png1} className='splash-image' />
            </div>
            <div className='splash-nav'>
                <span className="boom-text">$BOOM</span>
                <div className="btn-grp">
                    <button className="btn-item">PRESALE</button>
                    <button className="btn-item">INFO</button>
                    <button className="btn-item">TOKENOMICS</button>
                </div>
            </div>
        </div>
    );
}

export default Splash;