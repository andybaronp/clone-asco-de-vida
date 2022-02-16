import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import { AuthProvider } from "./context/authContex";
import NewPost from "./components/NewPost";
import Category from "./components/Category";
import Header from "./components/Header";
import Layout from "./components/Layout";
const App = () => {
  return (
    <div>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="newpost"
            element={
              <ProtectedRoute>
                <NewPost />
              </ProtectedRoute>
            }
          />

          <Route path="/category/:category" element={<Category />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
