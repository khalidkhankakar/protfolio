import Button from "./Button";
import { BackgroundBeams } from "./ui/background-beams";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen max-h-screen flex-col items-center justify-center bg-dark-3 text-white">
      <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[80vw]">
        <p className="text-center text-[16px] font-thin uppercase tracking-wide text-purple-1 md:tracking-normal">
          Dynamic Excellence with Next.js
        </p>
        <h1 className="max-w-[95%] text-center text-[48px] font-bold leading-[3.5rem] tracking-tight md:text-[72px] md:leading-[5rem]">
          Building Robust Websites for Tomorrow&apos;s{" "}
          <span className="text-purple-2">Challenges</span>
        </h1>
        <p className="my-2 max-w-[95%] text-center text-[15px] font-light tracking-wide text-purple-1 md:text-[19px]">
          What’s up! I’m Khalid Kakar, a Next.js Developer in Pakistan{" "}
        </p>
        <div className="mt-3 flex max-w-[95%] flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Button href="#blog" label="See my blog" />
          <Button href="#projects" label="See my work" />
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default HeroSection;
