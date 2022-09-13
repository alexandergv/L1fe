function Register() {
  return (
    <div className="registerPage-container">
      <div className="register-text"></div>
      <form className="login-form">
        <input
          className="register-username"
          type="text"
          placeholder="username"
        />
        <input
          type="text"
          placeholder="password"
          className="register-password"
        />
        <input className="register-submit" type="submit" value="register" />
      </form>
    </div>
  );
}

export default Register;
