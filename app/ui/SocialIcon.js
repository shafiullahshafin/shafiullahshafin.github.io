import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { SiGooglescholar, SiOrcid, SiResearchgate, SiCodeforces, SiCodechef } from 'react-icons/si';

const map = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  scholar: SiGooglescholar,
  orcid: SiOrcid,
  researchgate: SiResearchgate,
  codeforces: SiCodeforces,
  codechef: SiCodechef,
  youtube: FaYoutube,
};

export default function SocialIcon({ id, size = 16 }) {
  const Icon = map[id];
  return Icon ? <Icon size={size} aria-hidden="true" /> : null;
}
