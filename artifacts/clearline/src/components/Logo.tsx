import React from "react";
import { Home } from "lucide-react";

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`} data-testid="logo-container">
      <div className="relative">
        <Home className="w-8 h-8 text-[#1a2a4a]" strokeWidth={2} />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#4a9c3a] rounded-full border-2 border-white"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline leading-none font-bold text-2xl tracking-tight">
          <span className="text-[#1a2a4a]">CLEAR</span>
          <span className="text-[#4a9c3a]">LINE</span>
        </div>
        <span className="text-[#1a2a4a] text-[0.6rem] font-semibold tracking-[0.2em]">
          REMOVAL SERVICES
        </span>
      </div>
    </div>
  );
};
