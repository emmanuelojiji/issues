import "./App.scss";
import Header from "./components/Header";
import Comment from "./components/Comment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IssuePage from "./pages/IssuePage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/issue/:id" element={<IssuePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
