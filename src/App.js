import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Interface from "./routes/default/landing";
import Voice from "./routes/voice/voice";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Link to="/">Chat</Link>
        <Link to="/voice">Voice</Link>
      </Navbar>
      <Routes>
        <Route index element={<Interface />} />
        <Route path="/voice" element={<Voice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
