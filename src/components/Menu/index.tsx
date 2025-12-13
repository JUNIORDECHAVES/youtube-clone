import { useContext, useEffect, useState } from "react"
import { ButtonIcon, Container, ContainerFundo, MenuItem, Separator, TextPrincipal, TextSecundario, Title } from "./style"
import { MenuContext } from "../../contexts/UseMenu"

import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/useContext"
import { ButtonLogIn } from "../ButtonLogin"


const Items1 = [
    { name: "Início", src: require("../../assets/home.png"), link: "/" },
    { name: "Shorts", src: require("../../assets/icons8-shorts-do-youtube-24.png"), link: "/trending" },
    { name: "Inscrições", src: require("../../assets/se-inscrever.png"), link: "/subscriptions" },
];

const Items2 = [
    { name: "Você", src: require("../../assets/user.png"), link: "/library" },
    { name: "Historico", src: require("../../assets/history.png"), link: "/history" },
]
const Items3 = [
    { name: "Em Alta", src: require("../../assets/exporar/rocket.png"), link: "/library" },
    { name: "Shopping", src: require("../../assets/exporar/bag.png"), link: "/library" },
    { name: "Música", src: require("../../assets/exporar/music.png"), link: "/library" },
    { name: "Filme", src: require("../../assets/exporar/movie.png"), link: "/library" },
    { name: "Ao Vivo", src: require("../../assets/exporar/live.png"), link: "/library" },
    { name: "Jogos", src: require("../../assets/exporar/game-controller.png"), link: "/library" },
    { name: "Notícias", src: require("../../assets/exporar/noticia.png"), link: "/library" },
    { name: "Esportes", src: require("../../assets/exporar/icons8-troféu-48.png"), link: "/library" },
    { name: "Cursos", src: require("../../assets/exporar/learning.png"), link: "/library" },
    { name: "Podcast", src: require("../../assets/exporar/podcast.png"), link: "/library" },
]

const Items4 = [
    { name: "YouTube Premium", src: require("../../assets/exporar/youtube.png"), link: "/" },
    { name: "YouTube Studio", src: require("../../assets/exporar/play.png"), link: "/trending" },
    { name: "YouTube Music", src: require("../../assets/exporar/youtubemusic.png"), link: "/subscriptions" },
    { name: "YouTube Kids", src: require("../../assets/exporar/youtubeKids.png"), link: "/subscriptions" }
];

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
                {Items1.map((item) => (
                    <MenuItem title={item.name} openMenu={isOpenMenu} key={item.name} onClick={() => navigate(item.link)}>
                        <ButtonIcon alt={item.name} src={item.src} />
                        <TextPrincipal openMenu={isOpenMenu}>{item.name}</TextPrincipal>
                    </MenuItem>
                ))}

                {isOpenMenu && <Separator />}
                
                {(isOpenMenu ? Items2 : Items2.slice(0, 1)).map((item) => (
                    <MenuItem title={item.name} openMenu={isOpenMenu} key={item.name} onClick={() => navigate(item.link)}>
                        <ButtonIcon alt={item.name} src={item.src} />
                        <TextPrincipal openMenu={isOpenMenu}>{item.name}</TextPrincipal>
                    </MenuItem>
                ))}

                {login == false && isOpenMenu && (
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
                        {Items3.map((item) => (
                            <MenuItem title={item.name} openMenu={isOpenMenu} key={item.name} onClick={() => navigate(item.link)}>
                                <ButtonIcon alt={item.name} src={item.src} />
                                <TextSecundario>{item.name}</TextSecundario>
                            </MenuItem>
                        ))}
                    </>
                )}

                {isOpenMenu && (
                    <>
                        <Separator />
                        <Title>Mais do YouTube</Title>
                        {Items4.map((item) => (
                            <MenuItem title={item.name} openMenu={isOpenMenu} key={item.name} onClick={() => navigate(item.link)}>
                                <ButtonIcon alt={item.name} src={item.src} />
                                <TextSecundario>{item.name}</TextSecundario>
                            </MenuItem>
                        ))}
                    </>
                )}

                {isOpenMenu && <Separator />}
            </Container>
        </>
    );
};
