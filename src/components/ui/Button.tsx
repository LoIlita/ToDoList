import { cn } from "./cn";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const ButtonBasicClass =
  "flex w-full justify-center rounded-md px-2 py-1.5 text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2";

const variationClass: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500",
  secondary:
    "bg-white/6 text-white hover:bg-white/20 focus-visible:outline-gray-500",
};

export default function Button({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
  className,
}: ButtonProps) {
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={cn(
          ButtonBasicClass,
          variationClass[variant],
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
      >
        {children}
      </button>
    </div>
  );
}
