import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="headerCo">
        <div className="left">
          <div className="leftCo">
            <h2>Build an impressive cv or resume with no expenses</h2>
            <p>
              Generate your cv or resume seamlessly using our no-cost builder
              and expert guidelines
            </p>
          </div>

          <div className="leftContainer">
            <Link to="/resume">
              <button>Go to my cv or resume</button>
            </Link>

            <button>Create new cv or resume</button>
          </div>
        </div>
        <div className="right">
          <img
            src="https://images.pexels.com/photos/5989924/pexels-photo-5989924.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="resume"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
