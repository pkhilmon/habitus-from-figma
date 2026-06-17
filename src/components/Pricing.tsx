import CheckIcon from "@/app/assets/check-icon.svg";
import LockIcon from "@/app/assets/lock-icon.svg";
import Image from "next/image";

const freeFeatures = [
  { text: "Track unlimited habits", included: true },
  { text: "Daily reminders", included: true },
  { text: "Streaks & basic analytics", included: true },
  { text: "Light & dark mode", included: true },
  { text: "No credit card required", included: true, muted: true },
];

const premiumFeatures = [
  "Everything in Free",
  "Advanced analytics",
  "Habit templates & suggestions",
  "Cloud backup & device sync",
  "Premium themes and icons",
  "Priority support",
];

export default function Pricing() {
  return (
    <section className="max-w-[1440px] w-full mx-auto px-5 md:px-14 lg:px-25 pt-12 md:pt-29.25">
      <div className="">
        <h2 className="text-4xl md:text-6xl font-bold text-dark px-2.5 mb-4 md:mb-5.75">
          Simple, transparent pricing
        </h2>
        <p className="text-dark text-[18px] md:text-[20px] mb-10 md:mb-17 px-2.5 tracking-[-0.005em]">
          Start free. Upgrade when you&apos;re ready.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Free card */}
          <div className="bg-light-grey rounded-[24px] md:rounded-[40px] px-8 md:px-17.5 py-10 md:py-16.75">
            <p className="font-semibold text-dark text-2xl mb-2.25">Free</p>
            <p className="text-grey text-[16px] mb-8 md:mb-13">Perfect to get started</p>
            <div className="flex items-end gap-1 mb-5.5">
              <span className="text-4xl font-bold text-dark">$0</span>
            </div>
            <ul className="space-y-4 mb-10 md:mb-21.75">
              {freeFeatures.map((f) => (
                <li key={f.text} className="flex items-center gap-3">
                  {f.muted
                    ? <Image className="-pt-0.5" src={LockIcon} alt="" />
                    : <Image className="pt-0.5" src={CheckIcon} alt="" />
                  }
                  <span className={`text-[16px] ${f.muted ? "text-grey" : "text-dark"} ${f.muted ? "pt-1" : "pt-0"}`}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-dark text-white font-semibold py-4 mb-7.5 rounded-full text-[16px] hover:bg-dark/90 transition-colors">
              Start for Free
            </button>
          </div>

          {/* Premium card */}
          <div className="bg-dark rounded-[24px] md:rounded-[40px] px-8 md:px-17.5 py-10 md:py-16.75 relative">
            <div className="flex items-start justify-between mb-2">
              <p className="font-semibold text-white text-2xl">Premium</p>
              <span className="bg-orange text-white text-sm px-3.25 py-1 mt-1.25 rounded-full">
                Popular
              </span>
            </div>
            <p className="text-gray-subline text-[16px] mb-8 md:mb-12.75">All features you need</p>
            <div className="flex items-end gap-1 mb-5.75">
              <span className="text-4xl font-bold text-white">$4.99</span>
              <span className="text-gray-subline text-[16px] mx-1">/month</span>
            </div>
            <ul className="space-y-4 mb-8 md:mb-12.75">
              {premiumFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Image className="pt-0.5" src={CheckIcon} alt="" />
                  <span className="text-[16px] text-white">{f}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-play-demo text-dark font-semibold py-4 rounded-full text-[16px] hover:bg-play-demo/90 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
