// import React from "react";
import { Button } from "./ui/button";
// import { ThemeToggle } from "./theme-toggle";
// import logo from "../assets/logo.png";

export default function HeaderHero() {
  return (
    <header className="w-full z-40 bg-red border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          {/* <img src={logo} alt="Logo" className="h-12 w-12" /> */}
          <span className="text-xl font-semibold text-foreground">Do IT.</span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Biz haqimizda
          </a>
          <a
            href="#courses"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Kurslarimiz
          </a>
          <a
            href="#enroll"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Kursga yozilish
          </a>
          <a
            href="#services"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Xizmatlar
          </a>
        </nav>

        {/* Auth Buttons and Theme Toggle */}
        <div className="flex items-center space-x-3">
          {/* <ThemeToggle /> */}
          <Button
            variant="ghost"
            className="text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Login
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
