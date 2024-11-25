import { Marker, Popup } from "react-leaflet"
import "./pin.scss"
import { Link } from "react-router-dom"

function Pin({ item }) {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>

                <div className="popupContainer">
                    <img src={item.img} alt="" />
                    <div className="textcontainer">
                        <Link to={`/${item.id}`} >{item.title}</Link><br />
                        <span>{item.bedroom} bedrooms</span><br />
                        <b>${item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}


export default Pin