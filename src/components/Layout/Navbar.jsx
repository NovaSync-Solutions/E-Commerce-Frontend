import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  const buttonNavbar =
    "px-2 py-2 rounded-xl hover:bg-gray-300 ease-in-out duration-300 bg-gray-200";

  return (
    <header className="flex items-center w-full px-36  m-auto text-black bg-slate-100 h-16 overflow-hidden">
      <nav className="flex items-center justify-between w-full">
        <Image src="" width={20} height={20} alt="logo" />
        <div className="flex items-center gap-10 text-lg">
          <Link href="" className="font-semibold">
            Shop
          </Link>
          <Link href="">Men</Link>
          <Link href="">Woman</Link>
          <Link href="">Combos</Link>
          <Link href="">Joggers</Link>
        </div>
        <input type="text" />
        <div className="flex gap-4 jus items-center text-slate-600 text-2xl">
          {/* agregar condicional si esta logueado o no */}
          <Link href="" className={buttonNavbar}>
            <IoMdHeartEmpty />
          </Link>
          <Link href="" className={buttonNavbar}>
            <RiUserLine />
          </Link>
          <Link href="" className={buttonNavbar}>
            <IoCartOutline />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
