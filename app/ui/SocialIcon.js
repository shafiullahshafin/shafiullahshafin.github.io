import { FaGithub, FaYoutube } from 'react-icons/fa6';
import { SiResearchgate, SiCodechef } from 'react-icons/si';

// Icons drawn in their sites' official logo colours.
// Single-colour logos (GitHub, ResearchGate, CodeChef) use `currentColor`,
// set per site in globals.css (`.brand-icon[data-brand=...]`).

function ScholarLogo({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" aria-hidden="true">
      <path fill="#4285F4" d="M256 411.12L0 202.667 256 0z" />
      <path fill="#356AC3" d="M256 411.12l256-208.453L256 0z" />
      <circle fill="#A0C3FF" cx="256" cy="362.667" r="149.333" />
      <path
        fill="#76A7FA"
        d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"
      />
    </svg>
  );
}

function OrcidLogo({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#A6CE39" />
      <path
        fill="#FFFFFF"
        fillRule="evenodd"
        d="M7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"
      />
    </svg>
  );
}

function LinkedinLogo({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#FFFFFF"
        transform="translate(5.5 5.5) scale(0.0290)"
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      />
    </svg>
  );
}

function CodeforcesLogo({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="0" y="7.5" width="6" height="13.5" rx="1.5" fill="#F7C745" />
      <rect x="9" y="3" width="6" height="18" rx="1.5" fill="#1A8FCD" />
      <rect x="18" y="10.5" width="6" height="10.5" rx="1.5" fill="#C21C24" />
    </svg>
  );
}

const map = {
  scholar: ScholarLogo,
  orcid: OrcidLogo,
  researchgate: SiResearchgate,
  github: FaGithub,
  linkedin: LinkedinLogo,
  codeforces: CodeforcesLogo,
  codechef: SiCodechef,
  youtube: FaYoutube,
};

export default function SocialIcon({ id, size = 16 }) {
  const Icon = map[id];
  return Icon ? <Icon size={size} aria-hidden="true" /> : null;
}
