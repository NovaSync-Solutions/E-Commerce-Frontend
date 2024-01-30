import React from "react";
import CardNewArrival from "./CardNewArrival";

function NewArrival() {
  return (
    <section className="flex-col px-28">
      <h2>New arrivals</h2>
      <div className="flex justify-center gap-10">
        <CardNewArrival></CardNewArrival>
        <CardNewArrival></CardNewArrival>
        <CardNewArrival></CardNewArrival>
        <CardNewArrival></CardNewArrival>
        <CardNewArrival></CardNewArrival>
      </div>
    </section>
  );
}

export default NewArrival;
