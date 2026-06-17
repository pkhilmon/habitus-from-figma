import Image from "next/image";
import CTALogo from "@/app/assets/CTA-Logo.svg";

export default function CTA() {
  return (
    <section className="max-w-[1440px] w-full mx-auto px-5 md:px-14 lg:px-25 pt-12 md:pt-27.25">
      <div className="rounded-[24px] md:rounded-[40px] px-6 md:px-14 lg:px-20 pt-10 md:pt-20 pb-10 md:pb-19 bg-light-blue">
        <div className="flex flex-col items-stretch">
          <Image src={CTALogo} alt="" />
          <div className="grid grid-cols-1 md:grid-cols-2 justify-stretch mt-10 md:mt-25">
            <h2 className="text-[42px] md:text-[65px] lg:text-[85px] font-normal text-dark tracking-[0.007em] leading-[1.21]">
              Ready to build better habits?
            </h2>

            <div className="flex flex-col md:justify-self-end md:justify-between md:items-end mt-6 md:mt-6.25">
              <p className="text-dark text-[18px] md:text-[20px] leading-[1.615] tracking-[-0.006em] mb-6 md:mb-8 md:text-right">
                Take control of your daily routines, stay consistent<br />with the goals that matter, and build meaningful<br />
                progress — one habit at a time. With Habitus,<br />you&apos;re just a step away from creating a better<br />
                version of yourself.
              </p>
              <button className="self-start md:self-auto bg-orange text-white font-semibold text-[16px] px-9.75 py-4.25 mb-1 rounded-full hover:opacity-90 transition-opacity">
                Start Tracking – It&apos;s Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
