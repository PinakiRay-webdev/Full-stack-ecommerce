import { createContext } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  // You can put your context values here
  const contextValue = {};
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default AppContext;