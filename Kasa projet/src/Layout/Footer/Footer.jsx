import LogoFooter from '../../assets/Image/LogoFooter.png'
import '../../assets/styles/scss/layout/_footer.scss'


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