export default function Card({ film }) {
  return (
    <>
      <div
        className="card card-img my-2 border-0"
        style={{
          minHeight: "400px",
          position: "relative",
          overflow: "hidden",
          background: "#12121a",
          borderRadius: "4px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.6)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <img
          src={film.image}
          alt={film.image}
          style={{
            height: "360px",
            width: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div
          className="card-img p-1 my-2 border-0"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(10,10,15,0.97) 60%, transparent 100%)",
            padding: "1.5rem 1rem 1rem",
          }}
        >
          <ul className="list-unstyled mb-0">
            <li>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  color: "#e8b84b",
                  marginBottom: "0.3rem",
                  textTransform: "uppercase",
                }}
              >
                {film.title}
              </h3>
            </li>
            <li
              style={{
                fontSize: "0.8rem",
                color: "#7a7670",
                marginBottom: "0.25rem",
                lineHeight: 1.5,
              }}
            >
              {film.description}
            </li>
            <li
              style={{
                display: "inline-block",
                background: "#e8b84b",
                color: "#0a0a0f",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                padding: "0.1rem 0.5rem",
                borderRadius: "2px",
                marginBottom: "0.25rem",
              }}
            >
              {film.release_year}
            </li>
            <li
              style={{
                fontSize: "0.78rem",
                color: "#a07d2a",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
              }}
            >
              {film.director ? film.director.name +' '+ film.director.surname  : "sconosciuto"}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}