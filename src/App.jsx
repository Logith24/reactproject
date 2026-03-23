import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import AddNote from "./AddNote";
import Home from "./Home";
import { useState, useEffect } from "react";

function App() {

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/add" element={<AddNote notes={notes} setNotes={setNotes} />} />
        <Route path="/home" element={<Home notes={notes} setNotes={setNotes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;