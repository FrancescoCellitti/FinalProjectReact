export default function Header() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between my-2">
        <button className="btn btn-outline-secondary my-2 my-sm-0">
          <a href="/" className="text-decoration-none text-reset">
            Home
          </a>
        </button>
        <button
          className="btn btn-outline-secondary my-2 my-sm-0"
          type="submit"
        >
          Login
        </button>
      </div>
    </div>
  );
}
