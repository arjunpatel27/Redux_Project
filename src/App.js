import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import View from "./Pages/View";

function App() {
  return (
    <>
      <Header />
      <ToastContainer autoClose={2000} position="top-center" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/view" element={<View />}></Route>
      </Routes>
    </>
  );
}

export default App;
