import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-40 flex w-full items-center justify-around bg-gradient-to-r from-[#0C0E23] to-[#04071D] px-2 py-4 opacity-80">
      <div>
        <span className="text-white">&lt;useKhalid /&gt;</span>
      </div>
      <div className="flex items-center space-x-3 text-white">
        <Link href={"#about"}>About</Link>
        <Link href={"#contact"}>Contact</Link>
        <Link href={"#blog"}>Blog</Link>
        <Link href={"#project"}>Project</Link>
      </div>
    </nav>
  );
};

export default Navbar;
