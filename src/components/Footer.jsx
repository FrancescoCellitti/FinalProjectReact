export default function Footer({ style = {} }) {
  return (
    <footer
      className="text-center py-4 mt-5"
      style={{
        ...style,
        background: "#12121a",
        borderTop: "1px solid rgba(232, 184, 75, 0.15)",
        color: "#7a7670",
      }}
    >
      <div className="container">
        <p
          className="mb-1"
          style={{
            color: "#e8e4dc",
            letterSpacing: "2px",
            fontWeight: 700,
            fontSize: "0.95rem",
            textTransform: "uppercase",
          }}
        >
          Final Project Films &copy; {new Date().getFullYear()}
        </p>
        <p
          className="mb-0 small"
          style={{
            color: "#7a7670",
            letterSpacing: "1px",
          }}
        >
          Created by Francesco
        </p>
      </div>
    </footer>
  );
}