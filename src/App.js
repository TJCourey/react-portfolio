import NavHandler from "./components/navHandler";
import Footer from "./components/header-footer/footer";
import Header from "./components/header-footer/header";

function App() {
  return (
    <div
      style={{
        background: " rgb(204,204,205)",
        background:
          "linear-gradient(180deg, rgba(204,204,205,1) 0%, rgba(159,159,166,1) 35%, rgba(77,78,78,1) 100%)",
        paddingBottom: "2rem",
      }}
    >
      <Header />
      <NavHandler />
      <Footer />
    </div>
  );
}

export default App;
