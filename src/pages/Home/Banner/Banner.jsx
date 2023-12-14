import { useState } from "react";
import Modal from "./Modal";

const Banner = () => {
    const [session, setSession] = useState(false);

    return (
        <div className="relative">
            <div className="flex flex-col justify-center items-center gap-5 absolute left-1/2 top-1/2 w-72 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-2xl text-center leading-snug font-extrabold text-gray-600 text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-pink-700 drop-shadow-2xl">Hey,  Manage your task  with us. Experience  the power  of time management.</h2>
                <button onClick={()=>setSession(true)} className="btn btn-success font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-transparent">Start a session</button>
            </div>
            <img className="w-full rounded-md" src="https://images.unsplash.com/photo-1499377193864-82682aefed04?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            {
                session && <>
                    <div className="absolute w-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-md ">
                        <Modal showMe={setSession}></Modal>
                    </div>
                </>
            }
        </div>
    );
};

export default Banner;