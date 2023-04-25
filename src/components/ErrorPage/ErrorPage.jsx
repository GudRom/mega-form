import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>OOpss, wrong way!</h1>
      <Link to={"/"}>Вернуться на главную</Link>
    </>
  );
};

export default ErrorPage;
