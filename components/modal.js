import React from "react";

//--Modal is created to show Error message 'Daily Limit Exceeded'--

const Modal = ({ setShowModal }) => {
  return (
    <div className="w-[100vw] h-[100vh] fixed bg-white/70 flex justify-center items-center">
      <section className="p-7 border-[0.5px] border-gray-800 bg-white rounded-md flex flex-col items-center justify-center">
        <div className="text-red-500">Daily Limit Exceeded</div>
        <button onClick={()=>setShowModal(false)} className="w-full bg-black flex justify-center text-white py-2 text-xs font-light rounded-md my-3">
          close
        </button>
      </section>
    </div>
  );
};

export default Modal;
