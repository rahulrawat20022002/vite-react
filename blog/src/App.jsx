import { useEffect } from "react";
import "./App.css";
import { Header, Footer } from "./components/index";
import auth from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login, logout } from "./store/authSlice";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    auth
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login(user));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        Main Content
        <Footer />
      </div>
    </div>
  ) : (
    "loading"
  );
}

export default App;
