import { Link } from "react-router-dom";
import "../styles/mainPage.scss";

function MainPage() {
  return (
    <div className="containerMainPage">
      <Link to="login" className="buttonBack">
        LoginAPI
      </Link>
      <Link to="register" className="buttonBack">
        RegisterAPI
      </Link>
      <Link to="users" className="buttonBack">
        UserAPI
      </Link>
      <Link to="singleUser" className="buttonBack">
        SingleUserAPI
      </Link>
    </div>
  );
}

export default MainPage;
