import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ href, label }: { href: string; label: string }) => {
  return (
      <Link
        href={href}
        className="flex w-full cursor-pointer items-center justify-center space-x-3 rounded-lg border border-[#272A3C] bg-gradient-to-r from-[#0C0E23] to-[#04071D] px-4 py-3 text-white md:w-1/4 "
      passHref>
        <span className="hover:text-purple-1">{label}</span>
        <GoArrowUpRight className="text-white" />
      </Link>
  );
};

export default Button;
