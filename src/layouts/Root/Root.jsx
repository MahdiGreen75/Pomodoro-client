import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Home/Navbar/Navbar";


const Root = () => {
    return (
        <div className="mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;