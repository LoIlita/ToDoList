import { Outlet } from "react-router-dom";
import Background from "../components/background";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div>
      <Background />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
