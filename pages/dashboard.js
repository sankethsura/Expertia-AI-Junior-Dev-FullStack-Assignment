import React from "react";
import { BsDot } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useRef } from "react";
import noteContext from "../components/context/noteContext";
import { useContext } from "react";
import { auth } from "../components/firebase";
import { signOut } from "firebase/auth";
import Date1 from "../components/date";
import { useRouter } from "next/router";
import Modal from "../components/modal";
const Dashboard = (props) => {
  const route = useRouter();

  //--taking state from context API--
  const user = useContext(noteContext);

  //--Declaring required state--
  let [tasks, setTasks] = useState([]);
  let [showModal, setShowModal] = useState(false);

  let inputRef = useRef();

  //--Function to check the app can add tasks or not--
  const handleAddTasks = () => {
    if (tasks.length < 5) {
      setTasks((e) => [...e, inputRef.current.value]);
    } else {
      setShowModal(true);
    }
  };

  //--after each task input field is cleared and focused--
  useEffect(() => {
    // user.setName(()=>localStorage.getItem('name'))
    console.log(user.name,"inside dashboard")
    inputRef.current.value = "";
    inputRef.current.focus();
  }, [tasks]);

  //--Function connecting firebase to logout --
  function handleLogOut() {
    signOut(auth)
      .then(() => {
        console.log("logout successful");
        localStorage.clear()
        route.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="md:h-[100vh] w-[80vw] mt-10 md:mt-0 flex justify-center items-center m-auto">
      {/* ---Error Message is Displayed in Modal--- */}
      {showModal ? <Modal setShowModal={setShowModal} /> : ""}
      {/* {window.localStorage.getItem('name')&&window.localStorage.getItem('name')} */}
      <div className="w-[450px] h-[80vh] border-[0.5px] border-gray-500 flex m-auto justify-between items-start rounded-md flex-col p-5">
        <section>
          <h1 className="text-lg font-light">Hello</h1>
          <h1 className="text-2xl font-medium py-4">
            {user.name ? user.name.toUpperCase() : "User"}
          </h1>
          <span className="text-sm">Good to see you here!</span>
          <Date1 />
          {tasks.map((e, i) => {
            return (
              <div key={i} className="flex justify-start items-center text-sm">
                
                <li className="">{ e}</li>
              </div>
            );
          })}
        </section>
        <section className="flex flex-col w-full items-center">
          <input
            type="text"
            ref={inputRef}
            className="p-3 text-sm border-[0.5px] w-full border-black rounded-md my-2"
            placeholder="Eg : Need to finish my assignment"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddTasks();
              }
            }}
          />
          <button
            onClick={handleAddTasks}
            className="w-full bg-black flex justify-center text-white py-3 text-sm font-light rounded-md my-1"
          >
            Add new Task
          </button>
          <button onClick={handleLogOut} className="font-medium text-sm my-3">
            Logout
          </button>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
