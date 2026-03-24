import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Card from "../components/card";

export default function Home() {
  const [films, setFilms] = useState([]);
  const [filteredfilms, setFilteredFilms] = useState([]);
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("query") || "").trim();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/films` + (query ? `?query=${encodeURIComponent(query)}` : ""))
      .then((res) => res.json())
      .then((data) => {
        const list = data || []
        setFilms(data);
        setFilteredFilms(applyFilter(list, query.toLowerCase()));
      })
      .catch((error) => console.error(error));
  }, [query]);

  useEffect(() => {
    setFilteredFilms(applyFilter(films, query.toLowerCase()));
  }, [films, query]);

  function applyFilter(list, qLower) {
    if (!qLower) return list;
    return list.filter((film) => (film.title || "").toLowerCase().includes(qLower));
  }

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
        {filteredfilms.length === 0 ? (
          <div>Nessun Film Trovato</div>
        ) : (
          <div className="row">
            {filteredfilms.map((film) => (
              <div className="col-lg-4 col-md-3 col-sm-6" key={film.id}>
                <Link to={`/film/${film.id}`} className="text-decoration-none">
                  <Card film={film}></Card>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
