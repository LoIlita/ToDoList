import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout"
import Logo from "./pages/Logo/Logo";
import Sprzedaj from "./pages/Sprzedaj/Sprzedaj";
import Kup from "./pages/Kup/kup";
import Bitwa from "./pages/Bitwa/Bitwa";
import DziennaSkrzynka from "./pages/DziennaSkrzynka/DziennaSkrzynka";


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Logo />} />
          <Route path="sprzedaj" element={<Sprzedaj />} />
          <Route path="kup" element={<Kup />} />
          <Route path="bitwa" element={<Bitwa />} />
          <Route path="dziennaSkrzynka" element={<DziennaSkrzynka />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
   
}


