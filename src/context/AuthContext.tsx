import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";

enum AuthStatus {
    checking = "checking",
    authenticated = "authenticated",
    unauthenticated = "unauthenticated",
}

interface AuthState {
    status: AuthStatus;
    token?: string

    user?: User
    isCheckinbg: boolean
    isAuthenticated: boolean

    login: (email: string, pass: string) => void
    salir: () => void

}
interface User {
    name: string
    email: string
}

export const AuthContext = createContext({} as AuthState)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setStatus] = useState(AuthStatus.checking)
    const [user, setuser] = useState<User>()
    useEffect(() => {
        setTimeout(() => {
            setStatus(AuthStatus.unauthenticated)

        }, 1500)
    }, [])

    const login = (email: string, pass: string) => {
        setuser({
            name: 'luis',
            email: email,
        })
        setStatus(AuthStatus.authenticated)

    }
    const salir = () => {
        setStatus(AuthStatus.unauthenticated)

    }

    return <AuthContext.Provider value={{

        status: status,
        user: user,
        isCheckinbg: status == AuthStatus.checking,
        isAuthenticated: status == AuthStatus.authenticated,
        login,
        salir,

    }} >
        {children}
    </AuthContext.Provider>

}