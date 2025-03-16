import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { AuthProvider } from "./Component/GlobalStore";
import EditBookPage from "./Pages/EditBook";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="Register" element={<Register />} />
            <Route path="books" element={<Books />} />
            <Route path="/editbook" element={<EditBookPage />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
