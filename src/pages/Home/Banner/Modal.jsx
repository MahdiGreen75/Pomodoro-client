/* eslint-disable react/prop-types */

import { useState } from "react";
import Timer from "../Timer/Timer";
import { IoCloseSharp } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth/useAuth"
import axios from "axios";

const Modal = ({ showMe }) => {
    const { user } = useAuth();
    // const [completeSession, setCompleteSession] = useState(false);

    const [sessionValues, setSessionValues] = useState({});
    const handleModalClose = () => {
        showMe(false);
    }

    let percipator = {};
    percipator.isSessionCompleted = false;
    console.log("Initial percipator:", percipator);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const limit = form.limit.value;

        console.log("Form values:", name, limit, user?.email);

        //user who joined the session
        percipator.email = user?.email;
        percipator.sessionName = name;
        percipator.sessionLimit = limit;

        console.log("Updated percipator:", percipator);
        // DONE: send a post req to the server if 
        // the session is terminated.
        axios.post("https://pomodoro-server.vercel.app/api/v1/uesr/session-list", percipator)
            .then(res => {
                console.log(res.data.insertedId, "is where this data stored.");
                setSessionValues({ name, limit, sessionUpdateId: res.data.insertedId });
            })

    }

    return (
        <div className="p-5 pt-10 border-2 relative border-blue-400 rounded-sm drop-shadow-2xl">
            <form onSubmit={handleFormSubmit} className="space-y-2">
                <input name="name" type="text" placeholder="Session Name" className="input-sm input-bordered input-info w-full rounded-md outline-none placeholder:text-xs" />
                <input name="limit" type="number" placeholder="Enter session limit (min)" className="input-sm input-bordered input-info w-full rounded-md outline-none placeholder:text-xs" />
                <div className="w-full flex justify-center items-center">
                    <input name="" type="submit" value="Go" className="btn btn-sm font-extrabold" />
                </div>
            </form>
            <div className="divider"></div>

            {
                sessionValues.name && <>
                    <Timer {...sessionValues}></Timer>
                </>
            }
            <button className="p-1 bg-transparent absolute top-0 right-0" onClick={handleModalClose}><IoCloseSharp className="font-bold text-2xl" /></button>
        </div>
    );
};

export default Modal;