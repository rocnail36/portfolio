import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className=" h-[50px] flex justify-end items-center max-w-7xl w-[98%] m-auto">
      <div className="flex gap-2 text-[1rem] uppercase font-semibold">
        <Link
          href={"#"}
          className="border-solid border-[1px] py-[15px] leading-[0px] border-slate-300 rounded-[20px] px-[15px] hover:bg-sky-400 hover:text-white"
        >
          inicio
        </Link>

        <div></div>
        <Link
          href={"#"}
          className="border-solid border-[1px] py-[15px] leading-[0px]  
            rounded-[20px] px-[15px] hover:bg-sky-400
             hover:text-white"
        >
          proceso
        </Link>
        <Link
          href={"#"}
          className="border-solid border-[1px] py-[15px] leading-[0px] border-slate-300 rounded-[20px] px-[15px] hover:bg-sky-400 hover:text-white"
        >
          contacto
        </Link>
      </div>
    </div>
  );
};
