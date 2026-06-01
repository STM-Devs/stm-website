"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { cx, siteData } from "../Data";
import { Button } from "./Buttons";

function getItemHref(item) {
  return item.href ?? `/${item.label.toLowerCase().replace(/\s+/g, "-")}`;
}

/**
 * Intercepts clicks on links of the form `/path#anchor` when the user is
 * already on `/path`. Without this, Next.js's <Link> can produce URLs like
 * `/services#digital-marketing#crm` because the App Router treats the new
 * href as a hash to append to the current URL instead of replacing it.
 */
function handleHashLinkClick(e, href, onAfterNavigate) {
  if (typeof window === "undefined" || !href || !href.includes("#")) return;
  const [path, hash] = href.split("#");
  if (!hash) return;
  // Only intercept when target path equals current pathname.
  if (path && path !== window.location.pathname) return;

  e.preventDefault();
  // Replace any existing hash with the new one (no double hash).
  window.history.replaceState(null, "", `${window.location.pathname}#${hash}`);
  const el = document.getElementById(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (typeof onAfterNavigate === "function") onAfterNavigate();
}

function isItemActive(item, pathname) {
  const href = getItemHref(item);
  if (pathname === href || pathname.startsWith(href + "/")) return true;
  if (Array.isArray(item.children)) {
    return item.children.some((child) => {
      const childHref = getItemHref(child);
      return pathname === childHref || pathname.startsWith(childHref + "/");
    });
  }
  return false;
}

function NavItem({ item, active }) {
  const [hovered, setHovered] = React.useState(false);
  const timeoutRef = React.useRef(null);

  const label = item.label;
  const href = getItemHref(item);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const openMenu = () => {
    clearTimeout(timeoutRef.current);
    setHovered(true);
  };
  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setHovered(false), 150);
  };

  React.useEffect(() => () => clearTimeout(timeoutRef.current), []);

  if (!hasChildren) {
    return (
      <Link
        href={href}
        className={cx(
          "group relative whitespace-nowrap text-xs font-medium transition linkClasses md:text-xs lg:text-sm",
          active ? "text-[#414042]" : "text-[#4B504C] hover:text-[#414042]"
        )}
      >
        {label}
        <span
          className={cx(
            "absolute -bottom-2 left-0 h-0.5 rounded-full bg-[#8DC53E] transition-all duration-200",
            active ? "w-full" : "w-0 group-hover:w-full"
          )}
        />
      </Link>
    );
  }

  return (
    <div
      className="relative shrink-0"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <button
        type="button"
        className={cx(
          "group relative flex items-center gap-1 whitespace-nowrap text-xs font-medium transition linkClasses md:text-xs lg:text-sm",
          active ? "text-[#414042]" : "text-[#4B504C] hover:text-[#414042]"
        )}
        onClick={() => setHovered((v) => !v)}
        aria-expanded={hovered}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          size={14}
          className={cx(
            "transition-transform duration-200",
            hovered && "rotate-180"
          )}
        />
        <span
          className={cx(
            "absolute -bottom-2 left-0 h-0.5 rounded-full bg-[#8DC53E] transition-all duration-200",
            active ? "w-full" : "w-0 group-hover:w-full"
          )}
        />
      </button>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 mt-3 min-w-[200px] -translate-x-1/2 rounded-xl border border-[#E6EBE7] bg-white p-2 shadow-[0_16px_40px_rgba(24,32,28,0.10)]"
          >
            {item.children.map((child) => {
              const childHref = child.href ?? `/${child.label.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <Link
                  key={child.label}
                  href={childHref}
                  onClick={(e) => handleHashLinkClick(e, childHref, () => setHovered(false))}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-[#4B504C] transition hover:bg-[#F1F4F2] hover:text-[#414042]"
                >
                  {child.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

function MobileNavItem({ item, active, pathname }) {
  const [expanded, setExpanded] = React.useState(false);

  const label = item.label;
  const href = item.href ?? `/${label.toLowerCase().replace(/\s+/g, "-")}`;
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={href}
        className={cx(
          "rounded-xl px-3 py-2 text-sm font-medium",
          active
            ? "bg-[#F1F4F2] text-[#414042]"
            : "text-[#414042] hover:bg-[#F1F4F2]"
        )}
      >
        {label}
      </Link>
    );
  }

  return (
    <div>
      
      <button
        type="button"
        className={cx(
          "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium",
          active
            ? "bg-[#F1F4F2] text-[#414042]"
            : "text-[#414042] hover:bg-[#F1F4F2]"
        )}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {label}
        <ChevronDown
          size={14}
          className={cx(
            "transition-transform duration-200",
            expanded && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="ml-3 grid gap-1 border-l border-[#E6EBE7] pl-3 pt-1">
              {item.children.map((child) => {
                const childHref = getItemHref(child);
                const linkHref = child.href ?? `#${child.label.toLowerCase().replace(/\s+/g, "-")}`;
                const childActive = pathname === childHref || pathname.startsWith(childHref + "/");
                return (
                <Link
                  key={child.label}
                  href={linkHref}
                  onClick={(e) => handleHashLinkClick(e, linkHref, () => setExpanded(false))}
                  className={cx(
                    "rounded-lg px-3 py-1.5 text-sm",
                    childActive
                      ? "bg-[#F1F4F2] font-medium text-[#414042]"
                      : "text-[#4B504C] hover:bg-[#F1F4F2] hover:text-[#414042]"
                  )}
                >
                  {child.label}
                </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}

export function NavBar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleContactBtn() {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    } else {
      window.location.href = "/#contact";
    }
  }

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-5 lg:px-6">
      <motion.header
        layout
        className={cx(
          "mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border px-4 py-3 md:gap-4 md:px-5 md:py-4 lg:gap-6 lg:px-6",
          scrolled
            ? "border-white/70 bg-white/80 shadow-[0_16px_40px_rgba(24,32,28,0.10)] backdrop-blur-xl"
            : "border-transparent bg-white/60 backdrop-blur-md"
        )}
      >
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <img loading="lazy" src="/STM-Consulting_Logo_(small).png" alt="STM Logo" width={160} height={40} className="h-auto w-auto max-h-8 sm:max-h-9 lg:max-h-10" />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 md:flex md:gap-4 lg:gap-7">
          {siteData.nav.map((item) => (
            <NavItem key={item.label} item={item} active={isItemActive(item, pathname)} />
          ))}
        </nav>

        <div className="hidden shrink-0 md:block">
          <Button
            onClick={handleContactBtn}
            icon={<ArrowRight size={16} />}
            className="whitespace-nowrap px-3 py-2 text-xs md:text-sm lg:px-5 lg:py-3"
          >
            Let&apos;s Talk
          </Button>
        </div>

        <button
          type="button"
          className="rounded-xl border border-[#E6EBE7] p-2 text-[#414042] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mx-auto mt-3 max-w-7xl rounded-2xl border border-[#E6EBE7] bg-white p-4 shadow-[0_16px_40px_rgba(24,32,28,0.08)] md:hidden"
        >
          <div className="grid gap-2">
            {siteData.nav.map((item) => (
              <MobileNavItem key={item.label} item={item} active={isItemActive(item, pathname)} pathname={pathname} />
            ))}
            <Button onClick={handleContactBtn} className="mt-2 w-full" icon={<ArrowRight size={16} />}>
              Let&apos;s Talk
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
