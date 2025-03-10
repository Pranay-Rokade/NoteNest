import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  
  // Get all notes
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiZjM4MDliYzk3MTU5OTE4YzI0YmI2In0sImlhdCI6MTc0MDkxNzIwNH0.RjXd9wvhp5EDDXMoUu4iu19FT91mMI0LuAjdjowyYqA"
      }      
    });
    const json = await response.json();
    setNotes(json);
  }

  // Add a note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiZjM4MDliYzk3MTU5OTE4YzI0YmI2In0sImlhdCI6MTc0MDkxNzIwNH0.RjXd9wvhp5EDDXMoUu4iu19FT91mMI0LuAjdjowyYqA"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();

    // Logic to add a note in UI
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
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiZjM4MDliYzk3MTU5OTE4YzI0YmI2In0sImlhdCI6MTc0MDkxNzIwNH0.RjXd9wvhp5EDDXMoUu4iu19FT91mMI0LuAjdjowyYqA"
      }
    });
    const json = await response.json();

    // Logic to delete a note in UI
    const newNotes = notes.filter((note)=>{return note._id!==id});
    setNotes(newNotes);
  }

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiZjM4MDliYzk3MTU5OTE4YzI0YmI2In0sImlhdCI6MTc0MDkxNzIwNH0.RjXd9wvhp5EDDXMoUu4iu19FT91mMI0LuAjdjowyYqA"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();

    // Logic to edit a note in UI
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id === id){
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;