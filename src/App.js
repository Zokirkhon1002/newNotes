import React, { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Hello! This is first note! Zokirkhon!",
      date: "2022/01/15",
      isLike: true,
    },
    {
      id: nanoid(),
      text: "Hello! This is second note! Zokirkhon!",
      date: "2022/01/16",
      isLike: true,
    },
    {
      id: nanoid(),
      text: "Hello! This is third note! Zokirkhon!",
      date: "2022/01/17",
      isLike: false,
    },
    {
      id: nanoid(),
      text: "Hello! This is fourth note! Zokirkhon!",
      date: "2022/01/18",
      isLike: false,
    },
  ]);

  const handleAddNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
      isLike: false,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const isLike = (isLikeProp = false, id) => {
    let index = notes.findIndex((note) => note.id === id);
    let newNotes = [...notes];
    newNotes[index].isLike = isLikeProp;
    setNotes(newNotes);
  };

  const [searchText, setSearchText] = useState("");
  const [dark, setDark] = useState(false);

  let darkMode = dark ? "dark" : "";

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if(savedNotes){
      setNotes(savedNotes)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={darkMode}>
      <div className="container">
        <Header isDarkMode={setDark} dark={dark} />
        <Search search={setSearchText} />
        <NotesList
          notes={notes.filter(
            ({ text, date, isLike }) =>
              `${isLike}`.includes(searchText.toLowerCase()) ||
              text.toLowerCase().includes(searchText.toLowerCase()) ||
              date.includes(searchText)
          )}
          handleAddNote={handleAddNote}
          deleteNote={deleteNote}
          isLike={isLike}
        />
      </div>
    </div>
  );
}

export default App;
