function Login() {
  return (
    <form>
      <h3>Sistema de Solicitação</h3>

      <div className="form-group">
        <label>Login</label>
        <input
          type="email"
          className="form-control"
          placeholder="Digite seu Login"
        />
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input
          type="password"
          className="form-control"
          placeholder="Digite sua senha"
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

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Login
      </button>
      {/* <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p> */}
    </form>
  );
}

export default Login;
