// ─────────────────────────────────────────────────────────────────────────────
//  Single source of truth for the portfolio.
//  To post an update: add an object to the TOP of `news` and redeploy.
//  Everything else on the site (stats, counts, filters) is derived from here.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Md. Shafiullah Shafin',
  // Name as it appears on publications; highlighted in author lists.
  pubName: ['Md Shafiullah Shafin', 'Shafiullah Shafin'],
  shortName: 'Shafin',
  role: 'Software Engineer (R&D)',
  org: 'HawarIT Limited',
  location: 'Dhaka, Bangladesh',
  email: 'shafiullahshafin735@gmail.com',
  photo: '/DP.jpg',
  site: 'https://shafiullahshafin.github.io',
  // Optional: path to a CV PDF placed in /public (e.g. '/CV.pdf'). null hides the button.
  cv: null,
  updated: 'November 2026',
};

export const socials = [
  { id: 'scholar', label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=U-EgXLIAAAAJ' },
  { id: 'orcid', label: 'ORCID', href: 'https://orcid.org/0009-0008-7855-486X' },
  { id: 'researchgate', label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Md-Shafiullah-Shafin-2' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/shafiullahshafin' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/shafiullahshafin/' },
  { id: 'codeforces', label: 'Codeforces', href: 'https://codeforces.com/profile/Ph00en1X' },
  { id: 'codechef', label: 'CodeChef', href: 'https://www.codechef.com/users/m00ndancer' },
];

// Ordered for academic readers: strongest evidence first.
export const interests = [
  // Software engineering research (MSR 2025 award paper, MSR PC service)
  'Software Engineering',
  'Mining Software Repositories',
  'Software Security',
  'Agentic AI',
  // Vision research (ICCIT 2023, ICCA 2024)
  'Computer Vision',
  'Medical Image Analysis',
  // Applied R&D (HawarIT, Image2BIM)
  '3D Reconstruction',
  'Photogrammetry',
  'Geospatial AI',
];

// type: paper | award | career | service | release | milestone
export const news = [
  {
    date: '2026-11',
    type: 'service',
    text: 'Invited to serve on the MSR 2027 Program Committee (Mining Challenge track).',
    href: 'https://2027.msrconf.org/committee/msr-2027-mining-challenge-mining-challenge',
  },
  {
    date: '2026-04',
    type: 'career',
    text: 'Joined HawarIT Limited as a Software Engineer (R&D).',
  },
  {
    date: '2025-10',
    type: 'service',
    text: 'Selected for the MSR 2026 Junior Program Committee (Technical Papers track).',
    href: 'https://2026.msrconf.org/committee/msr-2026-junior-pc-technical-papers---junior-program-committee',
  },
  {
    date: '2025-10',
    type: 'award',
    text: 'Reached the finals of the SRBD Code Contest 2025.',
  },
  {
    date: '2025-06',
    type: 'milestone',
    text: 'Completed B.Sc. in Computer Science and Engineering at RUET.',
  },
  {
    date: '2025-04',
    type: 'award',
    text: 'Received the Best Mining Challenge Paper Award at MSR 2025.',
    href: 'https://2025.msrconf.org/details/msr-2025-mining-challenge/6/Faster-Releases-Fewer-Risks-A-Study-on-Maven-Artifact-Vulnerabilities-and-Lifecycle',
  },
  {
    date: '2025-01',
    type: 'paper',
    text: 'Paper accepted to the MSR 2025 Mining Challenge track.',
  },
  {
    date: '2024-10',
    type: 'paper',
    text: 'Paper accepted to ACM ICCA 2024.',
  },
  {
    date: '2023-12',
    type: 'paper',
    text: 'Paper accepted to IEEE ICCIT 2023.',
  },
];

export const publications = [
  {
    id: 'shafin2025faster',
    title: 'Faster Releases, Fewer Risks: A Study on Maven Artifact Vulnerabilities and Lifecycle Management',
    authors: ['Md Shafiullah Shafin', 'Md Fazle Rabbi', 'S. M. Mahedy Hasan', 'Minhaz F. Zibran'],
    venue: '2025 IEEE/ACM 22nd International Conference on Mining Software Repositories (MSR)',
    venueShort: 'MSR 2025',
    publisher: 'IEEE',
    pages: '275–279',
    year: 2025,
    location: 'Ottawa, Ontario, Canada',
    award: 'Best Mining Challenge Paper Award',
    doi: '10.1109/MSR66628.2025.00049',
    abstract:
      'In modern software ecosystems, dependency management plays a critical role in ensuring secure and maintainable applications. However, understanding the relationship between release practices and their impact on vulnerabilities and update cycles remains a challenge. In this study, we analyze the release histories of 10,000 Maven artifacts, covering over 203,000 releases and 1.7 million dependencies. We evaluate how release speed affects software security and lifecycle. Our results show an inverse relationship between release speed and dependency outdatedness. Artifacts with more frequent releases maintain significantly shorter outdated times. We also find that faster release cycles are linked to fewer CVEs in dependency chains, indicating a strong negative correlation. These findings emphasize the importance of accelerated release strategies in reducing security risks and ensuring timely updates. Our research provides valuable insights for software developers, maintainers, and ecosystem managers.',
    bibtex: `@inproceedings{shafin2025faster,
  title     = {Faster Releases, Fewer Risks: A Study on Maven Artifact Vulnerabilities and Lifecycle Management},
  author    = {Shafin, Md Shafiullah and Rabbi, Md Fazle and Hasan, S. M. Mahedy and Zibran, Minhaz F.},
  booktitle = {2025 IEEE/ACM 22nd International Conference on Mining Software Repositories (MSR)},
  pages     = {275--279},
  year      = {2025},
  publisher = {IEEE},
  doi       = {10.1109/MSR66628.2025.00049}
}`,
  },
  {
    id: 'shafin2024multiscale',
    title: 'Multiscale Feature Fusion using Attention Mechanisms in Multiclass Skin Lesion Classification: A Comprehensive Study',
    authors: [
      'Md Shafiullah Shafin',
      'Humayra Tasnim',
      'Md. Rakibul Haque',
      'S. M. Mahedy Hasan',
    ],
    venue: 'Proceedings of the 3rd International Conference on Computing Advancements (ICCA)',
    venueShort: 'ICCA 2024',
    publisher: 'ACM',
    pages: '962–969',
    year: 2024,
    location: 'AIUB, Dhaka, Bangladesh',
    doi: '10.1145/3723178.3723306',
    abstract:
      "Skin lesions represent a diverse spectrum of skin abnormalities, while skin diseases encompass conditions affecting the skin's structure and function. Among these, skin cancer emerges as a critical concern, driven by uncontrolled abnormal cell growth. Early detection of lesions is pivotal, yet manual approaches are prone to human error and misdiagnosis. This study introduces a convolutional neural network (CNN)-based solution, the Sequential Triple AttentionNet (STA), to automate lesion detection while ensuring precise identification of affected regions within dermoscopic images and addressing challenges related to dominant image classes. The proposed STA architecture integrates features from pre-trained CNN models (e.g., ResNet-50, ResNet-101, DenseNet-169, and DenseNet-201) with three attention mechanisms, emphasizing critical features for accurate classification. The architecture, augmented by a single-layer ensemble (SLE), demonstrates enhanced performance and adaptability. Empirical evaluation on the HAM10000 and ISIC-2018 datasets yield remarkable accuracies of 98.78% and 98.40%, respectively, outperforming existing methods. These findings highlight the potential of the proposed approach for advancing skin lesion classification and enhancing proactive measures for the prevention of skin cancer.",
    bibtex: `@inproceedings{shafin2024multiscale,
  title     = {Multiscale Feature Fusion using Attention Mechanisms in Multiclass Skin Lesion Classification: A Comprehensive Study},
  author    = {Shafin, Md Shafiullah and Tasnim, Humayra and Haque, Md. Rakibul and Hasan, S. M. Mahedy and Fahim, A. S. M. Montashir and Alam, Mohammad Sakif},
  booktitle = {Proceedings of the 3rd International Conference on Computing Advancements},
  series    = {ICCA '24},
  pages     = {962--969},
  year      = {2024},
  publisher = {ACM},
  doi       = {10.1145/3723178.3723306}
}`,
  },
  {
    id: 'shafin2023stad',
    title: 'Skin Lesion Classification through Sequential Triple Attention DenseNet: Diverse Utilization of The Combination of Attention Modules',
    authors: [
      'Shafiullah Shafin',
      'Anwar Hossain Efat',
      'S. M. Mahedy Hasan',
    ],
    venue: '2023 26th International Conference on Computer and Information Technology (ICCIT)',
    venueShort: 'ICCIT 2023',
    publisher: 'IEEE',
    pages: '1–6',
    year: 2023,
    location: "Long Beach Hotel, Cox's Bazar, Bangladesh",
    doi: '10.1109/ICCIT60459.2023.10441280',
    abstract:
      "Skin lesions refer to a broad term encompassing any skin abnormality, while skin diseases are conditions impacting the skin's structure and function. Skin cancer, a specific skin disease, arises from uncontrolled abnormal skin cell growth. Early detection of lesions is crucial, but a challenge lies in precisely identifying regions within images, especially after accounting for dominant image classes. This article introduces an innovative approach, Sequential Triple Attention DenseNet (STAD), utilizing Convolutional Neural Networks (CNNs), DenseNet201, three attention mechanisms, and ensemble learning (EL). STAD focuses on salient features, pinpointing significant regions for classification. EL enhances performance and generalization. Various STAD model combinations contribute diverse feature maps, yielding improved outcomes. Empirical evaluation on the HAM1000 dataset achieves an impressive 99.18% accuracy, surpassing existing methods, highlighting its superiority. These findings hold promise for more efficient skin lesion recognition and skin cancer prevention techniques.",
    bibtex: `@inproceedings{shafin2023stad,
  title     = {Skin Lesion Classification through Sequential Triple Attention DenseNet: Diverse Utilization of The Combination of Attention Modules},
  author    = {Shafin, Shafiullah and Efat, Anwar Hossain and Hasan, S. M. Mahedy and Jannat, Nahrin and Oishe, Mahjabin and Mitu, Mostarina and Zaman, Mahib Uz},
  booktitle = {2023 26th International Conference on Computer and Information Technology (ICCIT)},
  pages     = {1--6},
  year      = {2023},
  publisher = {IEEE},
  doi       = {10.1109/ICCIT60459.2023.10441280}
}`,
  },
];

export const experience = [
  {
    org: 'HawarIT Limited',
    location: 'Dhaka, Bangladesh',
    role: 'Software Engineer (R&D)',
    period: 'Apr 2026 – Present',
    current: true,
    points: [
      'Build and deploy machine-learning workflows for GIS-based object detection and segmentation with YOLO and Segment Anything (SAM).',
      'Work on deep-learning R&D in computer vision and 3D reconstruction, and deploy the resulting models to production.',
    ],
  },
];

export const service = [
  {
    org: '24th International Conference on Mining Software Repositories (MSR 2027)',
    location: 'Dublin, Ireland',
    role: 'Program Committee Member, Mining Challenge',
    href: 'https://2027.msrconf.org/committee/msr-2027-mining-challenge-mining-challenge',
    period: 'Nov 2026 – Present',
    current: true,
    points: ['Serving on the Program Committee for the Mining Challenge track.'],
  },
  {
    org: '23rd International Conference on Mining Software Repositories (MSR 2026)',
    location: 'Rio de Janeiro, Brazil',
    role: 'Junior Program Committee Member, Technical Papers',
    href: 'https://2026.msrconf.org/committee/msr-2026-junior-pc-technical-papers---junior-program-committee',
    period: 'Oct 2025 – Jan 2026',
    points: [
      'Reviewed submissions to the Technical Papers track alongside the main Program Committee, took part in the rebuttal discussions, and received feedback on my reviews from senior PC members.',
    ],
  },
];

// preview: { image } shown as the card header (16:9)
export const projects = [
  {
    name: 'Image2BIM',
    year: 2026,
    blurb:
      'Turns indoor 360° panoramas and depth maps into IFC4 BIM models, LAS point clouds and measured 2D floor plans. It builds shared walls between rooms and cuts door and window openings that show correctly in Revit and BIMvision.',
    stack: ['Python', 'PyTorch', 'IfcOpenShell', 'OpenCV'],
    github: 'https://github.com/shafiullahshafin/Image2BIM',
    preview: { image: '/Image2BIM.svg' },
  },
  {
    name: 'Maze Runner',
    year: 2026,
    blurb:
      'A cross-platform desktop arcade game in Python/Pygame with difficulty levels, a lives system and a global leaderboard backed by PostgreSQL. Packaged as native apps for macOS, Windows and Linux.',
    stack: ['Python', 'Pygame', 'PostgreSQL', 'PyInstaller'],
    github: 'https://github.com/shafiullahshafin/Maze-Runner',
    preview: { image: '/MazeRunner.svg' },
  },
  {
    name: 'C Compiler',
    year: 2026,
    blurb:
      'A compiler for a subset of C written in pure C11 that emits native ARM64 assembly for Apple Silicon. Hand-written lexer, recursive-descent parser to an AST, scoped symbol tables, AAPCS64 calling convention, recursion, arrays and variadic printf.',
    stack: ['C11', 'ARM64', 'AAPCS64', 'CMake'],
    github: 'https://github.com/shafiullahshafin/C-Compiler',
    preview: { image: '/CCompiler.svg' },
  },
  {
    name: 'JARVIS',
    year: 2025,
    blurb:
      'An AI assistant for computer science, algorithms, web development and research. A RAG pipeline over a curated CS knowledge base in Astra DB, combined with live web search and a Groq-hosted LLM for concise, goal-focused answers.',
    stack: ['Next.js', 'TypeScript', 'RAG', 'Astra DB', 'Groq'],
    github: 'https://github.com/shafiullahshafin/JARVIS',
    demo: 'https://jarvis-cs.vercel.app/',
    preview: { image: '/JARVIS.svg' },
  },
];

export const education = [
  {
    school: 'Rajshahi University of Engineering & Technology (RUET)',
    degree: 'B.Sc. in Computer Science & Engineering',
    period: 'Jan 2020 – Jun 2025',
    score: 'CGPA 3.34 / 4.00',
    location: 'Rajshahi, Bangladesh',
    note: '**Activities:** Competitive programming, Research in medical imaging & software engineering',
    courses: [
      { code: 'CSE 3101', name: 'Database Systems' },
      { code: 'CSE 3209', name: 'Artificial Intelligence' },
      { code: 'CSE 3105', name: 'Software Engineering' },
      { code: 'CSE 4101', name: 'Compiler Design' },
      { code: 'CSE 3107', name: 'Applied Statistics & Queuing Theory' },
      { code: 'CSE 4201', name: 'Computer Graphics & Animations' },
      { code: 'CSE 3109', name: 'Microprocessors & Assembly Language' },
      { code: 'CSE 4207', name: 'VLSI Design' },
      { code: 'CSE 3201', name: 'Operating Systems' },
      { code: 'CSE 4215', name: 'Network Security' },
      { code: 'CSE 3203', name: 'Computer Architecture & Design' },
      { code: 'CSE 4221', name: 'Data Mining' },
      { code: 'CSE 3205', name: 'Computer Networks' },
      { code: 'MATH 2113', name: 'Vector Analysis & Linear Algebra' },
    ],
  },
  {
    school: 'Cantonment Public School & College, Saidpur',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2017 – 2019',
    score: 'GPA 5.00 / 5.00',
    location: 'Saidpur, Bangladesh',
  },
  {
    school: 'Ruhea High School, Thakurgaon',
    degree: 'Secondary School Certificate (SSC)',
    period: '2015 – 2017',
    score: 'GPA 5.00 / 5.00',
    location: 'Thakurgaon, Bangladesh',
  },
];

// group: research | competitive | olympiad
export const honors = [
  {
    title: 'Finalist, SRBD Code Contest 2025',
    org: 'Samsung R&D Institute Bangladesh (SRBD), Dhaka, Bangladesh',
    date: 'Oct 2025',
    group: 'competitive',
  },
  {
    title: 'Best Mining Challenge Paper Award',
    href: 'https://2025.msrconf.org/details/msr-2025-mining-challenge/6/Faster-Releases-Fewer-Risks-A-Study-on-Maven-Artifact-Vulnerabilities-and-Lifecycle',
    org: 'MSR 2025, IEEE/ACM International Conference on Mining Software Repositories',
    date: 'Apr 2025',
    group: 'research',
    detail: 'For “Faster Releases, Fewer Risks: A Study on Maven Artifact Vulnerabilities and Lifecycle Management”.',
  },
  {
    title: '20th Place, RUET CodeSmash 2020',
    href: 'https://toph.co/contests/training/kdze4d6/standings',
    org: 'Rajshahi University of Engineering & Technology',
    date: 'Jun 2022',
    group: 'competitive',
  },
  {
    title: 'Regional Champion, BdBO Biology Olympiad 2019',
    href: 'https://bdbo.org/bdbo-samakal-rangpur-regional-biology-olympiad-2019/',
    org: 'Rangpur Regional Round, Bangladesh Biology Olympiad',
    date: 'Mar 2019',
    group: 'olympiad',
    detail: 'Ranked 6th among regional champions and qualified for the national round.',
  },
];

// Concrete tools, libraries and languages only (concepts live in `interests`).
export const skills = [
  { group: 'Languages', items: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'Java', 'Bash'] },
  { group: 'ML & Vision', items: ['PyTorch', 'TensorFlow', 'YOLO', 'Segment Anything (SAM)', 'OpenCV'] },
  { group: 'Geospatial & 3D', items: ['QGIS', 'Revit', 'BIMvision', 'CloudCompare', 'Open3D', 'laspy', 'Shapely'] },
  { group: 'Web & Backend', items: ['React', 'Next.js', 'Node.js', 'Django', 'Django REST Framework'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'pandas', 'NumPy', 'Matplotlib'] },
  { group: 'Tools', items: ['Git', 'Docker', 'Linux', 'CMake', 'LaTeX'] },
];
