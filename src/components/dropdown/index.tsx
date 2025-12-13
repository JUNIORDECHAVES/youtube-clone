import ImgChannel from "./ChatGPT.png"
import { useState, useRef, useEffect, useContext } from "react";
import {
    FaUserCircle, FaMoon, FaKeyboard, FaCog,
    FaQuestionCircle, FaFlag
} from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { MdLanguage, MdLocationOn, MdLock, MdOutlineArrowForwardIos, MdLogout } from "react-icons/md";
import {
    DropdownContainer,
    DropdownButton,
    DropdownMenu,
    DropdownItem,
    DropdownIcon,
    DropdownText,
    DropdownRightIcon,
    Divider
} from "./style";
import { UserContext } from "../../contexts/useContext";


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const { logout, login, user } = useContext(UserContext);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const firstLetter = user.nome ? user.nome.charAt(0) : "";

    return (
        <DropdownContainer ref={menuRef}>
            <DropdownButton
                onClick={toggleDropdown}
                $backgroundImage={login? `url(${ImgChannel})` : ""}
            >
                {!login ? <MdMoreVert size={30} /> 
                : !user?.photo && firstLetter}
            
            </DropdownButton>

            {isOpen && (
                <DropdownMenu>

                    <DropdownItem>
                        <DropdownIcon><FaUserCircle /></DropdownIcon>
                        <DropdownText>Seus dados no YouTube</DropdownText>
                    </DropdownItem>

                    <DropdownItem>
                        <DropdownIcon><FaMoon /></DropdownIcon>
                        <DropdownText>Aparência: tema do dispositivo</DropdownText>
                        <DropdownRightIcon><MdOutlineArrowForwardIos /></DropdownRightIcon>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownIcon><MdLanguage /></DropdownIcon>
                        <DropdownText>Idioma: Português</DropdownText>
                        <DropdownRightIcon><MdOutlineArrowForwardIos /></DropdownRightIcon>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownIcon><MdLock /></DropdownIcon>
                        <DropdownText>Modo restrito: desativado</DropdownText>
                        <DropdownRightIcon><MdOutlineArrowForwardIos /></DropdownRightIcon>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownIcon><MdLocationOn /></DropdownIcon>
                        <DropdownText>Local: Brasil</DropdownText>
                        <DropdownRightIcon><MdOutlineArrowForwardIos /></DropdownRightIcon>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownIcon><FaKeyboard /></DropdownIcon>
                        <DropdownText>Atalhos do teclado</DropdownText>
                    </DropdownItem>

                    <Divider />
                    <DropdownItem>
                        <DropdownIcon><FaCog /></DropdownIcon>
                        <DropdownText>Configurações</DropdownText>
                    </DropdownItem>
                    <Divider />

                    <DropdownItem>
                        <DropdownIcon><FaQuestionCircle /></DropdownIcon>
                        <DropdownText>Ajuda</DropdownText>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownIcon><FaFlag /></DropdownIcon>
                        <DropdownText>Enviar feedback</DropdownText>
                    </DropdownItem>
                    {login &&
                        <DropdownItem onClick={() => logout()}>
                            <DropdownIcon><MdLogout /></DropdownIcon>
                            <DropdownText >Sair</DropdownText>
                        </DropdownItem>
                    }

                </DropdownMenu>
            )}
        </DropdownContainer>
    );
};

export default Dropdown;
