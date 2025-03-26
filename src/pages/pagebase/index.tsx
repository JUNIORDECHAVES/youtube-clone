import Header from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Outlet } from "react-router-dom";

export const PageBase = () => {
    return (
        <>
            <Header />
            <div style={{ width: "100%", display: "flex" }}>
                <Menu />
                <main
                    style={{
                        width: "100%",
                        padding: "10px",
                        boxSizing: "border-box",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Outlet />
                </main>
            </div>
        </>
    );
};