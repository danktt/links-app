import { ReactElement } from "react";

type ButtonProps = {
  title: string;
  href: string;
  className?: string;
  icon: ReactElement;
};

export default function Button({ title, href, className, icon }: ButtonProps) {
  return (
    <a href={href} target="_blank" className={`btn  ${className}`}>
      {icon}
      {title}
    </a>
  );
}
