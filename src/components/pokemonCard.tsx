import { CardType } from "./dataCard";
import { cn } from "./ui/cn";

const sizeVariants = {
  sm: "w-32 h-48",
  md: "w-48 h-72",
  lg: "w-64 h-96",
} as const;

const scaleVariants = {
  scaleUp: "hover:scale-110 transform transition-transform duration-300",
} as const;

const opacityMode = {
  on: `hover:opacity-10 transition-opacity duration-300`,
} as const;

type PokemonCardProps = {
  src: string;
  alt: string;

  type?: CardType;
};

type PokemonCardSettings = {
  className?: string;
  scale?: keyof typeof scaleVariants;
  size?: keyof typeof sizeVariants;
  hover?: boolean;
};

type PokemonCard = PokemonCardProps & PokemonCardSettings;

export default function PokemonCard({
  src,
  alt,
  scale,
  size = "md",
  hover = false,
  className,
  type,
}: PokemonCard) {
  return (
    <div
      className={cn(
        sizeVariants[size],
        scale && scaleVariants[scale],
        hover && opacityMode.on,
        "m-2 overflow-hidden rounded-lg",
        className,
        type,
      )}
    >
      <img src={src} alt={alt} className="w-full h-full " />
    </div>
  );
}

export { type PokemonCardProps, PokemonCardSettings };

// dojdzie cena i procenty
