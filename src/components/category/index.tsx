import { useState, useRef, useEffect, useContext } from "react";
import { CategoriaButton, Container, ScrollButtonWrapper, ScrollButton, CategoryContainer } from "./style";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { MenuContext } from "../../contexts/UseMenu";

interface CategoriaProps {
    categorys: string[];
}

export const Category = ({ categorys }: CategoriaProps) => {
    const [categoryAtiva, setCategoryAtiva] = useState<string>("Todos");
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(false);

    const containerRef = useRef<HTMLDivElement | null>(null);

    const checkScroll = () => {
        if (containerRef.current) {
            const { scrollWidth, clientWidth, scrollLeft } = containerRef.current;
            const hasLeftScroll = scrollLeft > 0;
            const hasRightScroll = scrollLeft < scrollWidth - clientWidth;
            setShowLeftButton(hasLeftScroll);
            setShowRightButton(hasRightScroll);
        }
    };

    const scrollContainer = (direction: "left" | "right") => {
        if (containerRef.current) {
            const scrollAmount = direction === "left" ? -200 : 200;
            containerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            checkScroll();
            container.addEventListener("scroll", checkScroll);
            return () => {
                container.removeEventListener("scroll", checkScroll);
            };
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                scrollContainer("left");
            } else if (e.key === "ArrowRight") {
                scrollContainer("right");
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const { isOpenMenu } = useContext(MenuContext);

    return (
        <CategoryContainer isopen={isOpenMenu}>

            <ScrollButtonWrapper position="left" show={showLeftButton}>
                <ScrollButton onClick={() => scrollContainer("left")} aria-label="Scroll left" role="button">
                    <MdOutlineArrowBackIos />
                </ScrollButton>
            </ScrollButtonWrapper>

            <Container isopen={isOpenMenu} ref={containerRef}>
                {categorys.map((category, index) => (
                    <CategoriaButton
                        key={index}
                        ativa={categoryAtiva === category}
                        onClick={() => setCategoryAtiva(category)}
                        title={category}>
                        {category}
                    </CategoriaButton>
                ))}
            </Container>

            <ScrollButtonWrapper position="right" show={showRightButton}>
                <ScrollButton onClick={() => scrollContainer("right")} aria-label="Scroll right" role="button">
                    <MdOutlineArrowForwardIos />
                </ScrollButton>
            </ScrollButtonWrapper>
            
        </CategoryContainer>
    );
};