import { useNavigate } from "react-router-dom"
import { Button } from "./style"
import { MdAccountCircle } from "react-icons/md";


export const ButtonLogIn = () => {
    const navigate = useNavigate();
    return (
        <Button onClick={() => navigate("/login")}>
            <MdAccountCircle size={24} color="#1a73e8" />
            <span>Fazer Login</span>
        </Button>
    )
}