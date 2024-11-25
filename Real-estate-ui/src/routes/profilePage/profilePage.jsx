import { Link } from "react-router-dom"
import Chat from "../../components/chat/chat"
import List from "../../components/list/list"
import "./profilePage.scss"

function ProfilePage() {
    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <Link to="/profileUpdate" className="profile">
                            <button >Update Profile</button>
                        </Link>

                    </div>
                    <div className="info">
                        <span>
                            Avatar:
                            <img src="Profilephoto.jpg" alt="" />
                        </span>
                        <span>Username: <b>Nishchal Sachan</b></span>
                        <span>E-mail: <b>sachannishchal@gmail.com</b></span>
                    </div>

                    <div className="title">
                        <h1>My List</h1>
                        <Link to="/new">
                            <button>Create New Post</button>
                        </Link>
                    </div>
                    <List />

                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage