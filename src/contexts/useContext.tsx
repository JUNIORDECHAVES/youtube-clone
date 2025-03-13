import { ReactNode, createContext, useEffect, useState } from "react";
import api from "../api";


export const UserContext = createContext({} as any);

type UseStorageProps = {
    children: ReactNode
}

export const UserStorage = ({ children }: UseStorageProps) => {

    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);

    const getUser = async (token: string) => {
        try {
            const response = await api.get('/user/get-user', {headers: {Authorization: token}});
            const { data } = response;
    
            setUser(data.user);
            setLogin(true);
        } catch (error) {
            console.log("Erro ao buscar o usuário:", error);
            
        }
    };
    

    useEffect(() => {
        getUser(token);
    }, [token]);

    const logout = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    };

    const handleRegister = async (name: string, email: string, password: string, navigate: Function) => {
        try {
            const response = await api.post('/user/sign-up', { name, email, password });
            const { data } = response;
    
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
    
            navigate('/'); // Redireciona após o cadastro
        } catch (error) {
            console.log('Erro ao cadastrar usuário', error);
        }
    };

    const handleLogin = async (email: string, password: string, navigate: Function) => {
        try {
            const response = await api.post('/user/sign-in', { email, password });
            const { data } = response;

            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
            
            navigate('/');

        } catch (error) {
            console.log('Não foi possível fazer o login', error);
        }
    };

    // --------------------------------------------

    // const searchUsers = async (query: string) => {
    //     try {
    //         const response = await api.get(`/user/search?query=${query}`);
    //         const { data } = response;
    //     }
    //     catch (error) {
    //         console.log('Erro ao buscar usuários', error);
    //     }
    // }


    return (
        <UserContext.Provider value={{
            login,
            user,
            handleRegister,
            handleLogin,
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}

