import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const logout = () => {

        localStorage.removeItem("user");
        setUser(null);

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                setUser,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>

    );

}

export default AuthProvider;