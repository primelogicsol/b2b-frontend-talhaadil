'use client'

import { createContext, useContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface AuthenticationContextType {
    handleLogout: () => void;
}

const AuthenticationContext = createContext<AuthenticationContextType>({
    handleLogout: () => {}
});

interface AuthenticationProviderProps {
    children: React.ReactNode;
}

export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
    const router = useRouter();

    function handleLogout() {
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        Cookies.remove("user_role");
        Cookies.remove("user_id");
        Cookies.remove("visibility_level");
        Cookies.remove("ownership");

        router.push("/login");
    }

    return (
        <AuthenticationContext.Provider value={{ handleLogout }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export const useAuthentication = () => useContext(AuthenticationContext);
