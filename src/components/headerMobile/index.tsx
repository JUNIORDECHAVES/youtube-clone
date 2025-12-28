import { ContainerContent, ContainerHeaderMobile, ContentSearch, LogoImg } from "./style";
import Logo from "../../assets/YouTube-Logo.png"
import { IoSearchOutline } from "react-icons/io5";


export function HeaderMobile() {

    return (
        <ContainerHeaderMobile>

            <ContainerContent>
                <LogoImg src={Logo} />
            </ContainerContent>

            <ContainerContent>
                <ContentSearch>
                    <IoSearchOutline />
                </ContentSearch>
            </ContainerContent>

        </ContainerHeaderMobile>
    )
}