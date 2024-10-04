import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import DetailMenuPage from "./pages/DetailMenuPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/menu-detail/:id" element={<DetailMenuPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
