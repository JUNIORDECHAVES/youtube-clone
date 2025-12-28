import {
    ButtonContainer,
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

import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { FiX } from 'react-icons/fi';
import Logo from "../../assets/YouTube-Logo.png";

import { useContext } from "react";
import { MenuContext } from "../../contexts/UseMenu";
import { UserContext } from "../../contexts/useContext";
import { ButtonLogIn } from "../ButtonLogin";
import Dropdown from "../dropdown";
import { useSearchVideo } from "../../contexts/searchVideo";
import { CreatevideoDropdown } from "../createVideo";
import { useNavigate } from "react-router-dom";


export default function Header() {

    const navigate = useNavigate()
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

                    <RxHamburgerMenu size={24} fontWeight='bolder' onClick={() => setIsOpenMenu(!isOpenMenu)} />
                </ButtonContainer>

                <img
                    style={{ cursor: "pointer", width: "100px" }}
                    alt="" src={Logo} onClick={() => navigate("/")} />
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
                    <IoSearchOutline size={24} />
                </SearchButton>
                <ButtonContainer margin="0 0 0 10px">
                    <FaMicrophone size={24} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>

                {login ?
                    <>

                        <CreatevideoDropdown />


                        <ButtonContainer margin="0 10px 0 10px">
                            <FaRegBell size={24} />
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
