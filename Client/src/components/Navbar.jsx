import { useState } from "react";
import { IKImage } from "imagekitio-react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="navbar logo" w={32} h={32} />
        <span>guda blog</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div className="cursor-pointer text-4xl" onClick={() => setOpen(!open)}>
          {open ? "X" : "≡"}
        </div>
        {/* MOBILE MENU CONTENT */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16  transition-all ease-in-out bg-[#e6e6ff] ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="">主页</Link>
          <Link to="">博客</Link>
          <Link to="">最受欢迎</Link>
          <Link to="">关于</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              登录
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="">主页</Link>
        <Link to="">博客</Link>
        <Link to="">最受欢迎</Link>
        <Link to="">关于</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              登录
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
