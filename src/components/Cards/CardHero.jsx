import Link from "next/link";
import React from "react";

function CardHero() {
  return (
    <section>
      <div className="flex px-28 justify-center">
        <div className="bg-[url('/assets/images/hero1.png')] bg-cover w-1/2 max-w-2xl flex flex-col  justify-center px-20">
          <h4 className="text-4xl font-bold my-4">
            WE MADE YOUR EVERYDAY FASHION BETTER!
          </h4>
          <p className="text-lg font-light mb-4">
            In our journey to improve everyday fashion, euphonia presents
            EVERYDAY wear range - Comfortable & Affordable fashion 24/7
          </p>
          <div className="mt-4">
            <Link
              href=""
              className="px-12 py-4 bg-white text-black font-semibold rounded-xl text-center"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="w-1/2 max-w-2xl">
          <img src="/assets/images/hero2.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default CardHero;