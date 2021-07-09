import NavHandler from "./components/navHandler";
import Footer from "./components/header-footer/footer";
import Header from "./components/header-footer/header";

function App() {
  return (
    <div
      fluid
      style={{
        backgroundSize: "cover",
        backgroundColor: "linear-gradient(to bottom right, white, dark grey)",
      }}
    >
      <Header />
      <NavHandler />
      <Footer />
    </div>
  );
}

export default App;
