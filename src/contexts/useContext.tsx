import { ReactNode, createContext, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

type UserContextType = {
    user: User | null;
    login: boolean;
    logout: () => void;
    handleLogin: (email: string, password: string) => void;
    handleRegister: (name: string, surName: string, email: string, password: string) => void;
}


export const UserContext = createContext({} as UserContextType);

type UseStorageProps = {
    children: ReactNode
}

type User = {
    id: string;
    name: string;
}



export const UserStorage = ({ children }: UseStorageProps) => {
    const navigate = useNavigate();

    const [login, setLogin] = useState(false); // coloque false
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    // const isAuthenticated = !!token;
    const [user, setUser] = useState<User | null>(null);

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
        if (token){
            getUser(token);
        }
    }, [token]); 

    const logout = () => {
        localStorage.removeItem('token');
        setLogin(false); 
        setUser(null);
    };

    const handleRegister = async (name: string, surName: string, email: string, password: string) => {
        try {
            const response = await api.post('/user/sign-up', { name, surName, email, password });
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
            if(!data.token){
                return console.log
                ('token nao encontrado');
            }
            setLogin(true);
            localStorage.setItem('token', data.token);
            console.log(`token: ${data.token} token em localstorage: ${localStorage.getItem('token')}`);
            localStorage.getItem('token');
            setToken(data.token);
            getUser(data.token);
            
            navigate('/');

        } catch (error) {
            console.log('Não foi possível fazer o login', error);
        }
    };

console.log("objeto user:", user?.name);

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

