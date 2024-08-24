import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AdminLogout() {
    useEffect(() => {
        LogOut();
    }, []);

    const navigate = useNavigate();

    const LogOut = () => {
        sessionStorage.clear();
        navigate("/admin/login");
    }

    return (
        <></>
    )
}
