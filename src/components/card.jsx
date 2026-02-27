export default function Card({ film }) {
  return (
    <>
      <div
        className="card my-2 border-0"
        style={{
          height: "400px",
          position: "relative",
          overflow: "hidden",
          background: "#12121a",
          borderRadius: "4px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.6)",
        }}
      >

        <div className="card-body h-100 d-flex flex-column justify-content-center align-items-center text-center p-2">
          <ul className="list-unstyled mb-0 ">
            <li>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  
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