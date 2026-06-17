import ImageBg from "@/components/ImageBg";
import Image from "next/image";
import HabitImg from "@/app/assets/Habit-tracker.png";
import DashboardImg from "@/app/assets/Dashboard.png";
import GoalsImg from "@/app/assets/Goals.png";
import SettingsImg from "@/app/assets/Settings.png";

export default function AppScreenshots() {
  return (
    <section className="max-w-[1440px] w-full mx-auto">
      <div className="text-center px-5 md:px-0">
        <h2 className="text-4xl md:text-6xl font-bold text-dark mb-5.75">Take a Look Inside</h2>
        <p className="text-dark text-[18px] md:text-[20px] tracking-[-0.0075em]">
          A simple, beautiful interface built for everyday use.
        </p>
      </div>

      {/* Horizontal scroll on mobile, centered row on desktop */}
      <div className="mt-12 md:mt-29.25 overflow-x-auto pb-4 md:pb-0">
        <div className="flex justify-start md:justify-center items-end gap-6 md:gap-10 overflow-visible min-w-max md:min-w-0 px-5 md:px-0">
          <ImageBg pathClassName="fill-light-purple">
            <Image src={DashboardImg} alt="" />
          </ImageBg>
          <ImageBg pathClassName="fill-orange">
            <Image src={HabitImg} alt="" />
          </ImageBg>
          <ImageBg pathClassName="fill-dark">
            <Image src={SettingsImg} alt="" />
          </ImageBg>
          <ImageBg pathClassName="fill-light-blue">
            <Image src={GoalsImg} alt="" />
          </ImageBg>
        </div>
      </div>
    </section>
  );
}
