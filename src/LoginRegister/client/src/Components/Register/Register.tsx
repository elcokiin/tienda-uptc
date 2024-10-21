import { useState } from "react";
import "./Register.css";
import Axios from "axios";

//Impost assets
import logo from "../../LogginAssets/LOGO UPTC.png";
//import video from "../../LogginAssets/video.mp4";
import { Link, useNavigate } from "react-router-dom";

// Import Icons
import { MdOutlinePermIdentity } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

function Register() {
  //UseState to hold our inputs
  const [tipoDoc, setTipoDoc] = useState("");
  const [numDoc, setNumDoc] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  //Get user inits
  const createUser = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({
      tipoDoc,
      numDoc,
      nombre,
      apellido,
      email,
      direccion,
      telefono,
    });
    // Verificar que todos los campos tengan valor
    if (
      !tipoDoc ||
      !numDoc ||
      !nombre ||
      !apellido ||
      !email ||
      !direccion ||
      !telefono
    ) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }
    Axios.post("http://localhost:3002/register", {
      //create variable to send the server through the route
      UsertipoDoc: tipoDoc,
      UsernumDoc: numDoc,
      UserName: nombre,
      UserLastName: apellido,
      Email: email,
      Direccion: direccion,
      Telefono: telefono,
      Password: password,
    })
      .then((response) => {
        const username = response.data.username; 
    alert(`¡Usuario registrado exitosamente! Su nombre de usuario es: ${username}`);
        navigateTo("/");
        setTipoDoc("");
        setNumDoc("");
        setNombre("");
        setApellido("");
        setDireccion("");
        setEmail("");
        setTelefono("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error al registrar el usuario", error);
        alert("Error al registrar el usuario" + error);
      });
  };

  return (
    <div className="registerPage flex">
      <div className="containerR flex">
        {/* <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Vende Extraordinarios Productos</h2>
            <p>¡Uptc Somos Todos!</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">¿Ya tienes una cuenta?</span>
            <Link to={"/"}>
              <button className="btn">Ingresa</button>
            </Link>
          </div>
        </div> */}
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo" />
            <h3>¡Dejános conocerte!</h3>
            <div className="footerDiv flex">
              <span className="text">¿Ya tienes una cuenta?</span>
              <Link to={"/"}>
                <button className="btn">Ingresa</button>
              </Link>
            </div>
          </div>
          <p className="obligatorioText">
            Los campos con (*) son campos obligatorios.
          </p>
          <form action="" className="formR grid registerForm">
            <div className="inputDiv">
              <label htmlFor="tipo_documento">
                Tipo de Documento <span className="asterisk">*</span>
              </label>
              <div className="input flex">
                <FaAddressCard className="icon" />
                <select
                  id="tipo_documento"
                  required
                  value={tipoDoc}
                  onChange={(event) => setTipoDoc(event.target.value)}
                >
                  <option value="">
                    Selecciona un tipo de documento{" "}
                    <span className="asterisk">(*)</span>{" "}
                  </option>
                  <option value="CC">Cédula de Ciudadanía</option>
                  <option value="TI">Tarjeta de Identidad</option>
                  <option value="CE">Cédula de Extranjería</option>
                </select>
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="nombres">
                Nombres <span className="asterisk">*</span>
              </label>
              <div className="input flex">
                <IoInformationCircleSharp className="icon" />
                <input
                  type="text"
                  id="nombres"
                  placeholder="Ingresa tus nombres"
                  required
                  maxLength={50}
                  onChange={(event) => setNombre(event.target.value)}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="documento">
                Número de Documento <span className="asterisk">*</span>
              </label>
              <div className="input flex">
                <MdOutlinePermIdentity className="icon" />
                <input
                  type="number"
                  id="userdocumentNumber"
                  placeholder="Ingresa el número de documento"
                  required
                  maxLength={50}
                  onChange={(event) => {
                    setNumDoc(event.target.value);
                    console.log("Nombre:", event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="apellidos">
                Apellidos <span className="asterisk">*</span>
              </label>
              <div className="input flex">
                <IoInformationCircleSharp className="icon" />
                <input
                  type="text"
                  id="apellidos"
                  placeholder="Ingresa tus apellidos"
                  required
                  maxLength={50}
                  onChange={(event) => setApellido(event.target.value)}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="email">
                Email <span className="asterisk">*</span>
              </label>
              <div className="input flex">
                <MdEmail className="icon" />
                <input
                  type="email"
                  id="useremail"
                  placeholder="Ingresa una dirección email"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="direccion">
                Dirección <span className="asterisk">*</span>
              </label>
              <div className="input flex">
                <FaHome className="icon" />
                <input
                  type="text"
                  id="direccion"
                  placeholder="Ingresa tu dirección"
                  required
                  maxLength={50}
                  onChange={(event) => setDireccion(event.target.value)}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="telefono">
                Teléfono <span className="asterisk">*</span>
              </label>
              <div className="input flex">
                <BsFillTelephoneFill className="icon" />
                <input
                  type="number"
                  id="telefono"
                  placeholder="Ingresa tu teléfono"
                  required
                  maxLength={30}
                  onChange={(event) => setTelefono(event.target.value)}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">
                Contraseña <span className="asterisk">*</span>
              </label>
              <div className="input flex">
                <RiLockPasswordLine className="icon" />
                <input
                  type="password"
                  id="contraseña"
                  placeholder="Ingresa tu contraseña"
                  required
                  maxLength={30}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="btn flex" onClick={createUser}>
              <span>Registate</span>
              <IoPersonAddSharp className="icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
