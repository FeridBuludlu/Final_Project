import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./register.css"; // Assuming you create a register.css file for styling

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/register", {
        username,
        email,
        password,
      });

      // Save user data to localStorage
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("token", response.data.token);

      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <div>
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
            className="input-field"
          />
        </div>

        <div>
          <button
            type="submit"
            className="submit-button"
          >
            Register
          </button>
        </div>
      </form>

      <div className="image-container">
        <img src="https://static.vecteezy.com/system/resources/previews/027/215/182/large_2x/female-model-wearing-mock-up-black-hoodie-with-a-streetwear-logo-on-the-shirt-free-photo.jpg" alt="Registration Image" className="registration-image" />
      </div>
    </div>
  );
};

export default Register;
