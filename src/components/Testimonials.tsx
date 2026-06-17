import Image from "next/image";
import Person1 from "@/app/assets/person1.png";
import Person2 from "@/app/assets/person2.png";
import Person3 from "@/app/assets/person3.png";

interface TestimonialItem {
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  quote: string;
  avatarImg?: React.ReactNode;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Sarah T.",
    role: "Writer",
    initials: "ST",
    avatarColor: "#E8A87C",
    quote: "\"I've finally stayed consistent with journaling for 90 days. This app made it effortless.\"",
    avatarImg: <Image src={Person1} alt="" />,
  },
  {
    name: "James K.",
    role: "Software Engineer",
    initials: "JK",
    avatarColor: "#8BA8C4",
    quote: "\"Seeing my progress visually keeps me motivated every day. The reminders are just perfect!\"",
    avatarImg: <Image src={Person2} alt="" />,
  },
  {
    name: "Priya R.",
    role: "Wellness Coach",
    initials: "PR",
    avatarColor: "#B8967A",
    quote: "\"I've tried several habit trackers, but this one is the only one I actually stuck with.\"",
    avatarImg: <Image src={Person3} alt="" />,
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] w-full mx-auto pt-12 md:pt-29 px-5 md:px-14 lg:px-25 overflow-hidden">
      <div className="px-2.5 mb-10 md:mb-16.75">
        <h2 className="text-4xl md:text-6xl font-bold text-dark mb-4 md:mb-5.75">What our users say</h2>
        <p className="text-dark text-[18px] md:text-[20px] tracking-[-0.005em]">
          Real stories from people who turned their goals into habits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-9.75">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-light-grey rounded-[24px] md:rounded-[40px] p-8 md:p-12.25 md:pb-15">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              {!t.avatarImg ? (
                <div
                  className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.initials}
                </div>
              ) : (
                t.avatarImg
              )}
              <div>
                <p className="font-bold text-dark text-[16px]">{t.name}</p>
                <p className="text-grey text-[16px]">{t.role}</p>
              </div>
            </div>
            <p className="text-grey text-[16px] leading-[1.5em]">{t.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
