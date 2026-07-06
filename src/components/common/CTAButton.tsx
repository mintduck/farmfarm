import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
};

function CTAButton({
  href,
  children,
  ariaLabel,
  className = "cta-button",
}: CTAButtonProps) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export default CTAButton;
