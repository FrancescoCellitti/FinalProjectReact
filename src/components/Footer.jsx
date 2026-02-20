export default function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-5">
            <div className="container">
                <p className="mb-1">Final Project Films &copy; {new Date().getFullYear()}</p>
                <p className="mb-0 small">Created by Francesco</p>
            </div>
        </footer>
    );
}