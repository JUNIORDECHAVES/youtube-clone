import { useContext, useEffect, useState } from "react"
import { Container, ContainerFundo, MenuItem, Separator, TextPrincipal, TextSecundario, Title } from "./style"
import { MenuContext } from "../../contexts/UseMenu"

import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/useContext"
import { ButtonLogIn } from "../ButtonLogin"

import { HiOutlineHome } from "react-icons/hi";
import { BsFileEarmarkPlay } from "react-icons/bs";
import { BsCollectionPlay } from "react-icons/bs";
import { LuCircleUserRound } from "react-icons/lu";
import { LuHistory } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMusicNote } from "react-icons/hi";
import { BiMoviePlay } from "react-icons/bi";
import { HiMiniSignal } from "react-icons/hi2";
import { PiGameController } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineTrophy } from "react-icons/hi2";
import { PiGraduationCap } from "react-icons/pi";
import { IoHeadsetOutline } from "react-icons/io5";
import { RiYoutubeFill } from "react-icons/ri";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";

import { BsGear, BsFlag, BsQuestionCircle } from "react-icons/bs";
import { TbMessageExclamation } from "react-icons/tb";


const menuItens1 = [
    { name: "Início", icon: HiOutlineHome, link: "/" },
    { name: "Shorts", icon: BsFileEarmarkPlay, link: "/trending" },
    { name: "Inscrições", icon: BsCollectionPlay, link: "/subscriptions" },
];

const menuItens2 = [
    { name: "Você", icon: LuCircleUserRound, link: "/library" },
    { name: "Historico", icon: LuHistory, link: "/history" },
];

const menuItens3 = [
    { name: "Em Alta", icon: IoRocketOutline, link: "/library" },
    { name: "Shopping", icon: IoBagHandleOutline, link: "/library" },
    { name: "Música", icon: HiOutlineMusicNote, link: "/library" },
    { name: "Filme", icon: BiMoviePlay, link: "/library" },
    { name: "Ao Vivo", icon: HiMiniSignal, link: "/library" },
    { name: "Jogos", icon: PiGameController, link: "/library" },
    { name: "Notícias", icon: IoNewspaperOutline, link: "/library" },
    { name: "Esportes", icon: HiOutlineTrophy, link: "/library" },
    { name: "Cursos", icon: PiGraduationCap, link: "/library" },
    { name: "Podcast", icon: IoHeadsetOutline, link: "/library" },
]

const menuItens4 = [
    { name: "YouTube Premium", icon: RiYoutubeFill, link: "/" },
    { name: "YouTube Studio", icon: SiYoutubestudio, link: "/trending" },
    { name: "YouTube Music", icon: SiYoutubemusic, link: "/subscriptions" },
    { name: "YouTube Kids", icon: SiYoutubekids, link: "/subscriptions" }
];

const menuItensMore = [
    { name: "Configurações", icon: BsGear, link: "/library" },
    { name: "Histórico de denuncias", icon: BsFlag, link: "/library" },
    { name: "Ajuda", icon: BsQuestionCircle, link: "/library" },
    { name: "Enviar feedback", icon: TbMessageExclamation, link: "/library" }
]

export const Menu = () => {
    const { isOpenMenu, setIsOpenMenu } = useContext(MenuContext); // Adicione o setIsOpenMenu para fechar o menu
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const [widthSize, setWidthSize] = useState(window.innerWidth);

    const handleResize = () => {
        if (widthSize <= 1312) {
            setWidthSize(window.innerWidth);
        }
        if (widthSize >= 1313) {
            setWidthSize(window.innerWidth);
        }
    }

    window.addEventListener("resize", handleResize);



    useEffect(() => {
        if (widthSize <= 1312) {
            setIsOpenMenu(false);
        }
        if (widthSize >= 1313) {
            setIsOpenMenu(true);
        }
    }, [widthSize]);

    useEffect(() => {
        if (isOpenMenu === true && widthSize <= 1312) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // Garante que o scroll volte ao normal ao desmontar
        };
    }, [widthSize, isOpenMenu]);

    return (
        <>
            {/* Overlay para escurecer o fundo e fechar ao clicar */}
            <ContainerFundo openMenu={isOpenMenu} onClick={() => setIsOpenMenu(false)} />

            {/* Menu */}
            <Container openMenu={isOpenMenu} onClick={(e) => e.stopPropagation()}>

                {menuItens1.map((item) => {
                    const Icon = item.icon;
                    return (
                        <MenuItem title={item.name} openMenu={isOpenMenu} key={item.name} onClick={() => navigate(item.link)}>
                            {<Icon size={24} />}
                            <TextSecundario>{item.name}</TextSecundario>
                        </MenuItem>
                    )
                })}

                {isOpenMenu && <Separator />}

                {(isOpenMenu ? menuItens2 : menuItens2.slice(0, 1)).map((item) => (
                    <MenuItem title={item.name} openMenu={isOpenMenu} key={item.name} onClick={() => navigate(item.link)}>
                        {<item.icon size={24} />}
                        <TextSecundario >{item.name}</TextSecundario>
                    </MenuItem>
                ))}

                {login === false && isOpenMenu && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "90%" }}>
                        <Separator />
                        <p style={{ fontSize: "14px" }}>Faça login para curtir vídeos, comentar e se inscrever.</p>
                        <ButtonLogIn />
                    </div>
                )}

                {isOpenMenu && (
                    <>
                        <Separator />
                        <Title>Explorar</Title>
                        {menuItens3.map((item) => {
                            const Icon = item.icon;
                            return (
                                <MenuItem title={item.name} openMenu={isOpenMenu} key={item.name} onClick={() => navigate(item.link)}>
                                    {<Icon size={24} />}
                                    <TextSecundario>{item.name}</TextSecundario>
                                </MenuItem>
                            )
                        })}
                    </>
                )}

                {isOpenMenu && (
                    <>
                        <Separator />
                        <Title>Mais do YouTube</Title>
                        {menuItens4.map((item) => {
                            const Icon = item.icon;
                            return (
                                <MenuItem title={item.name} openMenu={isOpenMenu} key={item.name} onClick={() => navigate(item.link)}>
                                    {<Icon size={24} color="red" />}
                                    <TextSecundario>{item.name}</TextSecundario>
                                </MenuItem>
                            )
                        })}
                    </>
                )}

                {isOpenMenu && <Separator />}

                {isOpenMenu && (
                    <>
                        
                        {menuItensMore.map((item) => {
                            const Icon = item.icon;
                            return (
                                <MenuItem title={item.name} openMenu={isOpenMenu} key={item.name} onClick={() => navigate(item.link)}>
                                    {<Icon size={24} />}
                                    <TextSecundario>{item.name}</TextSecundario>
                                </MenuItem>
                            )
                        })}
                    </>
                )}
            </Container>
        </>
    );
};
