import React from "react";
import CardExploreNow from "../Cards/CardExploreNow";

function ExploreNow() {
  return (
    <section className="mx-48 mt-20">
      <div className="flex items-center mb-6">
        <div className="rounded w-2 h-12 bg-purple-600"></div>
        <h2 className="text-3xl ml-3 font-bold">Categories For Men</h2>
      </div>
      <div className="flex container gap-10 items-center justify-between mb-10">
        <CardExploreNow />
        <CardExploreNow />
        <CardExploreNow />
        <CardExploreNow />
      </div>
      <div className="flex container gap-10 items-center justify-between">
        <CardExploreNow />
        <CardExploreNow />
        <CardExploreNow />
        <CardExploreNow />
      </div>
    </section>
  );
}

export default ExploreNow;
