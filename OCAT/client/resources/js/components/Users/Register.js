import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";

const Register = ({setAuth})=> {
  const { register, handleSubmit, errors, getValues } = useForm();
  
  //handle submit data
  const baseURL = "http://localhost:3000/user/register";
  const onSubmit =  async(data) => {
    console.log(data);
    try {
        //Post register information to backend server
        const response = await axios.post(baseURL, data);
        
        //store the registered user's token in localstorage
        //if Token stored successfully, can set Auth to true
        if (response.data.token){
          localStorage.setItem("token", response.data.token);
          toast.success("Registered Successfully");
          setAuth(true);
        } else{
          toast.error(response.data)
          setAuth(false);
        }
       
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
            ref={register({required: true})}
          />
         { errors.name &&  <small className="form-text text-danger">Name is Required.</small> }
        </div>
        <div className="form-group">
          <label htmlFor="email">Enter Email: </label>
          <input
            type="email"
            className="form-control"
            name="email"
            ref={register({required: true})}
          />
          { errors.email &&  <small className="form-text text-danger">Email is Required.</small> }
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter Password: </label>
          <input
            type="password"
            className="form-control"
            name="password"
            ref={register({
              required: "You must specify a password",
              minLength: {
                value: 5,
                message: "Password must have at least 5 characters"
              }
            })}
          />
          { errors.password &&  <small className="form-text text-danger">{errors.password.message}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Confirm Password: </label>
          <input
            type="password"
            className="form-control"
            name="password_repeat"
            onChange={e => {
              const value = e.target.value
              if (value !== getValues('password')) return <p>Passwords don't match</p>
          }}
            ref={register({
              validate: value =>
                value === getValues('password') || "The passwords do not match"
            })}
          />
          {errors.password_repeat && <small className ="form-text text-danger">{errors.password_repeat.message}</small>}
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}


export default Register;