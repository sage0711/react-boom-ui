import './boom-presale.style.css';
import BoomIntroducingPartComponent from './boom-presale-part-component';

const BoomIntroducing = () => {
    return (

        <div className="boom-introducing">
            <p className="title">$BOOM PRESALE</p>
            <div className="description">
                <BoomIntroducingPartComponent number={1} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "} />
                <BoomIntroducingPartComponent number={2} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "} />
                <BoomIntroducingPartComponent number={3} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "} />
            </div>
        </div>
    );
}

export default BoomIntroducing;