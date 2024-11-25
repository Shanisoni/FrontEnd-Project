import "./profileUpdatePage.scss";
import { Link } from "react-router-dom";

function ProfileUpdatePage() {
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <Link to="/profile">
            <button>Update</button>
          </Link>

        </form>
      </div>
      <div className="sideContainer">
        <img src="Profilephoto.jpg" alt="" className="avatar" />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;