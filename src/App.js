import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import HowWork from "./pages/HowWork";
import Guarantee from "./pages/Gurantee";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* Full layout with all sections */}
        <Route
          path="/"
          element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Home />
                <Services />
                <HowWork />
                <Guarantee />
              </main>
              <Footer />
            </div>
          }
        />

        {/* Services Page (Only Header, Services, Footer) */}
        <Route
          path="/services"
          element={
            <div className="flex flex-col min-h-screen">
              <Header/>
              <main className="place-content-center gap-4 min-h-screen pt-16">
                <Services />
              </main>
              <Footer />
            </div>
          }
        />

        {/* Contact Page (Only Header, Contact, Footer) */}
        <Route
          path="/contact"
          element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="place-content-center gap-4 min-h-screen pt-16">
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
