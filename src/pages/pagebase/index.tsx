import styled from "styled-components";
import Header from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Outlet } from "react-router-dom";
import { MenuMobile } from "../../components/menuMobile";
import { HeaderMobile } from "../../components/headerMobile";

const ContainerBase = styled.div``;

export const PageBase = () => {
    return (
        <ContainerBase>
            <Header />
            <HeaderMobile />

            <div style={{ width: "100%", display: "flex" }}>
                <Menu />
                <MenuMobile/>
                <main
                    style={{
                        width: "100%",
                        padding: "10px",
                        boxSizing: "border-box",
                        display: "flex",
                    }}
                >
                    <Outlet />
                </main>
            </div>
        </ContainerBase>
    );
};