import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/login/login.tsx";
import Signup from "./components/auth/register/signup.tsx";
import Layout from "./layout/layout";
import Bitwa from "./pages/Bitwa/Bitwa";
import Logo from "./pages/buy/Buy.tsx";
import Buy from "./pages/buy/Buy.tsx";
import Case from "./pages/case/Case.tsx";
import DziennaSkrzynka from "./pages/DziennaSkrzynka/DziennaSkrzynka";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Logo />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="case" element={<Case />} />
          <Route path="buy" element={<Buy />} />
          <Route path="bitwa" element={<Bitwa />} />
          <Route path="dziennaSkrzynka" element={<DziennaSkrzynka />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
