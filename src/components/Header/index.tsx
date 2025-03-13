import {
    Button,
    ButtonContainer,
    ButtonIcon,
    ConfigIcon,
    Conteiner,
    ConteinerConfig,
    HeaderButton,
    LogoConteiner,
    SearchButton,
    SearchContainer,
    SearchInput,
    SearchInputContainer
} from "./style";

import AmburguerIcon from "../../assets/hamburger.png"
import Logo from "../../assets/YouTube-Logo.png"
import Lupa from "../../assets/search.png"
import microfone from "../../assets/microfone-gravador.png"
import sino from "../../assets/sino.png"
import camera from "../../assets/video.png"
import { useContext, useState } from "react";
import { MenuContext } from "../../contexts/UseMenu";
import { UserContext } from "../../contexts/useContext";
import { ButtonLogIn } from "../ButtonLogin";
import Dropdown from "../dropdown";
import { useVideo } from "../../contexts/useVideo";




export default function Header() {
    const user = [{ id: "1", name: "Junior", imageUrl: require("./more.png") }]
    const use2 = [
        {
            "id": "1",
            "name": "Minnie Barrett",
            "imageUrl":
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": "2",
            "name": "Andy Holmes",
            "imageUrl":
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": "3",
            "name": "Felicia Watts",
            "imageUrl":
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": "4",
            "name": "Hailey Green",
            "imageUrl":
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": "5",
            "name": "Jeremiah Hughes",
            "imageUrl":
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": "6",
            "name": "Amy Perkins",
            "imageUrl":
                "https://images.unsplash.com/photo-1587677171791-8b93c752999b?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const { isOpenMenu, setIsOpenMenu } = useContext(MenuContext)

    const { login, logout } = useContext(UserContext)
    const { searchVideos } = useVideo()
    const [query, setQuery] = useState("");

    console.log(query)

    return (
        <Conteiner>
            <LogoConteiner>

                <ButtonContainer margin="0 10px 0 0 ">

                    <ButtonIcon alt="" src={AmburguerIcon} onClick={() => setIsOpenMenu(!isOpenMenu)} />
                </ButtonContainer>

                <img
                    style={{ cursor: "pointer", width: "100px" }}
                    alt="" src={Logo} />
            </LogoConteiner>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" type="search" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
                </SearchInputContainer>
                <SearchButton onClick={() => searchVideos(query)}>
                    <ButtonIcon alt="" src={Lupa} />
                </SearchButton>
                <ButtonContainer margin="0 0 0 10px">
                    <ButtonIcon alt="" src={microfone} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>

                {login ?
                    <>
                        <ButtonContainer margin="0 0 0 10px">
                            <ButtonIcon alt="" src={camera} />
                        </ButtonContainer>
                        <ButtonContainer margin="0 0 0 10px">
                            <ButtonIcon alt="" src={sino} />
                        </ButtonContainer>

                        <ButtonContainer margin="0 0 0 10px" >
                            JR
                        </ButtonContainer>

                        <Button onClick={() => logout()}>Sair</Button>
                    </>
                    :
                    <>
                        <ConteinerConfig >
                            <Dropdown />
                        </ConteinerConfig>


                        <ButtonLogIn />
                    </>
                }

            </HeaderButton>

        </Conteiner>
    )

}
