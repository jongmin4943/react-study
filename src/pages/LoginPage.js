import React from "react";
import Login from "../components/login/Login";

const LoginPage = ({ match }) => {
  console.log(vc  match.params.id);
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
