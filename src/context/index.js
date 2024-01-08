"use client";
import React from 'react'
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [admin, setAdmin] = useState("localCouncil_editor");
  const [availability, setAvailability] = useState(false);
  const [adminDetails, setAdminDetails] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      const adminData = JSON.parse(localStorage.getItem("admin")) || {};
      setToken(Cookies.get("token"));
      setAdminDetails(adminData)
    } else {
    }
  }, [Cookies])

  return (
    <GlobalContext.Provider
      value={{
        admin,
        setAdmin,
        availability,
        setAvailability,
        adminDetails,
        setAdminDetails,
        setToken,
        token,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState