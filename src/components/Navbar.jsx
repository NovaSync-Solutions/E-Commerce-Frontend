import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <header className="flex items-center w-full text-black bg-slate-100 h-16 px-28">
      <nav className="flex gap-5 items-center justify-around w-full">
        <Image src="" width={20} height={20} alt="logo" />
        <div>
            <Link href="">Shop</Link>
            <Link href="">Men</Link>
            <Link href="">Woman</Link>
            <Link href="">Combos</Link>
            <Link href="">Joggers</Link>
        </div>
        <input type="text" />
        <div className="flex gap-2">
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