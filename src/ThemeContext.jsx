import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

 export const ThemeContextProvider=({children})=>{
    const [DarkTheme, setDarkTheme] = useState(false);
    function changeTheme() {
      setDarkTheme(prev=>!prev);
    }

    return <ThemeContext.Provider value={{ DarkTheme, setDarkTheme,changeTheme }}>
    {children}
  </ThemeContext.Provider>

}
