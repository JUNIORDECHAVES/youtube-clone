import {
    ButtonContainer,
    ButtonIcon,
    Conteiner,
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
import { useContext } from "react";
import { MenuContext } from "../../contexts/UseMenu";




export default function Header() {
    
    const{isOpenMenu, setIsOpenMenu} = useContext(MenuContext)
    
    return (
        <Conteiner>
            <LogoConteiner>

                <ButtonContainer margin="0 10px 0 0 ">

                    <ButtonIcon alt="" src={AmburguerIcon} onClick={() => setIsOpenMenu(!isOpenMenu)}  />
                </ButtonContainer>

                <img
                    style={{ cursor: "pointer", width: "100px" }}
                    alt="" src={Logo} />
            </LogoConteiner>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={Lupa} />
                </SearchButton>
                <ButtonContainer margin="0 0 0 10px">
                    <ButtonIcon alt="" src={microfone} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                <ButtonContainer margin="0 0 0 10px">
                    <ButtonIcon alt="" src={camera} />
                </ButtonContainer>
                <ButtonContainer margin="0 0 0 10px">
                    <ButtonIcon alt="" src={sino} />
                </ButtonContainer>
                <ButtonContainer>
                    JR
                </ButtonContainer>
            </HeaderButton>

        </Conteiner>
    )

    }
