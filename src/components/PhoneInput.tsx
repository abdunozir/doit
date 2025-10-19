import { Button } from "./ui/button";
import { PhoneIcon } from "lucide-react";
import { useState } from "react";

export function PhoneInput() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");

    // Limit to 11 digits (assuming Turkish format with country code)
    const limitedDigits = digits.slice(0, 11);

    // Format as (99) 999 99 99
    if (limitedDigits.length <= 2) {
      return limitedDigits;
    } else if (limitedDigits.length <= 5) {
      return `(${limitedDigits.slice(0, 2)}) ${limitedDigits.slice(2)}`;
    } else if (limitedDigits.length <= 7) {
      return `(${limitedDigits.slice(0, 2)}) ${limitedDigits.slice(
        2,
        5
      )} ${limitedDigits.slice(5)}`;
    } else {
      return `(${limitedDigits.slice(0, 2)}) ${limitedDigits.slice(
        2,
        5
      )} ${limitedDigits.slice(5, 7)} ${limitedDigits.slice(7)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedValue);
  };

  return (
    <div className="flex items-center w-full max-w-md mx-auto mt-6 shadow-lg">
      <div className="relative flex-1">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <PhoneIcon className="h-4 w-4" />
        </div>
        <input
          maxLength={14}
          type="tel"
          placeholder="(99) 999 99 99"
          value={phoneNumber}
          onChange={handlePhoneChange}
          className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground h-[50px] text-sm"
        />
      </div>
      <Button className="rounded-l-none rounded-r-lg px-6 py-3 h-[50px] bg-foreground text-background hover:bg-foreground/90 font-medium">
        Get Started
      </Button>
    </div>
  );
}
