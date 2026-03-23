import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">

      {/* Title */}
      <h1 className="mb-3">Welcome to Notes App</h1>

      {/* Quote */}
      <p className="quote">
        “Small notes today, big success tomorrow 💡”
      </p>

      {/* Button */}
      <button
        className="btn btn-primary mt-4 px-4"
        onClick={() => navigate("/add")}
      >
        Add Note
      </button>

      {/* Image at bottom 👇 */}
      <div className="mt-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
          alt="pen paper"
          className="welcome-img"
        />

        
      </div>

    </div>
  );
}

export default Welcome;