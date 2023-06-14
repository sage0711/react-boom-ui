import introBoomImg from '../../assets/2.png';
import introBoomImg2 from '../../assets/3.png';
import "../../assets/fonts.css";
import "./introducing-boom.style.css";

const IntroducingBoom = () => {
    return (
        <>
        <div className="introducing-boom">
            <div className="text-area">
                <span className="title">INTRODUCING $BOOM</span>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            </div>
            <img src={introBoomImg} className="intro-boom-img"></img>
        </div>
        <div className='introducing-boom'>
            <img src={introBoomImg2} className='intro-boom-img'></img>
            <div className='text-area'>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. t</p>
            </div>
        </div>
        </>
  );
}

export default IntroducingBoom;