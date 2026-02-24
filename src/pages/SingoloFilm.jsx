import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/card";

export default function SingoloFilm() {
  const [film, setFilm] = useState({});
  const [error, setError] = useState("")
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/films/${id}`)
      .then((res) => res.json())
      .then((data) => setFilm(data))
      .catch(() => {setError("Errore: film non trovato")});
  }, [id]);

  if(error) return <h1 className="text-center pt-4">{error}</h1>

  return (
    <>
      <div
        className="mx-auto pb-5"
        style={{
          background: "#0a0a0f",
          paddingTop: "1.5rem",
          maxWidth: "480px",
          width: "100%",
        }}
      >
        <Card film={film}></Card>
      </div>
    </>
  );
}