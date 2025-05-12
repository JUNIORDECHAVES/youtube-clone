import { useContext, useState } from "react";
import { Button, RegistrationForm, Container, Input, InputContainer, InputContainerPassword, LogoImage, Subtitle, Title, MsgError, InputContent, ContainerInputCheckbox, LabelCheckbox, InputCheckbox } from "./style"
import { useForm } from "react-hook-form";
import validator from 'validator';
import { UserContext } from "../../contexts/useContext";

export const Cadastro = () => {


    type FormData = {
        name: string;
        lastName?: string;
        email: string;
        password: string;
        confirmPassword: string;
    };

const { handleRegister } = useContext(UserContext)
    const [seePassword, setSeePassword] = useState(false);
    const { register, watch, handleSubmit, formState: { errors } } = useForm<FormData>();


    const password = watch("password");

    const onSubmit = (data: FormData) => {
        console.log(data);
        if (data.lastName) {
            const nomecompleto = data.name + " " + data.lastName;
            console.log(nomecompleto)
            return handleRegister(nomecompleto, data.email, data.password);
        }
        handleRegister(data.name, data.email, data.password);
    };

console.log("ola mundo")




    return (
        <Container>
            <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
                <LogoImage src={require("../login/google.png")} />
                <Title>Criar uma conta do Google</Title>
                <Subtitle>Insira seu nome</Subtitle>

                <InputContainer>
                    <InputContent>
                        <Input
                            placeholder="Nome"
                            id="nome"
                            {...register("name", { required: true, minLength: 3, maxLength: 16 })}
                        />
                    </InputContent>
                    {errors?.name?.type === "required" && <MsgError>Nome é obrigatório.</MsgError>}
                    {errors?.name?.type === "minLength" && <MsgError>o mínimo aceitável é 3 caracteres.</MsgError>}
                    {errors?.name?.type === "maxLength" && <MsgError>o maximo aceitável é 16 caracteres.</MsgError>}
                </InputContainer>

                <InputContainer>
                    <InputContent>
                        <Input
                            placeholder="Sobrenome (opcional)"
                            id="sobrenome"
                            type="text"
                            {...register("lastName", { minLength: 3 })}
                        />
                    </InputContent>
                </InputContainer>

                <Subtitle>Insira seu endereço de e-mail</Subtitle>

                <InputContainer>
                    <InputContent>
                        <Input
                            placeholder="Insira seu e-mail"
                            id="e-mail"
                            type="email"
                            {...register("email", { required: true, validate: (values) => validator.isEmail(values) })}
                        />
                    </InputContent>
                    {errors?.email?.type === "required" && <MsgError>Email é obrigatório.</MsgError>}
                    {errors?.email?.type === "validate" && <MsgError>Email inválido.</MsgError>}
                </InputContainer>

                <Subtitle>Insira sua senha</Subtitle>

                <InputContainerPassword>

                    <InputContainer>
                        <InputContent>
                            <Input
                                placeholder="Senha"
                                id="password"
                                type={seePassword  ? "text" : "password"}
                                {...register("password", { required: true, minLength: 8, maxLength: 16 })}
                            />
                        </InputContent>
                        {errors?.password?.type === "required" && <MsgError>Senha é obrigatória.</MsgError>}
                        {errors?.password?.type === "minLength" && <MsgError>o mínimo aceitável é 8 caracteres.</MsgError>}
                        {errors?.password?.type === "maxLength" && <MsgError>o maximo aceitável é 16 caracteres.</MsgError>}
                    </InputContainer>

                    <InputContainer>

                        <InputContent>
                            <Input
                                placeholder="Confirmar senha"
                                id="confirmPassword"
                                type={seePassword  ? "text" : "password"}
                                {...register("confirmPassword", { required: true, validate: (value) => value === password })}
                            />
                        </InputContent>
                        {errors?.confirmPassword?.type === "required" && <MsgError>Confirma Senha é obrigatório.</MsgError>}
                        {errors?.confirmPassword?.type === "validate" && <MsgError>Senhas não são iguais.</MsgError>}
                    </InputContainer>
                </InputContainerPassword>

                <ContainerInputCheckbox>
                    <InputCheckbox type="checkbox" id="toggle-password" onClick={() => setSeePassword(!seePassword)} />
                    <LabelCheckbox htmlFor="toggle-password">Mostrar Senha</LabelCheckbox>
                </ContainerInputCheckbox>

                <Button type="submit">criar conta</Button>

            </RegistrationForm>
        </Container>
    )
}