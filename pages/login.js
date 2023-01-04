import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";
import { auth } from "../components/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import noteContext from "../components/context/noteContext";

const Login = (props) => {
  //--taking state from context API--
  const user = useContext(noteContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  //--Declaring required states--
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const route = useRouter();

  //---Function connecting firebase to login ---
  const handleLogIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, user.email, password);
      console.log("user logged in ", user.email);
      route.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center font-thin md:h-[100vh] my-10 md:my-0  w-[80vw] m-auto">
      {/* Login Form Page */}
      <section className="w-[500px] p-7 border-[0.5px] border-[#878787] rounded-md">
        <span className="text-red-600 ">{error && error}</span>
        <h1 className="font-extralight text-xl">Welcome!</h1>
        <div className="py-6">
          <h1 className="font-medium text-2xl">Sign in to</h1>
          <p className="font-light text-xs">Lorem ipsum is Simple</p>
        </div>
        <form className="flex flex-col">
          <label className="text-xs font-normal py-2">Email</label>
          <input
            onChange={() => user.setEmail(() => emailRef.current.value)}
            ref={emailRef}
            placeholder="Example@gmail.com "
            className="border-[0.6px] text-xs p-3 border-[#282828] rounded-md"
          />
          <label className="text-xs font-normal py-2 mt-5">Password</label>
          <div className="w-full flex justify-between items-center border-[0.6px] text-xs  border-[#282828] rounded-md">
            <input
              onChange={() => setPassword(() => passwordRef.current.value)}
              ref={passwordRef}
              type={passwordShow ? "" : "password"}
              placeholder="Enter your Password "
              className="w-[93%] p-3 rounded-md"
            />
            <span
              className="px-3 scale-125"
              onClick={() => setPasswordShow((e) => !e)}
            >
              {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
        </form>
        <div className="flex items-center justify-between py-3">
          <section className="items-center justify-center flex">
            <input type="checkbox" />
            <span className="text-xs ml-2">Remember Me</span>
          </section>
          <section>
            <span className="text-xs">Forgot Password?</span>
          </section>
        </div>
        <button
          onClick={handleLogIn}
          className="w-full bg-black flex justify-center text-white py-3 text-sm font-light rounded-md my-3"
        >
          {" "}
          Login
        </button>
        <div className="flex justify-center w-full text-sm mt-10">
          <span>Don't have an account ? </span>
          <span
            onClick={() => route.push("/register")}
            className="font-medium ml-1 cursor-pointer"
          >
            Register
          </span>
        </div>
      </section>

      <section className="w-[420px] ml-24 hidden md:flex">
        <img src="https://firebasestorage.googleapis.com/v0/b/expertia-assignment.appspot.com/o/Screenshot%202023-01-02%20at%205.34.01%20PM.png?alt=media&token=c7d9c6a3-8da3-46e4-94ef-01cd92921528" />
      </section>
    </div>
  );
};

export default Login;
