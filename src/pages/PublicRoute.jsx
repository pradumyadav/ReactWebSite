import { Outlet, useLocation } from 'react-router-dom';

const PublicRoute = () => {

    return (
        <div className="">
            <Outlet />
        </div>
    );
};

export default PublicRoute;