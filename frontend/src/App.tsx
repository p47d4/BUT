import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import Selfhelp from "./pages/Selfhelp";
import Educational from "./pages/Educational";
import About from "./pages/About";
// import Hope from "./pages/Hope";
import { useAuth } from "./context/AuthContext";
function App() {
  const auth = useAuth();
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/hope" element={<Hope />} /> */}
        <Route path="/selfhelp" element={<Selfhelp />} />
        <Route path="/educational" element={<Educational />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {auth?.isLoggedIn && auth.user && (
          <Route path="/chat" element={<Chat />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
