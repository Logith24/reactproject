function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div className="note-card p-3 d-flex flex-column justify-content-between h-100">
      
      {/* Text */}
      <p className="note-text">{note.text}</p>

      {/* Buttons */}
      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-sm btn-warning"
          onClick={() => onEdit(note.id)}
        >
          Edit
        </button>

        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default NoteCard;