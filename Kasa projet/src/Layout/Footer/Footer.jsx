import LogoFooter from '../assets/styles/LogoFooter.png'
import '../assets/styles/Footer.css'


function Footer() {
    return (
        <>
            <div className="footer">
                <footer>
                    <img src={LogoFooter} alt='Kasa logo' className='logoFooter'></img>
                    <p>© 2020 Kasa. All rights reserved</p>
                </footer>

            </div>


        </>
    )
}
export default Footer