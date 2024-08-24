import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AdminSidebar from '../admin/AdminSidebar';
import { useEffect } from 'react';
import AdminNavbar from '../admin/AdminNavbar';
import AdminFooter from '../admin/AdminFooter';

const AdminRoute = () => {

    const navigate = useNavigate();

    useEffect(() => {
        checkLoggedIn();
    }, []);

    const checkLoggedIn = () => {
        if (!sessionStorage.getItem("name")) {
            navigate("/admin/login");
        }
    }

    const location = useLocation();

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center font-poppins">
            <div className="w-full h-full flex items-start justify-start">
                <div className="w-96 relative h-full flex flex-col items-start justify-start">
                    <AdminSidebar currentPath={location.pathname} />
                </div>
                <div className="w-[calc(100%-5rem)] h-auto min-h-screen relative flex flex-col items-start justify-start font-poppins">
                    <AdminNavbar />
                    <div className='px-10 py-6 w-full h-auto'>
                        <Outlet />
                        <br />
                    </div>
                    <AdminFooter />
                </div>
            </div>
        </div>
    );
};

export default AdminRoute;