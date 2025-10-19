import { Button } from "./ui/button";
import { MailIcon } from "lucide-react";

export function EmailInput() {
  return (
    <div className="flex items-center w-full max-w-md mx-auto mt-6 shadow-lg">
      <div className="relative flex-1">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <MailIcon className="h-4 w-4" />
        </div>
        <input
          type="email"
          placeholder="Your mail address"
          className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground h-[50px] text-sm"
        />
      </div>
      <Button className="rounded-l-none rounded-r-lg px-6 py-3 h-[50px] bg-foreground text-background hover:bg-foreground/90 font-medium">
        Get Started
      </Button>
    </div>
  );
}
