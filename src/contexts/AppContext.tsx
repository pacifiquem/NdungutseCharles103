import { useContext, useState, useEffect, createContext } from "react";

type appContextType = {
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
}

const appContextDefaultValues: appContextType = {
    isDark: false,
    setIsDark: () => { }
}

const AppContext = createContext<appContextType>(appContextDefaultValues);

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const localIsDark = localStorage.getItem('isDark');
        if (localIsDark) {
            setIsDark(JSON.parse(localIsDark));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isDark', JSON.stringify(isDark));
    }, [isDark]);

    return (
        <AppContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </AppContext.Provider>
    );
}
