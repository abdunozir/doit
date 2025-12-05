import "./App.css";
// import { MorphingText } from "./components/ui/morphing-text";
// import { WordRotate } from "@/components/ui/word-rotate";
import HeaderHero from "./components/HeaderHero";
// import lotie from "./assets/lotties/popstarts.lottie";
// import { InteractiveGridPattern } from "./components/ui/interactive-grid-pattern";
// import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
// import { IconCloud } from "@/components/ui/icon-cloud";
// import { ArrowRightIcon } from "@radix-ui/react-icons";
// import { Highlighter } from "@/components/ui/highlighter";
// import { cn } from "@/lib/utils";
// import { PhoneInput } from "./components/PhoneInput";
import { useEffect } from "react";
import TeamSection from "./components/TeamSection";
import FooterSection from "./components/FooterSection";
import StatsSection from "./components/StatsSection";
import IntegrationsSection from "./components/IntegrationsSection";
import LogoCloud from "./components/ui/LogoCloud";
// import Courses from "./components/Courses";
import FAQsTwo from "./components/FAQsTwo";
import HeroWrapper from "./components/HeroWrapper";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function App() {
  // Set dark theme on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="dark">
      <div className="">
        <section
          id="enroll"
          className="min-h-screen relative w-full overflow-hidden"
        >
          <HeaderHero />
          <HeroWrapper />
        </section>

        <div>
          <LogoCloud />
        </div>
        <div id="services">
          <IntegrationsSection />
        </div>
        <div>{/* <Courses /> */}</div>
        {/* our team section */}
        <div>
          <TeamSection />
        </div>

        <div>
          <StatsSection />
        </div>
        <section id="faqs">
          <FAQsTwo />
        </section>
        <div>
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

export default App;
