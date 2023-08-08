import { useState } from "react";
import { registerUser } from "../api/registerUser";
import "../styles/formRegister.scss";
import { useMutation } from "@tanstack/react-query";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function RegisterView() {
  // const initForm = {
  //   email: "",
  //   username: "",
  //   password: "",
  // };

  // const [form, setForm] = useState(initForm);

  const [message, setMessage] = useState("");

  const duLieuCoSanTuServer = {
    email: "eve.holt@reqres.in",
    password: "pistol",
  };

  const registerMutation = useMutation({
    mutationFn: (body) => registerUser(body),
    onError: (err) => {
      alert(
        `Mã lỗi --STATUS ${err.response.status}   --ERROR: ${err.response.data.error}`
      );
      setForm(initForm);
    },
    onSuccess: (res) => setMessage(res.data),
  });

  const handleSubmit = (e) => {
    // console.log(JSON.stringify(form));
    e.preventDefault(), registerMutation.mutate(duLieuCoSanTuServer);
  };

  // const onChangeInputForm = (e, nameInput) => {
  //   setForm((prev) => ({ ...prev, [nameInput]: e.target.value }));
  // };

  return (
    <div>
      <Button />
      ``
      <form action="" className="formStyle" onSubmit={handleSubmit}>
        <div className="formItem">
          <label htmlFor="emailForm">Nhập Email</label>
          <input
            type="text"
            name="email"
            id="emailForm"
            disabled
            // onChange={(e) => onChangeInputForm(e, "email")}
            style={{
              backgroundColor: "#ccc",
              cursor: "not-allowed",
              opacity: 0.5,
            }}
            value={duLieuCoSanTuServer.email}
          />
        </div>

        <div className="formItem">
          <label htmlFor="passwordForm">Nhập Password</label>
          <input
            type="password"
            id="passwordForm"
            name="password"
            disabled
            style={{
              backgroundColor: "#ccc",
              cursor: "not-allowed",
              opacity: 0.5,
            }}
            // onChange={(e) => onChangeInputForm(e, "password")}
            value={duLieuCoSanTuServer.password}
          />
        </div>

        <button className="buttonBack">Đăng kí</button>
      </form>
      <div
        style={{
          width: 700,
          height: "auto",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          minHeight: '250px'
        }}
      >
        {registerMutation.isLoading && (
          <div id="containerLoading">
            <div id="loading">
              <div></div>
            </div>
            <span>Đang loading</span>
          </div>
        )}
        {!registerMutation.isLoading && message && (
          <p style={{ margin: "35px 0px 15px 25px", color: "green" }}>
            Đăng nhập thành công với user có id là{" "}
            <span className="message">{message.id}</span> với mã token là:{" "}
            <span className="message">{message.token}</span>
          </p>
        )}
      </div>
      <div style={{ marginTop: 150 }}>
        Quay về phần{" "}
        <Link to="/login" className="buttonBack">
          Đăng nhập
        </Link>
      </div>
    </div>
  );
}

export default RegisterView;
