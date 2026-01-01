import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import { useAuth } from "./auth/authProvider";

export default function Navbar() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  // <a> zamienić na Link

  return (
    <nav className="w-full bg-violet-900/60 backdrop-blur-md shadow-md ">
      <div className="mx-auto max-w-6xl h-16 px-6 grid grid-cols-[auto_1fr_auto] items-center">
        <a href="/" className="justify-self-start text-white font-bold text-md">
          LOGO
        </a>

        <div>
          <ul className="justify-self-center flex items-center gap-6 font-bold whitespace-nowrap">
            <li>
              <a href="/sprzedaj" className="text-white hover:text-purple-300">
                SPRZEDAJ
              </a>
            </li>
            <li>
              <a href="/buy" className="text-white hover:text-purple-300">
                KUP
              </a>
            </li>
            <li>
              <a href="/bitwa" className="text-white hover:text-purple-300">
                BITWA
              </a>
            </li>
            <li>
              <a
                href="/dziennaSkrzynka"
                className="text-white hover:text-purple-300"
              >
                DZIENNA SKRZYNKA
              </a>
            </li>
          </ul>
        </div>

        <div>
          {loading ? (
            <span className="text-white/50 text-xl font-semibold">...</span> //to tak powinno działać? xD
          ) : user ? (
            <button
              className="text-white text-xl font-semibold hover:text-purple-300"
              onClick={handleLogout}
            >
              Wyloguj
            </button>
          ) : (
            <Link
              to="/login"
              className="text-white text-xl font-semibold hover:text-purple-300"
            >
              Zaloguj się
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
