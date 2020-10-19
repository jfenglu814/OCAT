import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';
//import { sendUser } from "../../../../../server/libs/UserService";

//import registerUser from "../../../../../server/libs/UserService/index";


const Register = ({setAuth})=> {
  const { register, handleSubmit, control } = useForm();
  
  //handle submit data
  const baseURL = "http://localhost:3000/user/register";
  const onSubmit =  async(data) => {
    console.log(data);
    try {
        
        const response = await axios.post(baseURL, data);
        
        console.log(response.data);
        //store the token in the browser
        localStorage.setItem("token", response.data.token);
        setAuth(true);
      } catch (err) {
        console.log(err);
      }
  };

  return (
    <div>
      <h1 className="text-center">Register User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="Name">Enter Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Enter Email: </label>
          <input
            type="email"
            className="form-control"
            name="email"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter Password: </label>
          <input
            type="password"
            className="form-control"
            name="password"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Confirm Password: </label>
          <input
            type="password"
            className="form-control"
            name="confirm Password"
            //ref={register}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}


export default Register;