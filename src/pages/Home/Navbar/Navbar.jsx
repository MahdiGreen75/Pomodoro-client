import { FcAlarmClock } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders/AuthProvider";

const Navbar = () => {
    const user = useAuth();

    // console.log(user);
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><FcAlarmClock /> Pomodoro</a>
            </div>
            <div className="flex-none gap-2">
                {
                    user ?
                        <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="border-2 mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a> Profile</a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </>
                        :
                        <>
                        <button className="btn btn-sm">Login</button>
                        </>
              }
            </div>
        </div>
    );
};

export default Navbar;