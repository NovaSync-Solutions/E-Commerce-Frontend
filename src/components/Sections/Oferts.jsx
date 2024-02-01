import React from "react";
import SvgMarca from "../Svg/SvgMarca";

function Ofertas() {
  return (
    <section className="bg-white  my-20   border-black w-full pb-8">
      <div className="text-center py-10">
        <h5 className="text-4xl text-black font-extrabold">
          Ofertas de las Mejores Marcas
        </h5>
        <p className="text-lg pt-3 text-zinc-950 font-bold">
          Hasta <span className="text-yellow-400">60%</span> de descuento en
          marcas
        </p>
      </div>
      <div className="flex text-xl flex-col items-center md:flex-row md:gap-20 md:justify-center">
        <SvgMarca ruta="/assets/images/brands/nike.svg" alt="Logo de Nike" />
        <SvgMarca ruta="/assets/images/brands/levis.svg" alt="Logo de Levi's" />
        <SvgMarca ruta="/assets/images/brands/puma.svg" alt="Logo de Puma" />
        <SvgMarca
          ruta="/assets/images/brands/adidas.svg"
          alt="Logo de Adidas"
        />
        <SvgMarca
          ruta="/assets/images/brands/supreme.svg"
          alt="Logo de Supreme"
        />
      </div>
    </section>
  );
}

export default Ofertas;
