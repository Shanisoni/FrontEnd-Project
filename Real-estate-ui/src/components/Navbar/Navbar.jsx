import { useState } from "react";
import "./Navbar.scss"
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false)

    const user = true;
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>ShaniEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                {user ? (
                    <div className="user">
                        <Link to="/profile">
                            <img src="Profilephoto.jpg" alt="" />
                        </Link>
                        <span>Shani Soni</span>
                        <Link to="/profile" className="profile">
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>

                    </div>
                ) : (
                    <>
                        <a href="/">Sign in</a>
                        <a href="/" className="register">Sign up</a>
                    </>
                )}

                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />
                </div>

                <div className={open ? 'menu active' : 'menu'}>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>
        </nav>
    )
}



export default Navbar;