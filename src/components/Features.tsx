import BellIcon from "@/app/assets/bell-icon.svg";
import GraphIcon from "@/app/assets/graph-icon.svg";
import FireIcon from "@/app/assets/fire-icon.svg";
import HabitImg2 from "@/app/assets/Habit-tracker2.png";
import GoogleLogo from "@/app/assets/google-logo.svg";
import SpotifyLogo from "@/app/assets/spotify-logo.svg";
import TreeHouseLogo from "@/app/assets/treehouse-logo.svg";
import BlazeLogo from "@/app/assets/braze-logo.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: (
      <Image src={BellIcon} alt="" />
    ),
    title: "Smart Reminders",
    description:
      "Never miss a habit again. Set daily notifications or let the app suggest the best time.",
  },
  {
    icon: (
      <Image src={GraphIcon} alt="" />
    ),
    title: "Progress Analytics",
    description:
      "See your growth with weekly reports, streaks, and visual heatmaps.",
  },
  {
    icon: (
      <Image src={FireIcon} alt="" />
    ),
    title: "Streak Tracking",
    description:
      "Stay motivated by building unbreakable streaks and unlocking milestones.",
  },
];

const logos = [
  {
    name: "Google",
    svg: (
      <Image src={GoogleLogo} alt="" />
    ),
  },
  {
    name: "Spotify",
    svg: (
      <Image src={SpotifyLogo} alt="" />
    ),
  },
  {
    name: "treehouse",
    svg: (
      <Image src={TreeHouseLogo} alt="" />
    ),
  },
  {
    name: "Braze",
    svg: (
      <Image src={BlazeLogo} alt="" />
    ),
  },
];

export default function Features() {
  return (
    <section className="px-25.25 py-[117px] w-[1440px] mx-auto">
      <div className="max-w mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
          <h2 className="text-6xl font-bold text-dark">
            Why you&apos;ll love it
          </h2>
          <p className="text-dark text-[20px] mt-1.5 -tracking-[0.007em] text-left">
            Designed to help you stay on track, effortlessly.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[41px] mb-10.5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-light-grey rounded-[40px] p-[49px]"
            >
              <div className="mb-5.5">{f.icon}</div>
              <h3 className="font-semibold text-dark text-[20px] mb-3">{f.title}</h3>
              <p className="text-grey text-[16px] leading-[1.5em]">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Company callout */}
        <div className="flex flex-row gap-5.5 justify-between">
          <div className="relative w-[50%] h-[560px] bg-light-blue rounded-[40px]">
            <Image className="absolute inset-x-0.5 bottom-0 mx-auto" src={HabitImg2} alt="" />
          </div>

          {/* Text side */}
          <div className="flex flex-col max-w-[50%] pl-10 overflow-x-visible">
            <h3 className="text-[36px] font-medium text-navy leading-[1.34em] py-6.25">
              Join thousands of users from top companies using Habitus to build better habits
            </h3>
            <div className={cn("mt-auto flex bg-light-grey pl-14.5 py-11.25 items-center gap-10.75",
              "rounded-l-[40px] mr-[-500px]"
            )}>
              {logos.map((l) => (
                <div key={l.name} className="h-[47px]">{l.svg}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
