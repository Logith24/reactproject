import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNote({ notes, setNotes }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleDone = () => {
    if (text.trim() === "") return;
    setNotes([...notes, { id: Date.now(), text }]);
    navigate("/home");
  };

  return (
    <div className="container mt-5">
      <h2>Add Note</h2>

      <textarea
        className="form-control mt-3"
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mt-3">
        <button className="btn btn-success me-2" onClick={handleDone}>
          Done
        </button>

        <button className="btn btn-danger" onClick={() => navigate("/")}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddNote;