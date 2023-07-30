import "./App.scss";
import Header from "./components/Header";
import Comment from "./components/Comment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IssuePage from "./pages/IssuePage";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [selectedUser, setSelectedUser] = useState();
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            }
          />
          <Route
            path="/issue/:id"
            element={
              <IssuePage
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
