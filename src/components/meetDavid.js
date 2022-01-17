import React from "react";
import background from "../images/so-white.png"
import davidhaas from "../images/david-haas.jpg"

export default function MeetDavid() {
    return (
        <div className="mt-24 bg-white text-gray-900 mx-auto flex justify-center align-bottom p-12" style={{ backgroundImage: `url(${background})`}}>
            <div>
                <img className="rounded-full" src={`${davidhaas}`} alt="David Haas Profile"/>
            </div>
            <div className="text-lg pl-12 w-1/4">
            <p>Hi! I'm David Haas. I'm an Executive Director, freelance writer and visual creator. I was born and raised in Syracuse, NY. I post about the history and stories of the Central New York area.</p>
            </div>
            
        </div>
    )
}