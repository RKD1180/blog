import "./App.css";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Search />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
