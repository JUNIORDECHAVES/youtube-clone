import { useState, useRef, useEffect, useContext } from "react";
import { CategoriaButton, Container, ScrollButtonWrapper, ScrollButton, CategoryContainer } from "./style";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { MenuContext } from "../../contexts/UseMenu";
import useSearchCategory from "../../contexts/SearchCategory";


export const CategoryBar = () => {

    const { selectdCategory, setSelectdCategory } = useSearchCategory();
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(false);

    const categoryButtons = [
        { id: '0', name: 'Tudo' },
        { id: "1", name: "Film & Animation" },
        { id: "2", name: "Autos & Vehicles" },
        { id: "10", name: "Music" },
        { id: "15", name: "Pets & Animals" },
        { id: "17", name: "Sports" },
        { id: "18", name: "Short Movies" },
        { id: "19", name: "Travel & Events" },
        { id: "20", name: "Gaming" },
        { id: "21", name: "Videoblogging" },
        { id: "22", name: "People & Blogs" },
        { id: "23", name: "Comedy" },
        { id: "24", name: "Entertainment" },
        { id: "25", name: "News & Politics" },
        { id: "26", name: "Howto & Style" },
        { id: "27", name: "Education" },
        { id: "28", name: "Science & Technology" },
        { id: "30", name: "Movies" },
        { id: "31", name: "Anime/Animation" },
        { id: "32", name: "Action/Adventure" },
        { id: "33", name: "Classics" },
        { id: "34", name: "Comedy" },
        { id: "35", name: "Documentary" },
        { id: "36", name: "Drama" },
        { id: "37", name: "Family" },
        { id: "38", name: "Foreign" },
        { id: "39", name: "Horror" },
        { id: "40", name: "Sci-Fi/Fantasy" },
        { id: "41", name: "Thriller" },
        { id: "42", name: "Shorts" },
        { id: "43", name: "Shows" },
        { id: "44", name: "Trailers" }
    ];

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

            <ScrollButtonWrapper position="left" isopen={isOpenMenu} show={showLeftButton}>
                <ScrollButton onClick={() => scrollContainer("left")} aria-label="Scroll left" role="button">
                    <MdOutlineArrowBackIos />
                </ScrollButton>
            </ScrollButtonWrapper>

            <Container isopen={isOpenMenu} ref={containerRef}>
                {categoryButtons.map((category) => (
                    <CategoriaButton
                        key={category.id}
                        Selected={selectdCategory === category.id}
                        onClick={() => setSelectdCategory(category.id)}
                        title={category.name}>
                        {category.name}
                    </CategoriaButton>
                ))}
            </Container>

            <ScrollButtonWrapper position="right" isopen={isOpenMenu} show={showRightButton}>
                <ScrollButton onClick={() => scrollContainer("right")} aria-label="Scroll right" role="button">
                    <MdOutlineArrowForwardIos />
                </ScrollButton>
            </ScrollButtonWrapper>

        </CategoryContainer>
    );
};