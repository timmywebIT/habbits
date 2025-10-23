import React, { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href: string;
}

export const Button = ({ children, className = "", href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`cursor-pointer bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 inline-flex items-center gap-2 ${className}`}
    >
      {children}
    </Link>
  );
};
