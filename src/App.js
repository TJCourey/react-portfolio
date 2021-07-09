import NavHandler from "./components/navHandler";
import Footer from "./components/header-footer/footer";
import Header from "./components/header-footer/header";

function App() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom right, white, dark grey)",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <NavHandler />
      <Footer />
    </div>
  );
}

export default App;
