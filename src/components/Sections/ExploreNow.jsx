import React from "react";
import CardExploreNow from "../Cards/CardExploreNow";

function ExploreNow() {
  return (
    <section className="w-[90%] m-auto mt-20 container">
      <div className="flex items-center mb-6">
        <div className="rounded w-2 h-12 bg-purple-600"></div>
        <h2 className="text-3xl ml-3 font-bold">Categories For Men</h2>
      </div>
      <div className="items-center mb-10 flex flex-wrap justify-between gap-7">
        <CardExploreNow />
        <CardExploreNow />
        <CardExploreNow />
        <CardExploreNow />
        <CardExploreNow />
        <CardExploreNow />
        <CardExploreNow />
        <CardExploreNow />
      </div>
    </section>
  );
}

export default ExploreNow;
