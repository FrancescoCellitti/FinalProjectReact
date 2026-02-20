import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/films`)
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div
        className="container"
        style={{
          minHeight: "100vh",
          background: "#0a0a0f",
          paddingTop: "2rem",
          paddingBottom: "3rem",
        }}
      >
        <div className="row dfle">
          {films.map((film) => (
            <div className="col-lg-4 col-md-3 col-sm-6" key={film.id}>
              <Link to={`/film/${film.id}`} className="text-decoration-none">
                <Card film={film}></Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}