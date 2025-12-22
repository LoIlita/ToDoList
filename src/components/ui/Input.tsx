import { cn } from "./cn";


type InputProps = {
    id : string;
    label : string;
    type ?: React.HTMLInputTypeAttribute;
    required ?: boolean;
    placeholder ?: string;
    autoComplete?: string;
    className ?: string;
};

const baseInputClass = "block w-full rounded-md bg-white/5 px-2 py-1.5 outline-1  outline-white/10  placeholder:text-gray-500 focus:outline-2  focus:outline-indigo-500" 


export default function Input({
    id,
    label, 
    type, 
    required, 
    placeholder, 
    autoComplete, 
    className
} : InputProps){
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id} className="text-sm"
            >
                {label}
            </label>

            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                required={required}
                autoComplete={autoComplete} 
                className={cn(baseInputClass, className)} 
            />

        </div>
    )


}



















