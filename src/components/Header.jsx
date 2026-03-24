import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function Header() {

  const [query, setQuery]= useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setQuery(params.get("query") || "")
  }, [location.search])
  

  function onSubmit(e) {
    e.preventDefault();
    const q = query.trim();
    const params = new URLSearchParams(location.search);
    if (q) params.set("query", q);
    else params.delete("query");
    const search = params.toString();
    navigate(search ? `${location.pathname}?${search}` : location.pathname, { replace: false });
  }

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
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "#e8b84b" }}
            >
              Home
            </a>
          </button>
          <div className="d-flex">
            <form onSubmit={onSubmit} style={{ maxWidth: 600 }} className="d-flex px-3">
              <input
              value={query}
                type="search"
                onChange={(e)=>setQuery(e.target.value)}
                placeholder="Cerca..."
                className="form-control"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(232, 184, 75, 0.5)",
                  color: "#fff",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "3px 0 0 3px",
                  boxShadow: "none",
                }}
              />
              <button
                type="submit"
                className="btn"
                style={{
                  border: "1px solid rgba(232, 184, 75, 0.5)",
                  color: "#e8b84b",
                  background: "transparent",
                  letterSpacing: "1px",
                  fontWeight: 700,
                  padding: "0.35rem 0.9rem",
                  borderRadius: "0 3px 3px 0",
                }}
              >
                Cerca
              </button>
            </form>

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
              <a
                href="http://localhost:8080/login"
                className="text-decoration-none"
                style={{ color: "#e8b84b" }}
              >
                Login
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
