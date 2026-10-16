
import React from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaMoon, FaSun } from "react-icons/fa";

type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[var(--line)] bg-[var(--surface)]/90 px-6 py-3 shadow-sm backdrop-blur-md md:px-8">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-1 text-xl font-bold text-[var(--text)] md:text-2xl"
        >
          Muskan
          <span className="text-purple-500">Tomar</span>
          <span className="w-2 h-2 bg-purple-500 rounded-full ml-1"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-[var(--muted)] transition-colors duration-300 hover:text-purple-500"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          className="ml-auto mr-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-2 text-sm text-[var(--text)] transition-colors hover:border-purple-400 md:ml-0 md:mr-0"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"} mode</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-2xl text-[var(--text)] md:hidden"
          onClick={() => setShowMenu(!showMenu)}
          aria-label={showMenu ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={showMenu}
        >
          {showMenu ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {showMenu && (
        <div className="mt-4 flex flex-col items-center space-y-5 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setShowMenu(false)}
              className="group relative text-[var(--muted)] transition-colors duration-300 hover:text-purple-500"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
