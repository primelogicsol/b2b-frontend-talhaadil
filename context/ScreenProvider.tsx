'use client'

import { createContext, useContext, useEffect, useState } from "react";

interface GlobalContextType {
  is4K: boolean;
}

const GlobalContext = createContext<GlobalContextType>({ is4K: false });

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [is4K, setIs4K] = useState(false);

  useEffect(() => {
    const checkResolution = () => {
      const isFourK =
        window.innerWidth >= 2880 && window.innerHeight >= 1620 && false;
      setIs4K(isFourK);
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => window.removeEventListener("resize", checkResolution);
  }, []);

  return (
    <GlobalContext.Provider value={{ is4K }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
