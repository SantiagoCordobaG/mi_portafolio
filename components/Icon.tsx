import { PropsWithChildren } from "react";
import { IconName } from "@/types/site";

interface IconProps {
  name: IconName;
  className?: string;
}

const commonProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

function IconSvg({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <svg aria-hidden="true" className={className} {...commonProps}>
      {children}
    </svg>
  );
}

export default function Icon({ name, className }: IconProps) {
  switch (name) {
    case "arrowUpRight":
      return (
        <IconSvg className={className}>
          <path d="M7 17 17 7" />
          <path d="M9 7h8v8" />
        </IconSvg>
      );
    case "badgeCheck":
      return (
        <IconSvg className={className}>
          <path d="m12 3 2.2 2.1 3-.2.9 2.8 2.7 1.2-.9 2.8.9 2.8-2.7 1.2-.9 2.8-3-.2L12 21l-2.2-2.1-3 .2-.9-2.8-2.7-1.2.9-2.8-.9-2.8 2.7-1.2.9-2.8 3 .2Z" />
          <path d="m9 12 2 2 4-4" />
        </IconSvg>
      );
    case "briefcase":
      return (
        <IconSvg className={className}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
        </IconSvg>
      );
    case "code2":
      return (
        <IconSvg className={className}>
          <path d="m8 9-4 3 4 3" />
          <path d="m16 9 4 3-4 3" />
          <path d="m13 6-2 12" />
        </IconSvg>
      );
    case "cpu":
      return (
        <IconSvg className={className}>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M9 1v4M15 1v4M9 19v4M15 19v4M19 9h4M19 15h4M1 9h4M1 15h4" />
          <path d="M10 10h4v4h-4z" />
        </IconSvg>
      );
    case "database":
      return (
        <IconSvg className={className}>
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
          <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </IconSvg>
      );
    case "download":
      return (
        <IconSvg className={className}>
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 21h14" />
        </IconSvg>
      );
    case "fileText":
      return (
        <IconSvg className={className}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6M9 17h6M9 9h2" />
        </IconSvg>
      );
    case "github":
      return (
        <IconSvg className={className}>
          <path d="M9 18c-4 1.2-4-2-6-2" />
          <path d="M15 22v-3.9a3.3 3.3 0 0 0-.9-2.6c3-.3 6-1.5 6-6.8A5.3 5.3 0 0 0 18.7 5 4.9 4.9 0 0 0 18.6 1S17.5.7 15 2.4a13.3 13.3 0 0 0-6 0C6.5.7 5.4 1 5.4 1A4.9 4.9 0 0 0 5.3 5 5.3 5.3 0 0 0 3.9 8.7c0 5.2 3 6.5 6 6.8a3.3 3.3 0 0 0-.9 2.6V22" />
        </IconSvg>
      );
    case "globe":
      return (
        <IconSvg className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14.5 14.5 0 0 1 0 18" />
          <path d="M12 3a14.5 14.5 0 0 0 0 18" />
        </IconSvg>
      );
    case "graduationCap":
      return (
        <IconSvg className={className}>
          <path d="m2 10 10-5 10 5-10 5Z" />
          <path d="M6 12v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4" />
        </IconSvg>
      );
    case "linkedin":
      return (
        <IconSvg className={className}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
          <path d="M2 9h4v12H2Z" />
          <circle cx="4" cy="4" r="2" />
        </IconSvg>
      );
    case "mail":
      return (
        <IconSvg className={className}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </IconSvg>
      );
    case "qrCode":
      return (
        <IconSvg className={className}>
          <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
          <path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" />
        </IconSvg>
      );
    case "server":
      return (
        <IconSvg className={className}>
          <rect x="3" y="4" width="18" height="6" rx="2" />
          <rect x="3" y="14" width="18" height="6" rx="2" />
          <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
        </IconSvg>
      );
    case "shield":
      return (
        <IconSvg className={className}>
          <path d="M12 3 5 6v6c0 5 3.4 7.8 7 9 3.6-1.2 7-4 7-9V6Z" />
          <path d="m9.5 12 1.7 1.7 3.3-3.7" />
        </IconSvg>
      );
    case "sparkles":
      return (
        <IconSvg className={className}>
          <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7Z" />
          <path d="M5 19 6 21l2 1-2 1-1 2-1-2-2-1 2-1Z" />
          <path d="M19 15 20 17l2 1-2 1-1 2-1-2-2-1 2-1Z" />
        </IconSvg>
      );
    case "terminal":
      return (
        <IconSvg className={className}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="m7 9 3 3-3 3" />
          <path d="M13 15h4" />
        </IconSvg>
      );
    case "workflow":
      return (
        <IconSvg className={className}>
          <rect x="3" y="4" width="6" height="6" rx="1.5" />
          <rect x="15" y="4" width="6" height="6" rx="1.5" />
          <rect x="9" y="14" width="6" height="6" rx="1.5" />
          <path d="M9 7h6M12 10v4" />
        </IconSvg>
      );
    case "wrench":
      return (
        <IconSvg className={className}>
          <path d="M14.5 6.5a4 4 0 0 0-5 5L4 17a2.1 2.1 0 1 0 3 3l5.5-5.5a4 4 0 0 0 5-5l-2 2-3-3Z" />
        </IconSvg>
      );
    default:
      return null;
  }
}
