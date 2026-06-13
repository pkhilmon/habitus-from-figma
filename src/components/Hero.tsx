import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import Image from "next/image";
import DemoPlayIcon from "@/app/assets/demo-play.svg";
import RatingStarIcon from "@/app/assets/rating-star.svg";
import HabitImg from "@/app/assets/Habit tracker-phone.png";
import SettingsImg from "@/app/assets/Settings-phone.png";
import DashboardImg from "@/app/assets/Dashboard-phone.png";
import GoalsImg from "@/app/assets/Goals-phone.png";

export default function Hero() {
  return (
    <div className="w-max mx-auto px-7.5 pt-7.5 pb-0">
      <div
        className={cn("bg-orange relative overflow-hidden w-[1380px] h-[783px] rounded-[40px]")}
      >
        <Navbar />

        {/* Decorative circles */}
        <div className="absolute left-32.25 top-65 w-18 h-18 rounded-full bg-circle1" />
        <div className="absolute left-[280px] top-[405px] w-18 h-18 rounded-full bg-pink" />
        <div className="absolute left-[295px] top-[457px] w-18 h-18 rounded-full bg-light-blue" />
        <div className="absolute left-[837px] top-[605px] w-18 h-18 rounded-full bg-light-blue" />
        <div className="absolute left-[1065px] top-[392px] w-18 h-18 rounded-full bg-dark" />
        <div className="absolute left-[1101px] top-[260px] w-18 h-18 rounded-full bg-light-purple" />

        {/* Phone mockups row */}
        <Image src={SettingsImg} alt="" className="absolute left-[146px] top-[572px]"/>
        <Image src={HabitImg} alt="" className="absolute left-[0px] top-[476px]"/>
        <Image src={GoalsImg} alt="" className="absolute left-[1125px] top-[454px]"/>
        <Image src={DashboardImg} alt="" className="absolute left-[934px] top-[591px]"/>

        {/* Center content */}
        <div className="relative z-10 text-center px-6 pt-[60px] pb-0">
          <h1 className="text-6xl font-medium text-white leading-[1.0]">
            Build Better Habits.<br />One Day at a Time.
          </h1>
          <p className="mt-8 text-white text-[22px] font-normal leading-[1.2]">
            Track your daily routines, stay consistent, and turn goals into<br />
            habits — all in one beautiful app.
          </p>

          {/* CTA buttons */}
          <div className="mt-[52px] flex items-center justify-center gap-[20px]">
            <button className="bg-white text-[#111827] font-semibold text-base px-[41px] py-[17px] rounded-full hover:bg-white/90 transition-colors">
              Get Started Free
            </button>
            <button className="flex items-center gap-3.5 border border-play-demo text-white font-bold text-base px-[40px] py-[16px] rounded-full hover:bg-white/10 transition-colors">
              <Image src={DemoPlayIcon} alt="" />
              Watch Demo
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-[182px] inline-flex items-center gap-2 bg-dark rounded-full px-[17px] py-2">
            <Image src={RatingStarIcon} alt="" />
            <span className="text-white text-sm font-normal">Loved by 1M+ users worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
}
