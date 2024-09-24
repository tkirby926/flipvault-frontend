"use client";
import React, { ChangeEvent } from "react";

// Define the type for the input props
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  rotateHover?: string;
  border?: string;
};

// Define the Input component with the extended props type
const Input: React.FC<InputProps> = ({
  className = "",
  rotateHover = "",
  border = "",
  onChange,
  ...props
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div
      className={`rotate_hover common-transition group relative p-[0.8px] ${rotateHover}`}>
      <div
        className={`inner border group-hover:bg-light-gray border-white/35 group-hover:border-transparent bg-opacity-0 group-hover:bg-opacity-100 rounded-2 ${border}`}>
        <input
          {...props}
          className={`${className} bg-transparent common-transition lg:h-[43px] px-3 py-3 pb-2.5 rounded-2 text-base text-white placeholder:text-base placeholder:leading-118 leading-120 outline-none placeholder:font-normal placeholder:text-white/50 w-full`}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Input;
