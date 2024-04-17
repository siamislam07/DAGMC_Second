import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
    const [admin, setAdmin] = useState(false)
    const { pathname } = useLocation()

    const { user } = useContext(AuthContext)
    useEffect(() => {
        if (user?.email === import.meta.env.VITE_EMAIL) {
            setAdmin(true)
        }
        else {
            setAdmin(false)
        }
    }, [user])
    // console.log(pathname);
    // console.log(admin);


    return (
        <div className="flex flex-col  justify-center items-center mt-24">
            <div className="flex gap-1 tabs">
                <NavLink
                    // className={pathname === '/dashboard/profile' ? 'active' : ''}
                    to="/">Home
                </NavLink>
                <NavLink
                    className={pathname === '/dashboard/profile' ? 'active' : ''}
                    to="/dashboard/profile">Profile
                </NavLink>
                {admin && <NavLink
                    className={pathname === '/dashboard/uploadImage' ? 'active' : ''}
                    to="/dashboard/uploadImage">UploadImage
                </NavLink>}
                <NavLink
                    // className={pathname === '/dashboard/uploadImage' ? 'active' : ''}
                    to="/gallery">Gallery
                </NavLink>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;