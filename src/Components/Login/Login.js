import { useState } from "react";

const Login = () => {
  const user = {
    username: "",
    password: "",
  };

  const [state, setState] = useState();

  const handleChange = (element, type) => {
    if (type === "username") {
      user.username = element.target.value;
    } else {
      user.password = element.target.value;
    }
    setState("NuevoVideo");
  };

  return (
    <div className="login-page">
      <div className="login-text"></div>
      <form className="login-form">
        <input
          className="login-username"
          type="text"
          placeholder="username"
          onChange={(e) => handleChange(e, "username")}
        />
        <input
          type="text"
          placeholder="password"
          className="login-password"
          onChange={(e) => handleChange(e, "password")}
        />
        {state}
        <input className="login-submit" type="submit" value="Login" />
      </form>
    </div>
  );
};
export default Login;
