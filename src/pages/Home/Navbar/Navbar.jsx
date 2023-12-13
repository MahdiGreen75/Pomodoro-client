import { FcAlarmClock } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOutUser } = useAuth();
    // const currentUser = user?.displayName;
    // console.log(currentUser);
    return (
        <div className="navbar bg-blue-500 border-b-2 border-blue-800 rounded-md mb-2">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><FcAlarmClock />Pomodoro</a>
            </div>
            <div className="flex-none gap-2">
                {
                    user ?
                        <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="border-2 mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a> Profile</a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a onClick={()=>logOutUser().then(()=>{
                                        Swal.fire({
                                            position: "center",
                                            icon: "success",
                                            title: `Good bye, ${user?.displayName}`,
                                            showConfirmButton: false,
                                            timer: 1500
                                          });
                                    })}>Logout</a></li>
                                </ul>
                            </div>
                        </>
                        :
                        <>
                            <Link to={"/login"}>
                                <button className="btn btn-sm">Login</button>
                            </Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;