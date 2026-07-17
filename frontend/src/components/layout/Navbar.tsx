import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Collections", path: "/collections" },
  { name: "Projects", path: "/projects" },
  { name: "Export", path: "/export" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-white">
      <div className="mx-auto flex max-w-container items-center justify-between px-5 py-[18px] md:px-8 md:py-[22px] lg:px-14 lg:py-7">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-display text-[22px] font-semibold text-ink"
        >
          a.
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-[12px] font-medium tracking-[0.03em] transition-colors duration-200 ${
                  isActive
                    ? "text-ink"
                    : "text-ink-dim hover:text-ink"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-off transition hover:bg-gray-200"
            aria-label="Shopping Cart"
          >
            <HiOutlineShoppingBag className="h-4 w-4 text-ink" />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-off lg:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <HiOutlineXMark className="h-[18px] w-[18px] text-ink" />
            ) : (
              <HiOutlineBars3 className="h-[18px] w-[18px] text-ink" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-full z-50 overflow-hidden border-b border-line bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0 border-transparent"
        }`}
      >
        <nav className="flex flex-col px-5 pb-5 pt-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `border-b border-line py-3 text-[14px] transition-colors last:border-none ${
                  isActive
                    ? "text-ink"
                    : "text-ink-dim hover:text-ink"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;