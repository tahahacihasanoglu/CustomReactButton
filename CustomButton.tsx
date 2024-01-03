import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        id="button"
        className={twMerge(
          ` w-auto rounded-md bg-black border-transparent px-4 py-2 disabled:opacity-50 disabled:bg-slate-400 disabled:text-black hover:bg-slate-200 hover:text-black text-white font-light hover:scale-[80%] hover:opacity-65 transition-all duration-700 hover:rounded-2xl drop-shadow-xl hover:shadow-[0px_0px_25px_10px_rgba(220,220,220,.6)] border border-white active:bg-red-500 active:text-white active:scale-95 active:shadow-[0px_0px_25px_20px_rgba(212,61,59,.6)] active:border-black flex items-center justify-center`,
          className
        )}
        disabled={disabled}
        ref={ref}
        style={{}}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
