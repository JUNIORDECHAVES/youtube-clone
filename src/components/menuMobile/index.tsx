import { useNavigate } from "react-router-dom";
import { Container, MenuItem, TextLabel } from "./style";
import { HiOutlineHome } from "react-icons/hi";
import { BsCollectionPlay, BsFileEarmarkPlay } from "react-icons/bs";
import { LuCircleUserRound } from "react-icons/lu";
import { IconType } from "react-icons";
import { UserContext } from "../../contexts/useContext";
import { useContext } from "react";

interface MenuItemType {
    name: string;
    icon: IconType;
    link: string;
}

const MobileMenuItems: MenuItemType[] = [
    { name: "Início", icon: HiOutlineHome, link: "/" },
    { name: "Shorts", icon: BsFileEarmarkPlay, link: "/trending" },
    { name: "Inscrições", icon: BsCollectionPlay, link: "/subscriptions" },
    { name: "Você", icon: LuCircleUserRound, link: "/library" },
];

export const MenuMobile = () => {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const handleNavigate = (link: string) => {
        navigate(link);
    };

    return (
        <Container>
            {(login ? MobileMenuItems : MobileMenuItems.filter((item) => item.name !== "Inscrições")).map((item) => {
                const Icon = item.icon
            return (
                <MenuItem
                    key={item.name}
                    onClick={() => handleNavigate(item.link)}
                    title={item.name}
                >
                    <Icon size={24} />
                    <TextLabel>{item.name}</TextLabel>
                </MenuItem>
            )
            }
        )}
        </Container>
    );
};
