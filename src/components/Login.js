import React, { useState } from "react";
import axios from "axios";

import useForm from "./useForm";

export default function Login(props) {
  const { values, handleChange, handleSubmit } = useForm(
    { username: "", password: "" },
    submitLogin
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function submitLogin() {
    setError(false);
    setLoading(true);
    axios
      .post("http://localhost:8080/login", values, { withCredentials: true })
      .then((resp) => {
        axios.defaults.headers.common[
          "Authorization"
        ] = `${resp.headers.authorization}`;
        sessionStorage.setItem("sstoken", `${resp.headers.authorization}`);
        props.setAuthenticated(true);
        setLoading(false);
        props.history.push("/");
      })
      .catch((error) => {
        setError("Erro Autenticação");
        console.log(error.response);
        setLoading(false);
      })
      .finally(() => {});
  }

  function validateForm() {
    return values.username.length > 0 && values.password.length > 0;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sistema de Solicitação</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="form-group">
        <label>Login</label>
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="Digite seu Login"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Digite sua senha"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Lembre me
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-dark btn-lg btn-block"
        disabled={!validateForm() || loading}
      >
        Login
      </button>
      {/* <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p> */}
    </form>
  );
}
