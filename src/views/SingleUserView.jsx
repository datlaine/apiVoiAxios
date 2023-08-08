import { useQuery } from "@tanstack/react-query";
import "../styles/singleUser.scss";
import { getUserWithId } from "../api/getUserWithId";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function SingleUserView() {
  const [idUser, setIdUser] = useState();
  const navigate = useNavigate();

  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ["id", , idUser],
    queryFn: () => getUserWithId(`/api/users/${idUser}`),
    retry: 3,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(isSuccess && data.data.data.id);

  return (
    <div className="containerSingleUser">
      <form onSubmit={handleSubmit}>
        <label htmlFor="idUser">Nhập ID user cần tìm</label>
        <input
          type="text"
          id="idUser"
          onChange={(e) => setIdUser(e.target.value)}
          value={idUser}
        />
        <button
          className="buttonBack"
          type="submit"
          style={{ marginBottom: 10 }}
        >
          Tìm
        </button>
      </form>
      {isSuccess && (
        <>
          <h3 style={{ color: "rgb(204,20,198)", marginBottom: 10 }}>
            Thông tin Info - User
          </h3>
          <div className="textInfo">
            <span>ID:{data.data.data.id}</span>
            <span>Email: {data.data.data.email}</span>
            <span>FirstName: {data.data.data.first_name}</span>
            <span>LastName: {data.data.data.last_name}</span>
          </div>
          <hr />
          <div className="avatar">
            <img src={data.data.data.avatar} alt="" />
          </div>
        </>
      )}
      {idUser !== undefined && isLoading && (
        <div>
          <div id="containerLoading">
            <div id="loading">
              <div></div>
            </div>
            <span>Đang loading</span>
          </div>
        </div>
      )}
      {idUser !== undefined && isError && (
        <p style={{ color: "red", fontWeight: 900 }}>
          Không tìm thấy thông tin
        </p>
      )}
      <div className="positionButton">
        <Button />
      </div>
    </div>
  );
}

export default SingleUserView;
