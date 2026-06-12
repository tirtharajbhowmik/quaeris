import { brand } from "@/config/brand.config";

function LogoMark() {
  return (
    <div className="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none">
        <path
          d="M8 2L10 7H15L11 10L12.5 15L8 12L3.5 15L5 10L1 7H6L8 2Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socialIcons = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
} as const;

export default function SiteFooter() {
  const { footer, name } = brand;

  return (
    <footer id="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              href="/"
              className="logo-wordmark"
              style={{ marginBottom: "var(--space-5)", display: "inline-flex" }}
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
                  {name}
                </>
              )}
            </a>
            <p className="footer-thesis">{footer.thesis}</p>
            <p className="footer-brand-desc">{footer.brandDesc}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading} className="footer-col">
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom container">
        <div className="footer-bottom-left">
          <span>{footer.copyright}</span>
          {footer.legalLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="social-icons" aria-label="Social media links">
          {footer.socials.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                className="social-icon"
                aria-label={social.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
