import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import UsersPage from "./pages/users";
import { AddEdit } from "./pages/addedit";
import { ViewPage } from "./pages/view";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <div className="container">
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/edit/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<ViewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
