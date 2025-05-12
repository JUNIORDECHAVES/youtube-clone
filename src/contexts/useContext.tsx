import { ReactNode, createContext, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext({} as any);

type UseStorageProps = {
    children: ReactNode
}

export const UserStorage = ({ children }: UseStorageProps) => {
    const navigate = useNavigate();

    const [login, setLogin] = useState(false); // coloque false
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
    
    
    // desativado temporariamente
    useEffect(() => {
        getUser(token);
    }, [token]); 

    const logout = () => {
        localStorage.removeItem('token');
        setLogin(false); 
        setUser({});
    };

    const handleRegister = async (name: string, email: string, password: string) => {
        try {
            const response = await api.post('/user/sign-up', { name, email, password });
            const { data } = response;
    
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
    
            navigate('/');
        } catch (error) {
            console.log('Erro ao cadastrar usuário', error);
        }
    };

    const handleLogin = async (email: string, password: string) => {
        console.log(email, password);
        
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

