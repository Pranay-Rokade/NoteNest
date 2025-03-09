import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [

    {
      "_id": "614b4f3d2f0d7e0c1c6e7c5b",
      "user": "614b4f3d2f0d7e0c1c6e7c5a",
      "title": "My first note",
      "description": "This is my first note",
      "tag": "personal",
      "date": "2021-09-22T19:30:21.000Z",
      "__v": 0
    },
    {
      "_id": "614b4f3d2f0d7e0c1c6e7c5c",
      "user": "614b4f3d2f0d7e0c1c6e7c5a",
      "title": "My second note",
      "description": "This is my second note",
      "tag": "personal",
      "date": "2021-09-22T19:30:21.000Z",
      "__v": 0
    },
    {
      "_id": "614b4f3d2f0d7e0c1c6e7c5d",
      "user": "614b4f3d2f0d7e0c1c6e7c5a",
      "title": "My third note",
      "description": "This is my third note",
      "tag": "personal",
      "date": "2021-09-22T19:30:21.000Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)

  // Add a note
  const addNote = (title, description, tag) => {
    // API call
    const note = {
        "_id": "614b4f3d2f0d790c1c6e7c5b",
        "user": "614b4f3d2f0d7e0c1c6e7c5a",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2021-09-22T19:30:21.000Z",
        "__v": 0
      };
    setNotes(notes.concat(note))
  }

  // Delete a note
  const deleteNote = (id) => {
    // API call
  }

  // Edit a note
  const editNote = (id, title, description, tag) => {
    // API call
  }

  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;