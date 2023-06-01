import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'

function Register() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  

const auth = getAuth();
function submit(e) {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Navigate("/")
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      alert("Incorrect email or password");
    });
}

  return (
    <div>
      <form onSubmit={submit}>
      <div className="hero min-h-screen bg-base-200 rounded-none">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-thin font-Poppins">Register</h1>
            <p className="py-6  font-Poppins">
              Take the first step in simplifying your life with @aGlance
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered rounded-none"
                  onChange={(evt) => setFirstName(evt.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered rounded-none"
                  onChange={(evt) => setLastName(evt.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input
                  type="text"
                  placeholder="E-mail"
                  className="input input-bordered rounded-none"
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  className="input input-bordered rounded-none"
                  onChange={(evt) => setPassword(evt.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary rounded-none">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Register
