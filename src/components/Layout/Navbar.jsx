import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <header className="flex items-center w-[90%] m-auto text-black bg-slate-100 h-16 overflow-hidden">
      <nav className="flex items-center justify-between w-full">
        <Image src="" width={20} height={20} alt="logo" />
        <div className="flex">
            <Link href="">Shop</Link>
            <Link href="">Men</Link>
            <Link href="">Woman</Link>
            <Link href="">Combos</Link>
            <Link href="">Joggers</Link>
        </div>
        <input type="text" />
        <div className="flex">
          {/* agregar condicional si esta logueado o no */}
          <Link href="">Icon</Link>
          <Link href="">Icon</Link>
          <Link href="">Icon</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
