import logo from '../assets/logo.png'
import background from '../assets/background.png/'
import '../assets/styles/Header.css'


function Header() {

    return (
        <>
            <div className='header'>
                <img src={logo} alt='Kasa' className='Kasa-logo'></img>
                <div id='Button-header'>
                    <a href='#' className='header-button'>Accueil</a>
                    <a href='#' className='header-button'>A propos</a>
                </div>

            </div>
            <div className='sous-header'>
                <img src={background} alt='montagne' className='background-header'></img>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

        </>
    )
}
export default Header