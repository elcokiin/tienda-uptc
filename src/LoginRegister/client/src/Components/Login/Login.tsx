import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

import "../../App.css";

import logo from "../../LogginAssets/LOGO UPTC.png";
import video from "../../LogginAssets/video.mp4";

// Import Icons
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

function App() {
  //Usestate  store inputs
  const [loginusername, setloginUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const [LoginStatus, setLoginStatus] = useState("");
  const [statusHolder, setstatusHolder] = useState("message");

  const loginUser = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    Axios.post("http://localhost:3002/login", {
      //create variable to send the server through the route
      UserloginName: loginusername,
      UserPassword: password,
    })
      .then((response) => {
        console.log();

        if (response.data.message) {
          navigateTo("/");
          setLoginStatus("¡Credenciales No Existen, Registrate!");
        } else {
          navigateTo("/bill");
        }
      })
      .catch((error) => {
        console.error("Error al intentar ingresar:", error);
        setLoginStatus("Error de conexión. Inténtalo de nuevo más tarde.");
      });
  };

  useEffect(() => {
    if (LoginStatus !== "") {
      setstatusHolder("showMessage");
      setTimeout(() => {
        setstatusHolder("message");
      }, 4000);
    }
  }, [LoginStatus]);

  const onSubmit = () => {
    setloginUsername("");
    setPassword("");
  };
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h1 className="title">
              UPTC
            </h1>
            <h1 className="title1">
              🏪STORE🏪
            </h1>
            <p>¡Donde la gestión eficiente de tus facturas es tan
            simple como hacer clic!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">¿No estás registrado?</span>
            <Link to={"/register"}>
              <button className="btn">Registrate</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo" />
            <h3>¡Inicia sesión y lleva el control al
            siguiente nivel!</h3>
          </div>

          <form action="" className="form grid" onSubmit={onSubmit}>
            <span className={statusHolder}>{LoginStatus}</span>

            <div className="inputDiv">
              <label htmlFor="username">Nombre de Usuario</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Ingresa tu usuario"
                  required
                  onChange={(event) => setloginUsername(event.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Contraseña</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="username"
                  placeholder="Ingresa tu contraseña"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={loginUser}>
              <span>Ingresar</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              ¿Olvidó su contraseña? <a href="">Click aquí</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
