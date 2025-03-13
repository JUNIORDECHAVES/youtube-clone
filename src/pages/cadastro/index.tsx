import { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Input, InputContainer, InputContainerPassword, Label, LogoImage, Subtitle, Title } from "./style"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/useContext";

export const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState(``);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isnomeFocused, setIsNomeFocused] = useState(false);
    const [isSobrenomeFocused, setIsSobrenomeFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

    useEffect(() => {
        setNomeCompleto(`${nome} ${sobrenome}`);
    }, [nome, sobrenome]);
    const navigate = useNavigate();
    const { handleRegister } = useContext(UserContext)

    return (
        <Container>
            <Card>
                <LogoImage src={require("../login/google.png")} />
                <Title>Criar uma conta do Google</Title>
                <Subtitle>Insira seu nome</Subtitle>

                <InputContainer>
                    <Label isActive={isnomeFocused || nome !== ""} htmlFor="nome">
                        Nome
                    </Label>
                    <Input 
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} 
                    onFocus={() => setIsNomeFocused(true)}
                    onBlur={() => setIsNomeFocused(false)}
                    />
                </InputContainer>

                <InputContainer>
                    <Label isActive={isSobrenomeFocused || sobrenome !== ""} htmlFor="sobrenome">
                        Sobrenome (Optional)
                    </Label>
                    <Input 
                    id="sobrenome"
                    type="text"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)} 
                    onFocus={() => setIsSobrenomeFocused(true)}
                    onBlur={() => setIsSobrenomeFocused(false)}
                    />
                </InputContainer>

                <Subtitle>Insira seu endereço de e-mail</Subtitle>

                <InputContainer>
                    <Label isActive={isEmailFocused || email !== ""} htmlFor="e-mail">
                    endereço de e-mail
                    </Label>
                    <Input 
                    id="e-mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
                    />
                </InputContainer>

                <Subtitle>Insira sua senha</Subtitle>

                <InputContainerPassword>

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

                <InputContainer>
                    <Label isActive={isConfirmPasswordFocused || confirmPassword !== ""} htmlFor="confirmPassword">
                    Confirmar
                    </Label>
                    <Input 
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    onFocus={() => setIsConfirmPasswordFocused(true)}
                    onBlur={() => setIsConfirmPasswordFocused(false)}

                    />
                </InputContainer>
                </InputContainerPassword>

                <Button disabled={!nome || !email || !password || password !== confirmPassword} 
                onClick={() => handleRegister(nomeCompleto, email, password, navigate)}
                >criar conta</Button>
    
            </Card>
        </Container>
    )
}