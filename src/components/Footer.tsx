import LogoIcon from "@/app/assets/logo-icon.svg";
import InstLogo from "@/app/assets/insta-logo.svg";
import LinkedinLogo from "@/app/assets/linkedin-logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="max-w-[1440px] w-full mx-auto px-4 md:px-14 lg:px-25 pb-10 md:pb-25">
      <div className="w-full h-auto bg-dark rounded-[24px] md:rounded-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 px-6 md:px-13.25 pt-10 md:pt-17.25 mb-16.5">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1 mt-[1px]">
            <div className="flex items-center gap-1.5 mb-6 md:mb-7.75">
              <Image src={LogoIcon} alt="logo" />
              <span className="text-white font-bold text-3xl">Habitus</span>
            </div>
            <p className="text-gray-subline text-[16px] leading-[1.375em] mb-6 md:mb-7.25 -ml-0.75">
              Track your daily routines, stay consistent, and turn goals into habits — all in one beautiful app.
            </p>
            <div className="flex gap-5 -ml-0.75">
              <a href="#" aria-label="Instagram">
                <Image src={InstLogo} alt="" />
              </a>
              <a href="#" aria-label="LinkedIn">
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
          <div className="-mx-8.75">
            <p className="text-white font-semibold text-[16px] mb-6 md:mb-6.5">Newsletter</p>
            <p className="text-muted text-[14px] mb-4 md:mb-4.25">Get tips &amp; updates in your inbox</p>
            <div className="space-y-3 md:space-y-3.25 md:mr-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-subimtbg border border-submitstroke w-full rounded-full px-6.5 py-2 text-[16px] placeholder:text-submit"
              />
              <button className="bg-orange w-full text-white py-2.25 rounded-full text-[16px] hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-subimtbg w-full py-7">
          <p className="text-center text-muted text-[16px]">
            © 2025 Habitus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
