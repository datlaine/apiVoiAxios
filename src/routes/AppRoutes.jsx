import { Routes, Route } from "react-router-dom";
import MainPage from "../views/MainPage";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import UserView from "../views/UserView";
import SingleUserView from "../views/SingleUserView";
import NotFound from "../views/NotFound";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            <Routes>
              <Route path="/" element={<MainPage />}  index/>
              <Route path="/login" element={<LoginView />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="/users" element={<UserView />} />
              <Route path="/singleUser" element={<SingleUserView />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          }
        />
      </Routes>
    </div>
  );
}

export default AppRoutes;
