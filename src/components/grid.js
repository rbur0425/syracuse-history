import React from "react";
import Card from "./card";
import background from "../images/so-white.png"

export default function Grid() {
    return (
        <div className="text-white bg-repeat w-full mt-2" style={{ backgroundImage: `url(${background})` }}>
            <div className="flex flex-wrap items-center justify-center w-3/4 mx-auto">
              {
                Array.from(Array(24)).map((element, index) => <Card key={index} />)
              }
              </div>
            
        </div>
    )
}