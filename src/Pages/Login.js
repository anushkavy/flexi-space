import { useState } from "react";
import loginImage from "../Images/loginImage.jpg";
import { Navigate, useLocation } from "react-router-dom";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (isLoggedIn) {
    return <Navigate to="/rentOut" replace />;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormStatus("submitting");
    async function handleLogin(formData) {
      try {
        const data = await loginUser(formData);
        localStorage.setItem("userData", JSON.stringify(data));
        setError(null);
        navigate(location.state?.path ? location.state.path : "/rentOut", {
          replace: true,
        });
        localStorage.setItem("loggedIn", true);
      } catch (err) {
        setError(err);
      } finally {
        setFormStatus("idle");
      }
    }

    handleLogin(loginFormData);
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
          {error && (
            <h6 aria-live="assertive" className="error-msg">
              {error.message}
            </h6>
          )}
          <button
            className={`link-button ${
              formStatus === "submitting" ? "btn-disabled" : ""
            }`}
            disabled={formStatus === "submitting" ? true : ""}
          >
            {formStatus === "submitting" ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
}
