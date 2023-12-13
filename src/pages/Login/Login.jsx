import { Link, useNavigate } from "react-router-dom";
import './background.css'
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = useAuth();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, loginUser);
        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Welcome, ${user?.displayName}. Manage your time precisly.`,
                    showConfirmButton: false,
                    timer: 2500
                });
                navigate("/");
                console.log(user?.displayName, "is logged in.");
            })
            .catch(()=>{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `Enter your email and password correctly.`,
                    showConfirmButton: false,
                    timer: 2500
                });
            })

    }

    return (
        <div className="flex flex-col w-full p-5 items-center justify-center background rounded-md pb-5">
            <h2 className="text-center my-5 font-bold text-2xl">Time is the precious currency</h2>
            <form onSubmit={handleLogin} className="font-semibold flex flex-col items-center gap-4 border-2 p-5 rounded-md border-pink-500 bg-pink-500 bg-opacity-100">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-bold">What is your email?</span>
                    </div>
                    <input type="email" name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-bold">Input Your password.</span>
                    </div>
                    <input type="password" name="password" placeholder="Type your password" className="input input-bordered w-full max-w-xs" />
                </label>
                <input type="submit" value="Login" className="btn btn-sm font-bold" />
                <div className="divider"></div>
                <span className="font-bold">Don't have an account? <Link to={"/signup"}><span className="text-blue-800 font-bold">Please Register.</span></Link></span>
            </form>
        </div>
    );
};

export default Login;