import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import './background.css'

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const password = form.password.value;
        console.log(name, password);

    }

    return (
        <div className="flex w-full p-5 items-center justify-center background">
           
            <form onSubmit={handleLogin} className="font-semibold flex flex-col items-center gap-4 border-2 p-5 rounded-md">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Input Your password.</span>
                    </div>
                    <input type="password" name="password" placeholder="Type your password" className="input input-bordered w-full max-w-xs" />
                </label>
                <input type="submit" value="Login" className="btn btn-sm" />
                <div className="divider"><span className="font-bold">OR</span></div>
                <Link>
                    <span className="font-semibold flex justify-center items-center gap-2">Sign in with  <FcGoogle className="text-2xl" /></span>
                </Link>
                <div className="divider"></div>
                <span>Don't have an accoutn? <Link><span className="text-blue-800 font-bold">Please Register.</span></Link></span>
            </form>
        </div>
    );
};

export default Login;