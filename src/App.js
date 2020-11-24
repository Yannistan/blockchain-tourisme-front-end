import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import IsLoggedInContextProvider from "./context/IsLoggedInContext";

import "./css/styles.css";

function App() {
  return (
    <>
      <IsLoggedInContextProvider>
        <Header />
        <Home />
        <Footer />
      </IsLoggedInContextProvider>
    </>
  );
}

export default App;
