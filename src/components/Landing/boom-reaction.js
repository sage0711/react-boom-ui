import "../../assets/fonts.css";
import "./boom-reaction.style.css";
import boomReactionGif from '../../assets/4.gif';

const BoomReaction = () => {
    return (
        <div className='boom-reaction'>
            <img src={boomReactionGif} className='boom-reaction-img'></img>
            <div className='board'>
                <div className="top-column">
                <span>CATEGORY</span>
                <span>TOKEN AMOUNT</span>
                <span>PERCENTAGE</span>
                </div>
                <span className="bottom-result">TOTAL :</span>
            </div>
        </div>
  );
}

export default BoomReaction;