import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { loginUser } from "../api/loginUser";
import "../styles/formRegister.scss";

function LoginView() {
  const duLieuCoSanTuServer = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  const [message, setMessage] = useState("");

  const loginMutation = useMutation({
    mutationFn: (body) => loginUser(body),
    onError: (err) => {
      alert(
        `Mã lỗi -- STATUS: ${err.response.status}   --ERROR: ${err.response.data.error}`
      );
      // console.log("reset form");
      // setForm(initForm);
    },
    onSuccess: (res) => setMessage(res.data.token),
  });

  const handleSubmit = (e) => {
    e.preventDefault(), loginMutation.mutate(duLieuCoSanTuServer);
  };

  // const onChangeInputForm = (e, nameInput) => {
  //   setForm((prev) => ({ ...prev, [nameInput]: e.target.value }));
  // };

  return (
    <div>
      <Button />

      <form action="" className="formStyle" onSubmit={handleSubmit}>
        <div className="formItem">
          <label htmlFor="usernameForm">Nhập Username</label>
          <input
            type="text"
            id="usernameForm"
            value={duLieuCoSanTuServer.email}
            disabled
            style={{ backgroundColor: "#ccc", cursor: "not-allowed", opacity: .5 }}
            // onChange={(e) => onChangeInputForm(e, "username")}
          />
        </div>

        <div className="formItem">
          <label htmlFor="passwordForm">Nhập Password</label>
          <input
            type="password"
            id="passwordForm"
            value={duLieuCoSanTuServer.password}
            disabled
            style={{ backgroundColor: "#ccc", cursor: "not-allowed" , opacity: .5}}

            // onChange={(e) => onChangeInputForm(e, "password")}
          />
        </div>

        <button className="buttonBack">Đăng nhập</button>
      </form>
          
          <div style={{width: 700, height: 'auto', display: 'flex', justifyContent: 'center', margin: '0 auto', minHeight: '250px'}}>
      {loginMutation.isLoading && (
        <div id="containerLoading">
         <div id="loading">
         <div></div>
         </div> 
          <span>Đang loading</span>
         </div>
      )}
      {!loginMutation.isLoading && message && (
        <p style={{ margin: "35px 0px 15px 25px", color: "green" }}>
          Đăng nhập thành công mã Token là: <span className="message">{message}</span>
        </p>
      )}
      </div>
      <div style={{ marginTop: 150 }}>
        Bạn chưa có tài khoản?{" "}
        <Link to="/register" className="buttonBack">
          Đăng kí
        </Link>
      </div>
    </div>
  );
}

export default LoginView;
