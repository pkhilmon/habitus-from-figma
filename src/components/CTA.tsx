import Image from "next/image";
import CTALogo from "@/app/assets/CTA-Logo.svg";

export default function CTA() {
  return (
    <section className="w-[1440px] mx-auto px-25 pt-27.25">
      <div className="rounded-[40px] px-20 pt-20 pb-19 bg-light-blue">
        <div className="flex flex-col items-stretch">
          {/* Logo mark */}
          <Image src={CTALogo} alt="" />
          <div className="grid grid-cols-2 justify-stretch mt-25">
            {/* heading */}
            <h2 className="text-[85px] font-normal text-dark tracking-[0.007em] leading-[1.21]">
              Ready to<br />build better<br />habits?
            </h2>

            {/* Right — body + CTA */}
            <div className="justify-self-end flex flex-col justify-between items-end mt-6.25">
              <p className="text-dark text-[20px] leading-[1.615] tracking-[-0.006em] mb-8 text-right">
                Take control of your daily routines, stay consistent<br/>
                with the goals that matter, and build meaningful<br/>
                progress — one habit at a time. With Habitus,<br/>
                you&apos;re just a step away from creating a better<br/>
                version of yourself.
              </p>
              <button
                className="bg-orange text-white font-semibold text-[16px] px-9.75 py-4.25 mb-1 rounded-full hover:opacity-90 transition-opacity"
              >
                Start Tracking – It&apos;s Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
