import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteCard from "./NoteCard";

function Home({ notes, setNotes }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Delete
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Edit
  const handleEdit = (id) => {
    const newText = prompt("Edit your note:");
    if (newText) {
      setNotes(
        notes.map((note) =>
          note.id === id ? { ...note, text: newText } : note
        )
      );
    }
  };

  // Filter
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">

      {/* 🔥 Top Bar */}
      <div className="d-flex justify-content-between align-items-center">
        <h2>Your Notes</h2>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/add")}
        >
          Add Note
        </button>
      </div>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search..."
        className="form-control mt-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🧩 Grid */}
      <div className="row mt-4">
        {filteredNotes.map((note) => (
          <div className="col-md-4 col-sm-6 mb-4" key={note.id}>
            <NoteCard
              note={note}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;