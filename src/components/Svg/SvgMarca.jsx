import React from "react";

function SvgMarca() {
  return function SvgMarca({ ruta, alt }) {
    return (
      <div className="w-40">
        <img src={ruta} alt={alt} className="w-full h-auto" />
      </div>
    );
  };
}

export default SvgMarca;
