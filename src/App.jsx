import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import TituloPrincipal from "./components/TituloPrincipal";
import Footer from "./components/Footer";
import TituloNoticias from "./components/TituloNoticias";
import "./App.css";

function App() {
  return (
    <>
      <Container className="my-2 mainPage">
        <TituloPrincipal></TituloPrincipal>
        <TituloNoticias/>
      </Container>
      <Footer />
    </>
  );
}

export default App;