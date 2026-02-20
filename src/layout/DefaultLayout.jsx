import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";

export default function DefaultLayout() {
  const Location = useLocation();
  const isFilmDetails = location.pathname.startsWith("/film/");
  return (
    <>
      <Header></Header>
      
        <Outlet></Outlet>

      <Footer style={
          isFilmDetails
            ? {
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 50,
              }
            : {}
        }></Footer>
    </>
  );
}
