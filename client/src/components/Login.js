import React,{useState} from "react";
import {Redirect,Route, BrowserRouter as Router} from 'react-router-dom';
import {axiosWithAuth} from './utils/axiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login,setLogin]=useState({
    username:"",
    password:""
})

const handleChange=e=>{
    setLogin({
            ...login,
    [e.target.name]:e.target.value
})
console.log(login)
}

const handleSubmit=e=>{
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login',login)
    
    .then(res=>{
        console.log("Success",res);
        window.localStorage.setItem('token',res.data.payload)
        props.history.push('/BubblePage')
    })
    .catch(err=>{
        console.log('Something happend!',err)
    })
   
    
}

    return (
        <div>
            <h1>Welcome to the Bubble App!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="username"
                label="username"
                placeholder="username"
                value={login.username}
                onChange={handleChange} 
                className="input">
                </input>

                <input type="text"
                name="password"
                label="password"
                placeholder="password"
                value={login.password}
                onChange={handleChange}
                className="input">
                </input>

                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
