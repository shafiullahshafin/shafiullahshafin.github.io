import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { SiGooglescholar, SiOrcid, SiResearchgate, SiCodechef } from 'react-icons/si';

// Codeforces' official logo is three coloured bars (yellow, blue, red),
// so it is drawn here instead of using a single-colour icon.
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
  github: FaGithub,
  linkedin: FaLinkedinIn,
  scholar: SiGooglescholar,
  orcid: SiOrcid,
  researchgate: SiResearchgate,
  codeforces: CodeforcesLogo,
  codechef: SiCodechef,
  youtube: FaYoutube,
};

export default function SocialIcon({ id, size = 16 }) {
  const Icon = map[id];
  return Icon ? <Icon size={size} aria-hidden="true" /> : null;
}
