import { useEffect, useState } from "react";

import React from "react";
import { useDispatch } from "react-redux";
import { loginUserApi } from "../../redux/action/authAction";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const payload = { name: name, password: password };

  let dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserApi(payload));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
