"use client";
import { Dropdown } from "flowbite";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap justify-between bg-[#F85606]">
      <div className=" gap-x-3">
        <div
          className={`flex flex-row   justify-evenly  space-x-20 p-3  text-yellow-50  `}
        >
          <img
            src="https://play-lh.googleusercontent.com/5_nDnWCFaqolItaSGwNRE4mLv-lgNPFrqRSUVrS0_wkm0A3XkK7GDVziIDvZQxGMtSIt"
            className="h-10 "
          ></img>
          <div className="hover:bg-[#DF4D05] p-2 rounded-lg">
            <Link href="/" className={`${pathname === "/" ? "shadow-md" : ""}`}>
              Home
            </Link>
          </div>
          {/* `isusedforapplyingjavascript`${}=>thesearethesyntax */}

          <div className="hover:bg-[#DF4D05] p-2 rounded-lg">
            <Link
              href="/Helpdesk"
              className={`${pathname === "/about-us" ? "shadow-md " : ""}`}
            >
              Help desk
            </Link>{" "}
          </div>

          <div className="hover:bg-[#DF4D05]  p-2 rounded-lg ">
            <Link
              href="/videos"
              className={`${pathname === "/videos" ? "shadow-md" : ""}`}
            >
              Location
            </Link>
          </div>
          <div className="hover:bg-[#DF4D05] p-2 rounded-lg ">
            <Link
              href="/login"
              className={`${pathname === "/login" ? "shadow-md" : ""}`}
            >
              Log In
            </Link>
          </div>
          <div className="hover:bg-[#DF4D05] p-2 rounded-lg">
            <Link
              href="/sign-in"
              className={`${pathname == "/sign-in" ? "shadow-md" : ""}`}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full hover:bg-[#DF4D05]  rounded-lg  p-3 ">
          <form className="text-black  ">
            <label htmlFor="search"></label>

            <input
              type="search"
              id="search"
              name="search"
              placeholder="search here"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
