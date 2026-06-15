"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  KeyboardEvent,
} from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { brand, MegaMenuItem, TopNavItem } from "@/config/brand.config";

// ── Helpers ──────────────────────────────────────────────────

function isMegaMenu(item: TopNavItem): item is MegaMenuItem {
  return (item as MegaMenuItem).hasDropdown === true;
}

// ── Sub-components ───────────────────────────────────────────

function LogoMark() {
  return (
    <div className="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 2L10 7H15L11 10L12.5 15L8 12L3.5 15L5 10L1 7H6L8 2Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <ChevronDown
      aria-hidden="true"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform var(--dur-fast) var(--ease-out)",
      }}
    />
  );
}

function MegaMenuPanel({
  item,
  id,
  onClose,
}: {
  item: MegaMenuItem;
  id: string;
  onClose: () => void;
}) {
  return (
    <div className="mega-panel" id={id} role="region" aria-label={`${item.label} menu`}>
      <div className="mega-panel-inner">
        {/* 2-column grouped link lists */}
        <div className="mega-links">
          {item.groups.map((group) => (
            <div key={group.heading} className="mega-group">
              <span className="mega-group-heading eyebrow">{group.heading}</span>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="mega-link"
                      onClick={onClose}
                    >
                      <span className="mega-link-label">{link.label}</span>
                      {link.description && (
                        <span className="mega-link-desc">{link.description}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured card */}
        <a
          href={item.featured.href}
          className="mega-featured"
          onClick={onClose}
          tabIndex={0}
        >
          <div className="mega-featured-img-wrap">
            <img
              src={item.featured.image}
              alt={item.featured.imageAlt}
              width={800}
              height={533}
              loading="lazy"
              className="mega-featured-img"
            />
          </div>
          <span className="mega-featured-title">{item.featured.title}</span>
          <span className="mega-featured-cta">Read more →</span>
        </a>
      </div>
    </div>
  );
}

// ── Mobile accordion item ─────────────────────────────────────

function MobileAccordionItem({
  item,
  onLinkClick,
}: {
  item: MegaMenuItem;
  onLinkClick: () => void;
}) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Animate height
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (open) {
      el.style.height = el.scrollHeight + "px";
    } else {
      el.style.height = "0px";
    }
  }, [open]);

  return (
    <li className="mobile-accordion-item">
      <button
        className="mobile-accordion-trigger"
        aria-expanded={open}
        onClick={() => setOpen((p) => !p)}
      >
        <span>{item.label}</span>
        <ChevronDownIcon open={open} />
      </button>
      <div
        ref={bodyRef}
        className="mobile-accordion-body"
        style={{ height: 0, overflow: "hidden", transition: "height var(--dur-slow) var(--ease-out)" }}
      >
        <div className="mobile-accordion-content">
          {item.groups.map((group) => (
            <div key={group.heading} className="mobile-group">
              <span className="eyebrow mobile-group-heading">{group.heading}</span>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={onLinkClick} className="mobile-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}

// ── Main component ────────────────────────────────────────────

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Which mega-menu is open by label (null = none)
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Scroll border ───────────────────────────────────────────
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 8);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ── Body scroll lock for mobile ─────────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // ── Global Escape key ───────────────────────────────────────
  useEffect(() => {
    function onKey(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // ── Outside-click to close mega panel ──────────────────────
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  // ── Hover with intent delay ─────────────────────────────────
  function scheduleClose() {
    closeTimeout.current = setTimeout(() => setActiveMenu(null), 180);
  }
  function cancelClose() {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  }

  function openMenu(label: string) {
    cancelClose();
    setActiveMenu(label);
  }

  // ── Keyboard nav for trigger buttons ───────────────────────
  function onTriggerKey(e: KeyboardEvent<HTMLButtonElement>, label: string) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveMenu((prev) => (prev === label ? null : label));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveMenu(label);
    } else if (e.key === "Escape") {
      setActiveMenu(null);
    }
  }

  const megaItems = brand.nav.topItems.filter(isMegaMenu);
  const plainItems = brand.nav.topItems.filter((i) => !isMegaMenu(i));

  return (
    <>
      <header
        id="site-header"
        role="banner"
        className={scrolled ? "scrolled" : ""}
      >
        <div className="header-inner">
          {/* Logo */}
          <a
            href="/"
            className="logo-wordmark"
            aria-label={`${brand.name} — Home`}
          >
            {brand.logoSrc ? (
              <img
                src={brand.logoSrc}
                alt={brand.name}
                style={{ height: 28, width: "auto", display: "block" }}
              />
            ) : (
              <>
                <LogoMark />
                {brand.name}
              </>
            )}
          </a>

          {/* Desktop nav */}
          <nav
            ref={navRef}
            className="header-nav"
            aria-label="Main navigation"
            onMouseLeave={scheduleClose}
          >
            <ul>
              {brand.nav.topItems.map((item) => {
                if (isMegaMenu(item)) {
                  const panelId = `mega-${item.label.toLowerCase()}`;
                  const isOpen = activeMenu === item.label;
                  return (
                    <li
                      key={item.label}
                      className="mega-item"
                      onMouseEnter={() => openMenu(item.label)}
                      onMouseLeave={scheduleClose}
                    >
                      <button
                        className={`has-dropdown${isOpen ? " open" : ""}`}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        aria-haspopup="true"
                        onKeyDown={(e) => onTriggerKey(e, item.label)}
                        onFocus={() => openMenu(item.label)}
                      >
                        {item.label}
                        <ChevronDownIcon open={isOpen} />
                      </button>
                      {isOpen && (
                        <MegaMenuPanel
                          item={item}
                          id={panelId}
                          onClose={() => setActiveMenu(null)}
                        />
                      )}
                    </li>
                  );
                }
                return (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop actions */}
          <div className="header-actions">
            <a href={brand.nav.contactHref} className="contact-link">
              Contact
            </a>
            <a
              href={brand.nav.contactHref}
              className="btn btn-primary"
              style={{ fontSize: "14px", padding: "10px 22px" }}
            >
              {brand.cta.primary}
            </a>
            {/* Hamburger */}
            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen(true)}
            >
              <Menu aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <nav
        className={`mobile-nav${mobileOpen ? " open" : ""}`}
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        aria-modal={mobileOpen}
      >
        <button
          className="mobile-nav-close"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        >
          <X aria-hidden="true" />
        </button>

        <ul className="mobile-nav-list">
          {/* Mega-menu items as accordions */}
          {brand.nav.topItems.map((item) => {
            if (isMegaMenu(item)) {
              return (
                <MobileAccordionItem
                  key={item.label}
                  item={item}
                  onLinkClick={() => setMobileOpen(false)}
                />
              );
            }
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="mobile-plain-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={brand.nav.contactHref}
              className="mobile-plain-link"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="mobile-nav-cta">
          <a
            href={brand.nav.contactHref}
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setMobileOpen(false)}
          >
            {brand.cta.primary}
          </a>
        </div>
      </nav>

      {/* Overlay backdrop for mobile */}
      {mobileOpen && (
        <div
          className="mobile-nav-backdrop"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
