import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/userLogin/login";
import Register from "./pages/userLogin/register";
import Intro from "./pages/intro/intro_page";
import Footer from "./component/footerPage/footer";
import ChatFrame from "./pages/chatbox/chatFrame";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const storage = JSON.parse(localStorage.getItem("user"));
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!storage ? <Intro /> : <Navigate to="/chat" />}
        />
        <Route
          path="/login"
          element={!storage ? <LoginPage /> : <Navigate to="/chat" />}
        />
        <Route
          path="/forgotPass"
          element={!storage ? <LoginPage /> : <Navigate to="/chat" />}
        />
        <Route
          path="/register"
          element={!storage ? <Register /> : <Navigate to="/chat" />}
        />
        <Route
          path="/chat/:user"
          element={storage ? <ChatFrame /> : <Navigate to="/login" />}
        />
          <Route
              path="/chat"
              element={storage ? <ChatFrame /> : <Navigate to="/login" />}
          />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={true}
        pauseOnHover
        theme="colored"
        transition:Slide
      />
    </BrowserRouter>
  );
}

export default App;
