"use client";
import React from 'react'
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({children}) => {
    const [admin , setAdmin ] = useState();
    const [availability, setAvailability] = useState(false);
  return (
    <GlobalContext.Provider
    value={{
        admin,
        setAdmin,
        availability,
        setAvailability
    }}
    >
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState