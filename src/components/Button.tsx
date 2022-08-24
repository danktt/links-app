type ButtonProps = {
  title: string;
  href: string;
  className?: string;
};

export default function Button({ title, href, className }: ButtonProps) {
  return (
    <a href={href} target="_blank" className={`btn  ${className}`}>
      {title}
    </a>
  );
}
