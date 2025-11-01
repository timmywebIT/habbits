import React, { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const Button = ({ children, className = "", href, onClick }: ButtonProps) => {
  const commonClasses =
    "cursor-pointer bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 inline-flex items-center gap-2 " +
    className;

  if (href)
    return (
      <Link href={href} className={commonClasses}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className={commonClasses}>
      {children}
    </button>
  );
};