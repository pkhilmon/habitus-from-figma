import ImageBg from "@/app/assets/ImageBg";
import Image from "next/image";
import HabitImg from "@/app/assets/Habit-tracker.png";
import DashboardImg from "@/app/assets/Dashboard.png";
import GoalsImg from "@/app/assets/Goals.png";
import SettingsImg from "@/app/assets/Settings.png";

export default function AppScreenshots() {
  return (
    <section className="w-[1440px] mx-auto px-4 overflow-hidden">
      <div className="text-center">
        <h2 className="text-6xl font-bold text-dark">Take a Look Inside</h2>
        <p className="text-dark mt-5.75 text-[20px] tracking-[-0.0075em]">A simple, beautiful interface built for everyday use.</p>
      </div>

      {/* Phones with blobs */}
      <div className="mt-29.25 flex justify-center items-end gap-10 overflow-visible">
          <ImageBg pathClassName="fill-light-purple">
            <Image src={DashboardImg} alt=""/>
          </ImageBg>
          <ImageBg pathClassName="fill-orange">
            <Image src={HabitImg} alt=""/>
          </ImageBg>
          <ImageBg pathClassName="fill-dark">
            <Image src={SettingsImg} alt=""/>
          </ImageBg>
          <ImageBg pathClassName="fill-light-blue">
            <Image src={GoalsImg} alt=""/>
          </ImageBg>
      </div>
    </section>
  );
}

