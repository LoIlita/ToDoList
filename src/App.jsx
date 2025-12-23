import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/login/login.tsx";
import Signup from "./components/auth/register/signup.tsx";
import Layout from "./layout/layout";
import Bitwa from "./pages/Bitwa/Bitwa";
import Logo from "./pages/CardPage/CardPage";
import CardsPage from "./pages/CardPage/CardPage";
import DziennaSkrzynka from "./pages/DziennaSkrzynka/DziennaSkrzynka";
import Kup from "./pages/Kup/Kup.tsx";
import Sprzedaj from "./pages/Sprzedaj/Sprzedaj";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Logo />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="sprzedaj" element={<Sprzedaj />} />
          <Route path="kup" element={<Kup />} />
          <Route path="bitwa" element={<Bitwa />} />
          <Route path="dziennaSkrzynka" element={<DziennaSkrzynka />} />
          <Route path="cardsPage" element={<CardsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
