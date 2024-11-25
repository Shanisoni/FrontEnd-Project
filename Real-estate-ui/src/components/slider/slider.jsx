import { useState } from "react"
import "./slider.scss"

function Slider({ images }) {
    const [imageIndex, setimageIndex] = useState(null);

    const changeSlide = (direction) => {
        if (direction == "left") {
            if (imageIndex == 0) {
                setimageIndex(images.length - 1);
            } else {
                setimageIndex(imageIndex - 1);
            }
        } else {
            if (imageIndex === images.length - 1) {
                setimageIndex(0);
            } else {
                setimageIndex(imageIndex + 1);
            }
        }
    }

    return (
        <div className="slider">
            {imageIndex !== null && (
                <div className="fullSlider">
                    <div className="arrow" onClick={() => changeSlide("left")}>
                        <img src="arrow.png" alt="" />
                    </div>

                    <div className="imgContainer">
                        <img src={images[imageIndex]} alt="" />
                    </div>

                    <div className="arrow" onClick={() => changeSlide("left")}>
                        <img src="arrow.png" alt="" className="right" />
                    </div>
                    <div className="close" onClick={() => setimageIndex(null)}>X</div>
                </div>
            )}
            <div className="bigImg">
                <img src={images[0]} alt="" onClick={() => setimageIndex(0)} />
            </div>
            <div className="smallImg">
                {images.slice(1).map((image, index) => (
                    <img src={image} key={index} onClick={() => setimageIndex(index + 1)} />
                ))}
            </div>
        </div>
    )
}

export default Slider