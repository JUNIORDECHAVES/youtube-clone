import { useContext, useState } from "react";
import {
    Container,
    InputContainer,
    Input,
    Button,
    Link,
    Title,
    Subtitle,
    LogoImage,
    FormLogin,
    MsgError,
    InputCheckbox,
    LabelCheckbox,
    ContainerInputCheckbox
} from "./style";

import { UserContext } from "../../contexts/useContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import validator from "validator";

export const Login = () => {
    const { handleLogin } = useContext(UserContext);
    const navigate = useNavigate();
    const [seePassword, setSeePassword] = useState(false);

    type FormData = {
        email: string;
        password: string;
    };

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        handleLogin(data.email, data.password);
    };


    return (
        <Container>
            <FormLogin onSubmit={handleSubmit(onSubmit)}>
                <LogoImage src={require("./google.png")} />
                <Title>Fazer login</Title>
                <Subtitle>Prosseguir no YouTube</Subtitle>

                <InputContainer>
                    <Input
                        placeholder="Digite seu e-mail"
                        id="email"
                        type="email"
                        {...register("email", { required: true, validate: (value) => validator.isEmail(value) })}
                    />
                    {errors?.email?.type === "required" && <MsgError>E-mail obrigatório</MsgError>}
                    {errors?.email?.type === "validate" && <MsgError>E-mail inválido</MsgError>}
                </InputContainer>

                <InputContainer>
                    <Input
                        placeholder="Digite sua senha"
                        id="password"
                        type={seePassword ? "text" : "password"}
                        {...register("password", { required: true })}
                    />
                    {errors?.password?.type === "required" && <MsgError>Senha obrigatória</MsgError>}
                </InputContainer>

                <ContainerInputCheckbox>
                    <InputCheckbox type="checkbox" id="toggle-password" onClick={() => setSeePassword(!seePassword)} />
                    <LabelCheckbox htmlFor="toggle-password">Mostrar Senha</LabelCheckbox>
                </ContainerInputCheckbox>

                <Button type="submit">
                    Entrar
                </Button>

                <Link onClick={() => navigate("/cadastro")}>Criar conta</Link>
            </FormLogin >
        </Container>
    );
};
