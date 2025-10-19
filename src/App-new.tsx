import "./App.css";
import { MorphingText } from "./components/ui/morphing-text";
import HeaderHero from "./components/HeaderHero";
import { InteractiveGridPattern } from "./components/ui/interactive-grid-pattern";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="">
        <div className="h-screen relative w-full overflow-hidden">
          <HeaderHero />
          <InteractiveGridPattern width={52} height={52} />
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
            <MorphingText texts={["Hello", "World"]} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
