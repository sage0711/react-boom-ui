import '../../assets/fonts.css';
import Header from './header';
import Splash from './splash';
import BoomPresale from './boom-presale';
import IntroducingBoom from './introducing-boom';
import BoomReaction from './boom-reaction';

const Landing = () => {
    return (
        <>
            <Header />
            <Splash />
            <BoomPresale />
            <IntroducingBoom />
            <BoomReaction />
        </>
    );
}

export default Landing;