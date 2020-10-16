import React, {useEffect} from "react";

const Login = ({setAuth})=> {
    useEffect(() => {
        console.log("login");
    });
    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => setAuth(true)}>Authenticate</button>
        </div>
    );
};

export default Login;

