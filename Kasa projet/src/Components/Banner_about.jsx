
function Banner_about({ pictures, title }) {
    return (
        <div className='banner'>
            <img src={pictures} alt='montagne' className='banner__image'></img>
            <h1 className='banner__title'>{title}</h1>
        </div>
    );
}

export default Banner_about;
