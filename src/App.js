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
import VideoPage from "./pages/upload video";
import EnvioPostagem from "./pages/upload Post";
import CriarTransmissao from "./pages/trasmissao-ao-vivo";
import { SelectdCategoryProvider } from "./contexts/SearchCategory";
import { SearchVideoProvider } from "./contexts/searchVideo";
import SearchPage from "./pages/searchpage";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <UseMenuProvider>
          <VideoProvider>
            <SelectdCategoryProvider>
              <SearchVideoProvider>
                <Routes>
                  <Route path="/" element={<PageBase />}>
                    <Route index element={<Home />} />
                    <Route path="library" element={<Library />} />
                    <Route path="history" element={<History />} />
                    <Route path="search" element={<SearchPage />} />
                  </Route>
                  <Route path="login" element={<Login />} />
                  <Route path="cadastro" element={<Cadastro />} />
                  <Route path="enviar-video" element={<VideoPage />} />
                  <Route path="criar-postagem" element={<EnvioPostagem />} />
                  <Route path="transmitir-ao-vivo" element={<CriarTransmissao />} />
                </Routes>
              </SearchVideoProvider>
            </SelectdCategoryProvider>
          </VideoProvider>
        </UseMenuProvider>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
