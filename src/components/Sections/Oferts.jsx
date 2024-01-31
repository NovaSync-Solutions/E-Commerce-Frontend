import React from "react";

function Oferts() {
  return (
    <section className="bg-gray-700 w-full pb-8">
      <div className="text-center py-10">
        <h5 className="text-4xl text-white font-bold">Top Brands Deal</h5>
        <p className="text-sm pt-3 text-zinc-950 font-medium">
          Up To <span className="text-yellow-400">60%</span> off on brands
        </p>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <div className="w-[120px] h-[55px] bg-gray-50 mb-2  p-2 md:mx-3">
          <img src="/assets/images/brands/nike.png" alt="" className="h-full w-full" />
        </div>

        <div className="w-[120px] h-[55px] bg-gray-50 mb-2 p-2 md:mx-3">
          <img src="/assets/images/brands/levis.png" alt="" className="h-full w-full"/>
        </div>

        <div className="w-[120px] h-[55px] bg-gray-50 mb-2 p-2 md:mx-3">
          <img src="/assets/images/brands/hym.png" alt="" className="h-full w-full"/>
        </div>

        <div className="w-[120px] h-[55px] bg-gray-50 mb-2 p-2 md:mx-3">
          <img src="/assets/images/brands/polo.png" alt="" className="h-full w-full"/>
        </div>

        <div className="w-[120px] h-[55px] bg-gray-50 mb-2 p-2 md:mx-3">
          <img src="/assets/images/brands/puma.png" alt="" className="h-full w-full"/>
        </div>
      </div>
    </section>
  );
}

export default Oferts;
