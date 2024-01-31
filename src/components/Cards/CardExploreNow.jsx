import React from "react";
import Link from "next/link";

function CardExploreNow() {
  return (
    <Link href="">
      <div className="w-60">
        <div className="bg-slate-700 w-60 h-80 rounded-xl">
          <img src="" alt="" className="w-full h-full"/>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h6 className="text-xl font-medium mt-2">Shirts</h6>
            <p className="text-gray-500">Explore Now!</p>
          </div>
          <div>
            <p className="text-xl font-bold">-{`>`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardExploreNow;
