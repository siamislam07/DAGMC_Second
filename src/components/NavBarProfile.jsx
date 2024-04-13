import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const NavBarProfile = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div>
            {
            user ?
                <div className="dropdown dropdown-end tooltip  tooltip-bottom tooltip-secondary"  data-tip={user?.displayName}>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/wC75hKV/user.png' } />
                        </div>
                    </label>
                    <ul tabIndex={0} title={user?.displayName} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                        <li>
                            <Link to="/profile" className="justify-between">
                                Profile
                                <span className="badge">{user?.displayName ? user?.displayName : user?.email}</span>
                            </Link>
                        </li>

                        <li><a onClick={handleLogOut} className="">Logout</a></li>
                    </ul>
                </div>
                : ''
        }
        </div>
    );
};

export default NavBarProfile;