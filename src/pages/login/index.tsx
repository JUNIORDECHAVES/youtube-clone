import { useContext, useState } from "react";
import { 
    Container, 
    Card, 
    InputContainer, 
    Input, 
    Label, 
    Button, 
    Link, 
    Title, 
    Subtitle, 
    LogoImage
} from "./style";

import { UserContext } from "../../contexts/useContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const { handleLogin } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <Container>
            <Card>
                <LogoImage src={require("./google.png")} />
                <Title>Fazer login</Title>
                <Subtitle>Prosseguir no YouTube</Subtitle>

                <InputContainer>
                    <Label isActive={isEmailFocused || email !== ""} htmlFor="email">
                        E-mail ou telefone
                    </Label>
                    <Input 
                        id="email" 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => setIsEmailFocused(false)}
                    />
                </InputContainer>

                <InputContainer>
                    <Label isActive={isPasswordFocused || password !== ""} htmlFor="password">
                        Senha
                    </Label>
                    <Input 
                        id="password"  
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={() => setIsPasswordFocused(false)}
                    />
                </InputContainer>

                <Button disabled={!email || !password} onClick={() => handleLogin(email, password, navigate)}>
                    Entrar
                </Button>

                <Link onClick={() => navigate("/cadastro")}>Criar conta</Link>
            </Card>
        </Container>
    );
};
