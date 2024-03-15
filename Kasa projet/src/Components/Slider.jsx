import { useState } from "react";


const Slider = ({ pictures }) => {

    const [index, setindex] = useState(0);
    console.log(pictures)
    return (

        <div>

            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {pictures.map((picture, index) => (
                    <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${picture})` }}></div>

                ))}
            </div>

        </div>


    )
}

export default Slider;