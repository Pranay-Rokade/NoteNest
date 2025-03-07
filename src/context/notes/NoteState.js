import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const s1 = {
    "name": "Pranay",
    "class": "5th",
  }
  const[state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        "name": "Rokade",
        "class": "5th",
      })
  }, 2000);
  }
  return (
    <NoteContext.Provider value={{state, update}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;