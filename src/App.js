import { useState } from "react";
import Header from "./components/Header";
import { Menu } from "./components/Menu";
import { UseMenuProvider } from "./contexts/UseMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Library } from "./pages/library";
import { History } from "./pages/History";

function App() {



  return (
    <BrowserRouter>

      <div className="App">
        <UseMenuProvider>
          <Header />

          <div style={{ width: "100%", display: "flex" }}>

            <Menu />
            <div style={{ width: "100%", padding: "50px 70px", boxSizing: "border-box", display: "flex", justifyContent: "center"}}>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/library" element={<Library/>} />
                <Route path="/history" element={<History/>} />
              </Routes>
            </div>

          </div>
        </UseMenuProvider>

      </div>
    </BrowserRouter>
  );
}

export default App;
