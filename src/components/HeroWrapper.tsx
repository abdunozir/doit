import { ArrowRightIcon } from "lucide-react";
import { PhoneInput } from "./PhoneInput";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { Highlighter } from "./ui/highlighter";
import { IconCloud } from "./ui/icon-cloud";
import { InteractiveGridPattern } from "./ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { WordRotate } from "./ui/word-rotate";
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

export default function HeroWrapper() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="relative w-full h-screen overflow-hidden max-w-[1700px] m-auto">
      <InteractiveGridPattern
        squares={[70, 70]}
        className="pointer-events-none" // prevents interfering with clicks
      />
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
      {/* Your content */}
      <div className="relative z-10 p-0 ">
        <div className="w-full min-h-[calc(100vh-80px)] relative overflow-hidden flex flex-col items-center justify-center  px-4 sm:px-6 lg:px-8">
          {/* Grid Pattern Container with Inner Shadow */}
          {/* <div className="absolute inset-0 grid-inner-shadow skew-x-6">
              <InteractiveGridPattern squares={[70, 70]} />
            </div> */}

          {/* Content Layer */}
          <div className="w-full z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-[30px] h-full max-w-7xl mx-auto py-8 lg:py-0">
            <div className=" max-w-[900px] lg:w-fit z-10 flex min-h-64 flex-col gap-3 items-start justify-start  text-center lg:text-left">
              <div
                className={cn(
                  " w-fit group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mx-auto lg:mx-0"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-3 sm:px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-sm sm:text-base">
                  <span className="truncate ">
                    {/* <DotLottieReact
                        src={"./assets/lotties/popstarts.lottie"}
                        loop
                        autoplay
                      />{" "} */}
                    ✨ Istalgan turdagi dasturlar uchun buyurtma berish
                  </span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 flex-shrink-0" />
                </AnimatedShinyText>
              </div>
              {/* animated texts */}
              <div className="px-4">
                <h2 className="flex flex-col items-start lg:items-start mt-4 sm:mt-6 lg:mt-8 max-w-2xl text-balance text-3xl sm:text-4xl md:text-7xl font-medium lg:text-6xl xl:text-7xl gap-1">
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
                <p className="text-muted-foreground mt-4 sm:mt-6 lg:mt-8 max-w-2xl text-pretty text-base sm:text-lg">
                  Structured,{" "}
                  <Highlighter action="underline" color="#FF9800">
                    no-fluff courses{"    "}
                  </Highlighter>{" "}
                  that teach you <br className="hidden sm:block" /> the skills
                  you need to succeed in the real world.
                </p>
              </div>
              {/* input phone */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <PhoneInput />
              </div>

              {/* quality... */}
              <div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <p className="text-muted-foreground mt-2 max-w-2xl text-pretty text-base sm:text-lg">
                      Qulay
                    </p>
                  </li>
                  <li>
                    <p className="text-muted-foreground mt-2 max-w-2xl text-pretty text-base sm:text-lg">
                      Zamonaviy
                    </p>
                  </li>
                  <li>
                    <p className="text-muted-foreground mt-2 max-w-2xl text-pretty text-base sm:text-lg">
                      100% kafolatli
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* <MorphingText texts={["Hello", "World"]} /> */}
            <div className="hidden relative lg:flex size-full items-center justify-center overflow-hidden w-full lg:w-[30%] h-64 sm:h-80 lg:h-full scale-150 sm:scale-175 lg:scale-250">
              <IconCloud images={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
