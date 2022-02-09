import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import { AuthProvider } from "./context/authContex";
import Layout from "./components/Layout";
import Post from "./components/Post";
import Category from "./pages/Category";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route
            path="post"
            element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="category/:category" element={<Category />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
