import React from "react";
import "./NotFound.css";
import "../../css/tailwind.css"
import DarkmodeToggle from "../../components/DarkmodeToggle";
import ImpressPrivacy from "../../components/ImpressPrivacy";

const Notfound = () => (
    <div className="not-found dark\:bg-gray-800 dark\:text-gray-200 trans">
        <h1 id="robot_face">{"<|°_°|>"}</h1>
        <h2>Not found</h2>
        <span className="text-base flex italic"><span className="flex"><span className="mt-2"><DarkmodeToggle/></span><span className="mt-2 italic mx-2"> | </span><ImpressPrivacy /></span></span>
    </div>
);
export default Notfound;
