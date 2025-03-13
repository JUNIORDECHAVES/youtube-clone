import { useState, useRef, useEffect } from "react";
import { 
    FaUserCircle, FaMoon, FaKeyboard, FaCog, 
    FaQuestionCircle, FaFlag 
} from "react-icons/fa";
import { MdLanguage, MdLocationOn, MdLock, MdOutlineArrowForwardIos } from "react-icons/md";
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

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

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
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <DropdownContainer ref={menuRef}>
            <DropdownButton onClick={toggleDropdown}>⋮</DropdownButton>
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
                </DropdownMenu>
            )}
        </DropdownContainer>
    );
};

export default Dropdown;
