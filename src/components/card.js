import React from "react";

export default function Card() {
    return (
        <div className="m-4 max-w-sm rounded-md overflow-hidden shadow-lg bg-gray-50">
        <img className="w-full" src="https://wallpaperaccess.com/full/2786602.jpg" alt="#" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-900 mb-2">Post Title</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
    )
}