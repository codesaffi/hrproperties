import { useState } from "react";
import { X } from "lucide-react";

export default function TopHeadline() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="relative w-full">
      <div className="bg-blue-800 text-white text-center py-2 text-sm font-medium">
        Building Trust, Securing Futures
      </div>
      <button
        className="absolute right-2 top-1 p-1 text-white hover:text-red-400 transition"
        onClick={() => setVisible(false)}
        aria-label="Close headline"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
