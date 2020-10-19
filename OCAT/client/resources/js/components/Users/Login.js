import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';

//import { sendUser } from "../../../../../server/libs/UserService";
//import registerUser from "../../../../../server/libs/UserService/index";


const Login = ({setAuth})=> {
  const { register, handleSubmit, control } = useForm();
  
  //handle submit data
  const baseURL = "http://localhost:3000/user/";
  const onSubmit =  async(data) => {
    console.log(data);
    try {
        
        const response = await axios.post(baseURL, data);
        
        console.log(response.data);
        //store the token in the browser
        

        if (response.data.token){
            localStorage.setItem("token", response.data.token);
            setAuth(true);
        }else{
            setAuth(false);
        }
        
      } catch (err) {
        console.log(err);
      }
  };

  return (
    <div>
      <h1 className="text-center">Login User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}


export default Login;
