/* eslint-disable react/prop-types */

import { useState } from "react";
import Timer from "../Timer/Timer";
import { IoCloseSharp } from "react-icons/io5";


const Modal = ({ showMe }) => {
    const [sessionValues, setSessionValues] = useState({});
    const handleModalClose = () => {
        showMe(false);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const limit = form.limit.value;
        setSessionValues({ name, limit });
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
            {/* <ProgressBar
                completed={60}
                borderRadius="20px"
                labelColor="#ffffff"
                padding="1px"
                transitionDuration="300ms"
                maxCompleted={100}
            /> */}
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