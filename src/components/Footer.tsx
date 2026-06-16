import LogoIcon from "@/app/assets/logo-icon.svg";
import InstLogo from "@/app/assets/insta-logo.svg";
import LinkedinLogo from "@/app/assets/linkedin-logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-[1440px] mx-auto px-25 pb-25">
      <div className="w-[1240px] h-[408px] bg-dark rounded-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-13.25 pt-17.25 mb-16.5">
          {/* Brand */}
          <div className="md:col-span-1 mt-[1px]">
            <div className="flex items-center gap-1.5 mb-7.75">
              <Image src={LogoIcon} alt="logo"/>
              <span className="text-white font-bold text-3xl">Habitus</span>
            </div>
            <p className="text-gray-subline text-[16px] leading-[1.375em] mb-7.25 -ml-0.75">
              Track your daily routines, stay consistent, and turn goals into habits — all in one beautiful app.
            </p>
            {/* Social icons */}
            <div className="flex gap-5 -ml-0.75">
              {/* Instagram */}
              <a href="#">
                <Image src={InstLogo} alt="" />
              </a>
              {/* LinkedIn */}
              <a href="#">
                <Image src={LinkedinLogo} alt="" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="px-25">
            <p className="text-white font-semibold text-[16px] mb-6">Product</p>
            <ul className="space-y-4">
              {["Features", "Pricing", "FAQ", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-subline text-[16px] hover:text-gray-subline/80 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="px-8.25">
            <p className="text-white font-semibold text-[16px] mb-6">Company</p>
            <ul className="space-y-4">
              {["About", "Contact", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-subline text-[16px] hover:text-gray-subline/80 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="-mx-[35px]">
            <p className="text-white font-semibold text-[16px] mb-6.5">Newsletter</p>
            <p className="text-muted text-[14px] mb-4.25">Get tips &amp; updates in your inbox</p>
            <div className="space-y-3.25">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-subimtbg border border-submitstroke w-[285px] rounded-full px-6.5 py-2 text-[16px] placeholder:text-submit"
              />
              <button
                className="bg-orange w-[285px] text-white py-2.25 rounded-full text-[16px] hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-subimtbg w-full pt-7">
          <p className="text-center text-muted text-[16px]">
            © 2025 Habitus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
