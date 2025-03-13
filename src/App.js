import { UseMenuProvider } from "./contexts/UseMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./contexts/useContext";
import { PageBase } from "./pages/pagebase";
import { Home } from "./pages/home";
import { Library } from "./pages/library";
import { Login } from "./pages/login";
import { History } from "./pages/History";
import { Cadastro } from "./pages/cadastro";
import { VideoProvider } from "./contexts/useVideo";

function App() {
  return (
    <UserStorage>
      <UseMenuProvider>
        <VideoProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PageBase />}>
                <Route index element={<Home />} />
                <Route path="library" element={<Library />} />
                <Route path="history" element={<History />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="cadastro" element={<Cadastro />} />
            </Routes>
          </BrowserRouter>
        </VideoProvider>
      </UseMenuProvider>
    </UserStorage>
  );
}

export default App;
