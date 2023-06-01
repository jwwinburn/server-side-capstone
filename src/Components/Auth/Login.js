import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();
  
  function submit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Navigate("/")
        const user = userCredential.user;
        navigate('dashboard')
        console.log(user);
      })
      .catch((error) => {
        alert("Incorrect email or password");
      });
  }
  return (
    <div>
      <form onSubmit={submit}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-thin">Login</h1>
            <br></br>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered rounded-none"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  className="input input-bordered rounded-none"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary rounded-none">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Login;
