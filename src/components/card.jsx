


export default function Card({ film }) {
  return (
    <>
    
        <div
          className="card card-img my-2 border-0"
          style={{
            minHeight: "400px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={film.image}
            alt={film.image}
            style={{
              height: "518px",
            }}
          />
          

          <div className="card-info card-img p-1 my-2 border-0">
            <ul className="list-unstyled">
              <li>
                <h3>{film.title}</h3>
              </li>
              <li>{film.description}</li>
              <li>{film.release_year}</li>
              <li>{film.director ? film.director.name : "sconosciuto"}</li>
            </ul>
          </div>
      </div>
    </>
  );
}
