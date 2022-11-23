import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import useLoginStore from "../stores/login";

const LoginForm = () => {
  const navigate = useNavigate();
  const login = useLoginStore((state) => state.login);
  const schema = yup.object().shape({
    email: yup.string().min(5).max(255).required().email(),
    password: yup.string().min(5).max(255).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitHandler = (data) => {
    login(data);
    navigate("/genres");
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        style={{ margin: "0 auto", width: "800px" }}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="form-control"
          ></input>
          <p>{errors.email?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="form-control"
          ></input>
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
