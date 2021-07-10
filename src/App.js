import NavHandler from "./components/navHandler";
import Footer from "./components/header-footer/footer";
import Header from "./components/header-footer/header";

function App() {
  return (
    <div fluid style={{ backgroundImage: "url(../images/greyBackground.png)" }}>
      <Header />
      <NavHandler />
      <Footer />
    </div>
  );
}

export default App;
