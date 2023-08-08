import { useQuery } from "@tanstack/react-query";
import getListUser from "../api/getListUser";
import { useNavigate } from "react-router-dom";

import "../styles/listUser.scss";
import Button from "../components/Button";

function UserView() {
  const navigate = useNavigate();

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["list"],
    queryFn: () => getListUser("/api/users"),
  });

  console.log(data?.data.data);

  return (
    <div>
      <Button />
      {isLoading && (
        <div className="containerUserList containerUserList-fixLoading">
          <div id="containerLoading">
            <div id="loading">
              <div></div>
            </div>
            <span>Đang loading</span>
          </div>
        </div>
      )}

      {!isLoading && (
        <ul className="containerUserList">
          {isSuccess &&
            data?.data.data.map((user) => (
              <li key={user.id}>
                <div className="textInfo">
                  <span>ID:{user.id}</span>
                  <span>Email: {user.email}</span>
                  <span>FirstName: {user.first_name}</span>
                  <span>LastName: {user.last_name}</span>
                </div>
                <hr />
                <div className="avatar">
                  <img src={user.avatar} alt="" />
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default UserView;
