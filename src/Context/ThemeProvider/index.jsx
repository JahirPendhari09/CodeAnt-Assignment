import { createContext, useState } from "react";

export const ThemeContext = createContext({
  isSideBarVisible: false, 
  setIsSideBarVisible: () => {},
});

const ThemeProvider = ({ children }) => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  return (
    <ThemeContext.Provider value={{ isSideBarVisible, setIsSideBarVisible }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
