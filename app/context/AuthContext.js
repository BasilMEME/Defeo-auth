"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebase";

const AuthContext = createContext();

export const UserAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const googleSignIn = () => signInWithPopup(auth, googleProvider);
  const githubSignIn = () => signInWithPopup(auth, githubProvider);
  const logOut = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{ user, loading, googleSignIn, githubSignIn, logOut }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
