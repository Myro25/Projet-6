import background from '../assets/Image/background.png';
import '../../src/assets/styles/scss/components/_banner.scss';

function Banner() {
    return (
        <div className='banner'>
            <img src={background} alt='montagne' className='banner__image'></img>
            <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;
