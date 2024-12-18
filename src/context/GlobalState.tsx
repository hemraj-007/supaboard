import React, { createContext, useContext, useState } from "react";

interface GlobalState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("reaction-timer");

  return (
    <GlobalStateContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) throw new Error("useGlobalState must be used within GlobalStateProvider");
  return context;
};
