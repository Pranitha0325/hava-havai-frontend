import "./App.css";
import Layout from "./Components/Layout";
import Airports from "./dashboard/Airports";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Airport from "./dashboard/Airport";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter className="h-full">
      <Layout>
        <Routes>
          <Route path="/" element={<Airports />} />
          <Route path="/airports/:id" element={<Airport />} />
        </Routes>
      </Layout>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
