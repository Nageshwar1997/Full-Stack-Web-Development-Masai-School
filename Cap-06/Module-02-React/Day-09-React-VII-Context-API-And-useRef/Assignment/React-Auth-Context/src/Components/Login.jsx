import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Login() {
  const { login, error } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    await login(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="auth_form">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          data-testid="email"
          placeholder="Enter Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          data-testid="password"
          placeholder="Enter password"
          required
        />
        <br />
        <input type="submit" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
