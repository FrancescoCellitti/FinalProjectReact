export default function Header() {
  return (
    <div
      className="container-fluid"
      style={{
        background: "rgba(10, 10, 15, 0.95)",
        borderBottom: "1px solid rgba(232, 184, 75, 0.2)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-2">
          <button
            className="btn my-2 my-sm-0"
            style={{
              border: "1px solid rgba(232, 184, 75, 0.5)",
              color: "#e8b84b",
              background: "transparent",
              letterSpacing: "2px",
              fontWeight: 700,
              fontSize: "0.85rem",
              padding: "0.35rem 1.2rem",
              borderRadius: "3px",
            }}
          >
            <a href="/" className="text-decoration-none" style={{ color: "#e8b84b" }}>
              Home
            </a>
          </button>

          <button
            className="btn my-2 my-sm-0"
            type="submit"
            style={{
              border: "1px solid rgba(232, 184, 75, 0.5)",
              color: "#e8b84b",
              background: "transparent",
              letterSpacing: "2px",
              fontWeight: 700,
              fontSize: "0.85rem",
              padding: "0.35rem 1.2rem",
              borderRadius: "3px",
            }}
          >
            <a href="http://localhost:8080/login" className="text-decoration-none" style={{ color: "#e8b84b" }}>
              Login
            </a>
            
          </button>
        </div>
      </div>
    </div>
  );
}