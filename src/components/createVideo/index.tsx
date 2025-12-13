import { useEffect, useRef, useState } from "react";
import { Button, Container, IconVideo, ItemVideo, MenuVideo, TextVideo } from "./style"
import { MdVideoLibrary, MdLiveTv, MdPostAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const CreatevideoDropdown = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const tipopost = [
        {
            tipo: "enviar vídeo",
            icon: MdVideoLibrary,
            link: "/enviar-video",
        },
        {
            tipo: "transmitir ao vivo",
            icon: MdLiveTv,
            link: "/transmitir-ao-vivo",
        },
        {
            tipo: "criar postagem",
            icon: MdPostAdd,
            link: "/criar-postagem",
        }
    ]

    const toggleTypepost = () => {
        setIsOpen(!isOpen);
    };

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <Container ref={menuRef}>
            <Button onClick={toggleTypepost}>+ criar</Button>
            
            {isOpen &&(
                <MenuVideo>

                    {tipopost.map((item, index) => (
                        <ItemVideo key={index} onClick={() => navigate(item.link)}>
                            <IconVideo>{<item.icon/>}</IconVideo>
                            <TextVideo>{item.tipo}</TextVideo>
                        </ItemVideo>
                    ))}
                    
                </MenuVideo>
            )}
        </Container>
    )
}
