import {
    ButtonContainer,
    ButtonIcon,
    ClearButtonfield,
    Container,
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
import { useContext, useState } from "react";
import { MenuContext } from "../../contexts/UseMenu";
import { UserContext } from "../../contexts/useContext";
import { ButtonLogIn } from "../ButtonLogin";
import Dropdown from "../dropdown";
import { SearchVideo, useSearchVideo } from "../../contexts/searchVideo";
import { CreatevideoDropdown } from "../createVideo";
import { FiX } from 'react-icons/fi';


export default function Header() {

    const { isOpenMenu, setIsOpenMenu } = useContext(MenuContext)

    const { login } = useContext(UserContext)
    const { searchVideo, setSearchVideo, handleSearch } = useSearchVideo()

    const isWidthBtLogin = window.innerWidth > 470

    function handleClear() {
        if (searchVideo !== "") {
            setSearchVideo("")
        }
    }


    return (
        <Container>
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
                        value={searchVideo}
                        onChange={(e) => setSearchVideo(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSearch();
                        }
                        }
                    />
                    {
                        searchVideo &&
                        <ClearButtonfield onClick={() => handleClear()}>
                            <FiX size={20} />
                        </ClearButtonfield>
                    }

                </SearchInputContainer>
                <SearchButton onClick={() => handleSearch()}>
                    <ButtonIcon alt="" src={Lupa} />
                </SearchButton>
                <ButtonContainer margin="0 0 0 10px">
                    <ButtonIcon alt="" src={microfone} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>

                {login ?
                    <>

                        <CreatevideoDropdown />


                        <ButtonContainer margin="0 0 0 10px">
                            <ButtonIcon alt="" src={sino} />
                        </ButtonContainer>


                        <ConteinerConfig >
                            <Dropdown />
                        </ConteinerConfig>

                    </>
                    :
                    <>
                        <ConteinerConfig >
                            <Dropdown />
                        </ConteinerConfig>

                        {
                            isWidthBtLogin &&
                            <ButtonLogIn />
                        }
                    </>
                }

            </HeaderButton>

        </Container>
    )

}
