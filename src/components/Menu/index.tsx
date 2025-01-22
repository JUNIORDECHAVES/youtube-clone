import { useContext } from "react"
import { ButtonIcon, Container, MenuItem } from "./style"
import { MenuContext } from "../../contexts/UseMenu"

import HomeIcon from "../../assets/home.png"
import LibraryIcon from "../../assets/library.png"
import HistoryIcon from "../../assets/history.png"
import { useNavigate } from "react-router-dom"


const itens = [
    { name: "início", src: HomeIcon, link: "/" },
    { name: "Biblioteca", src: LibraryIcon, link: "/library" },
    { name: "Histórico", src: HistoryIcon, link: "/history" },
]

type Props = {
    openMenu: boolean
}


export const Menu = () => {
    const { isOpenMenu } = useContext(MenuContext);

    const navigate = useNavigate()
    return (
        <Container openMenu={isOpenMenu}>
            {itens.map((item) => (
                <MenuItem openMenu={isOpenMenu} key={item.name} onClick={() =>navigate(item.link)}>
                    <ButtonIcon alt={item.name} src={item.src} />
                    <span>{item.name}</span>
                </MenuItem>
            )
            )}
        </Container>
    )
}