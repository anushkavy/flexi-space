import { useState } from "react";
import loginImage from "../Images/loginImage.jpg";
import { useLocation } from "react-router-dom";
export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const location = useLocation();

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginFormData);
  }

  return (
    <div className="login-container">
      <img
        src={loginImage}
        alt="creator filming content in an aesthetic setup"
        className="login-img"
      />
      <div className="login-content">
        {(location.state?.message || null) === null ? (
          <h2>Welcome to FlexiSpace</h2>
        ) : (
          <h2>
            {location.state?.message[0]}
            <br />
            <span>{location.state?.message[1]}</span>
          </h2>
        )}

        <h4>Find the perfect setup for your next creation with FlexiSpace.</h4>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="pip@gmail.com"
            name="email"
            value={loginFormData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginFormData.password}
            onChange={handleChange}
          />
          <button className="link-button">Log in</button>
        </form>
      </div>
    </div>
  );
}
