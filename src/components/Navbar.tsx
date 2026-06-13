import LogoIcon from "@/app/assets/logo-icon.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12.5 py-[50px]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src={LogoIcon} alt="logo"/>
        <span className="text-white font-bold text-3xl">Habitus</span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-7">
        {["Home", "Features", "How it works", "Blog", "Resources", "About Us"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-white text-lg font-medium hover:text-white/80 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Log In button */}
      <button className="bg-white text-[#111827] text-base font-semibold px-[33px] py-[8px] rounded-full hover:bg-white/90 transition-colors">
        Log In
      </button>
    </nav>
  );
}
