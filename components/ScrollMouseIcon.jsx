import { Mouse } from "lucide-react";

export const ScrollMouseIcon = () => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
      <Mouse className="size-10 p-2 rounded-full border border-base-300 backdrop-blur" />
      <span className="absolute inset-0 top-2 flex justify-center animate-bounce text-error z-0">
        '
      </span>
    </div>
  );
};
