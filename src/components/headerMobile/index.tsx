import { ButtonSearchImg, ContainerContent, ContainerHeaderMobile, ContentSearch, LogoImg } from "./style";
import Logo from "../../assets/YouTube-Logo.png"
import Lupa from "../../assets/search.png"


export function HeaderMobile() {

    return (
        <ContainerHeaderMobile>

            <ContainerContent>
                <LogoImg src={Logo} />
            </ContainerContent>

            <ContainerContent>
                <ContentSearch>
                    <ButtonSearchImg src={Lupa} />
                </ContentSearch>
            </ContainerContent>

        </ContainerHeaderMobile>
    )
}