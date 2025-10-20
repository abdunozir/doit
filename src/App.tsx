import "./App.css";
// import { MorphingText } from "./components/ui/morphing-text";
import { WordRotate } from "@/components/ui/word-rotate";
import HeaderHero from "./components/HeaderHero";
import { InteractiveGridPattern } from "./components/ui/interactive-grid-pattern";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { IconCloud } from "@/components/ui/icon-cloud";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Highlighter } from "@/components/ui/highlighter";
import { cn } from "@/lib/utils";
import { PhoneInput } from "./components/PhoneInput";
import { useEffect } from "react";
import TeamSection from "./components/TeamSection";
import FooterSection from "./components/FooterSection";
import StatsSection from "./components/StatsSection";
import IntegrationsSection from "./components/IntegrationsSection";
import LogoCloud from "./components/ui/LogoCloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

function App() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  // Set dark theme on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="dark">
      <div className="">
        <div className="h-screen relative w-full overflow-hidden">
          <HeaderHero />
          <div className="w-full h-[calc(100vh-80px)] relative overflow-hidden flex flex-col items-center justify-center bg-background">
            {/* Grid Pattern Container with Inner Shadow */}
            <div className="absolute inset-0 grid-inner-shadow skew-x-6">
              <InteractiveGridPattern squares={[70, 70]} />
            </div>
            {/* Gradient Overlay for Extra Depth */}
            <div
              className="absolute inset-0 dark:opacity-80"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(0,0,0,0.2) 100%)",
              }}
            ></div>
            {/* Dark Theme Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 0%, transparent 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.6) 100%)",
              }}
            ></div>

            {/* Content Layer */}
            <div className="w-full z-10 flex  items-center justify-center gap-[30px] h-full">
              <div className="w-fit z-10 flex min-h-64 flex-col gap-3 items-start justify-center pl-[100px]">
                <div
                  className={cn(
                    "w-fit group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                  )}
                >
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>
                      ✨ Istalgan turdagi dasturlar uchun buyurtma berish
                    </span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </div>
                <div>
                  <h2 className="flex flex-col items-start  mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl gap-1">
                    <span>Learn by building</span>
                    <WordRotate
                      className="relative w-fit"
                      words={[
                        "Startups",
                        "Web Apps",
                        "Mobile Apps",
                        "APIs",
                        "AI",
                      ]}
                    />
                  </h2>
                  <p className="text-muted-foreground mt-8 max-w-2xl text-pretty text-lg">
                    Structured,{" "}
                    <Highlighter action="underline" color="#FF9800">
                      no-fluff courses{" "}
                    </Highlighter>
                    that teach you <br /> the skills you need to succeed in the
                    real world.
                  </p>
                </div>
                <div>
                  <PhoneInput />
                </div>
                <div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <p className=" text-muted-foreground mt-2 max-w-2xl text-pretty text-lg">
                        Qulay
                      </p>
                    </li>
                    <li>
                      <p className=" text-muted-foreground mt-2 max-w-2xl text-pretty text-lg">
                        Zamonaviy
                      </p>
                    </li>
                    <li>
                      <p className=" text-muted-foreground mt-2 max-w-2xl text-pretty text-lg">
                        100% kafolatli
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <MorphingText texts={["Hello", "World"]} /> */}
              <div className="relative scale-200 flex size-full items-center justify-center overflow-hidden w-[30%]">
                <IconCloud images={images} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <LogoCloud />
        </div>
        <div>
          <IntegrationsSection />
        </div>
        {/* our team section */}
        <div>
          <TeamSection />
        </div>
        <div>
          <StatsSection />
        </div>
        <div>
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

export default App;
