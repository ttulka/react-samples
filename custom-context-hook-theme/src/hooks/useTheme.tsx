import {createContext, useContext, useState} from "react";

// context object structure
type ContextType = {
    theme: string;
    updateTheme: (theme: string) => void;
};

// create an empty context
const ThemeContext = createContext<ContextType>({
    theme: "",
    updateTheme: () => {}
});

// context provider container
export const ThemeProvider = (prop: {value?: string, children: JSX.Element | JSX.Element[]}) => {
    const [theme, setTheme] = useState<string>(
      localStorage.getItem("theme") || prop.value || "light");

    const updateTheme = (theme: string) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    };

    return (
      <ThemeContext.Provider value={{theme, updateTheme}}>
        {prop.children}
      </ThemeContext.Provider>
    );
};

// custom context hook
const useTheme = () => useContext(ThemeContext) as ContextType;

export default useTheme;
