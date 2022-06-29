import React, {useEffect, useState} from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import firebase from "firebase";
import { Routes, Route, useNavigate } from "react-router-dom";
import {Product} from "./pages/Product";
import Header from "./components/Header";

function App() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => setUser(user));
        if (user) {
            navigate("/");
        }
    }, []);
  return (
    <>
        { user ? <Header user={user} setUser={setUser}/> : <Home/>}
      <Routes>
          { user ? (
              <Route path="/" index element={<Home />} />
            ) : (
              <Route path="login" element={<Login />} />
            )}
          <Route path="home/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
