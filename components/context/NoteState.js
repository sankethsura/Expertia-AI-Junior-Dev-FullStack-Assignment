import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const [email, setEmail] = useState('example@gmail.com')
  const [name, setName] = useState("");
    
    return (
        <NoteContext.Provider value = {{email,setEmail,name,setName}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;