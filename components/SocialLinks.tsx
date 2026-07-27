type SocialLink = {
  name: string;
  href: string;
  handle?: string;
};

function SocialIcon({ name }: { name: string }) {
  const className = "h-5 w-5";

  switch (name) {
    case "X":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M17.9 3H21l-6.77 7.74L22.2 21h-6.24l-4.89-6.4L5.48 21H2.35l7.24-8.28L2 3h6.4l4.42 5.85L17.9 3Zm-1.1 16.13h1.73L7.55 4.76H5.7l11.1 14.37Z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1.01-.07Z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.87.24-1.46 1.5-1.46H16.6V4.46c-.28-.04-1.23-.12-2.34-.12-2.31 0-3.89 1.41-3.89 4v2.16H7.86v3h2.51V21h3.13Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SocialLinks({
  links,
  variant = "light",
  display = "tiles",
}: {
  links: SocialLink[];
  variant?: "light" | "dark";
  display?: "tiles" | "icons";
}) {
  const isLight = variant === "light";

  if (display === "icons") {
    return (
      <div className="flex flex-wrap gap-3">
        {links.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              social.handle
                ? `${social.name}: ${social.handle}`
                : `Follow Altiora Consults on ${social.name}`
            }
            title={social.handle ?? social.name}
            className="flex h-11 w-11 items-center justify-center border border-white/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
          >
            <SocialIcon name={social.name} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {links.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={
            social.handle
              ? `${social.name}: ${social.handle}`
              : `Follow Altiora Consults on ${social.name}`
          }
          className={`group flex flex-col justify-center border px-4 py-4 transition-colors ${
            isLight
              ? "border-navy-deep/15 bg-white/50 hover:border-gold hover:bg-white"
              : "border-white/10 bg-white/5 hover:border-gold/50 hover:bg-white/10"
          }`}
        >
          <span
            className={`text-xs font-medium uppercase tracking-widest ${
              isLight
                ? "text-navy-deep group-hover:text-gold"
                : "text-cream group-hover:text-gold"
            }`}
          >
            {social.name}
          </span>
          {social.handle && (
            <span
              className={`mt-1 truncate text-[11px] ${
                isLight ? "text-muted-foreground" : "text-cream/50"
              }`}
            >
              {social.handle}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
