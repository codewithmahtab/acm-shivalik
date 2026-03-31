export const teamMembers = [
  {
    id: 1,
    name: 'Gaurav Singh',
    role: 'Chairperson',
    year: '3rd Year',
    branch: 'CSE',
    image: '/images/team/chairperson.jpeg',
  },
  {
    id: 2,
    name: 'Rifat Parvez',
    role: 'Vice Chairperson',
    year: '3rd Year',
    branch: 'AIML',
    image:
      '/images/team/viceChairperson.jpeg',
  },
  {
    id: 3,
    name: 'Mohd Mahtab',
    role: 'Technical Head (Membership Chair)',
    year: '3rd Year',
    branch: 'CSE',
    image: '/images/team/technicalhead.jpeg',
  },
  {
    id: 4,
    name: 'Gaurav Kumar',
    role: 'Secretary',
    year: '2nd Year',
    branch: 'ECE',
    image: '/images/team/Secretary.jpeg',
  },
  {
    id: 5,
    name: 'Shivam Kumar',
    role: 'Treasurer',
    year: '2nd Year',
    branch: 'CSE',
    image: '/images/team/Treasurer.jpeg',
  },
  {
    id: 6,
    name: 'Shivam Raj',
    role: 'Joint Secretary',
    year: '2nd Year',
    branch: 'CSE',
    image: '/images/team/jointsecretary.jpeg',
  },
  {
    id: 7,
    name: 'Prashant Shekhar',
    role: 'Campus Ambassador Lead',
    year: '3rd Year',
    branch: 'CSE',
    image: '/images/team/campusambassadorlead.jpeg',
  },
  {
    id: 8,
    name: 'Ishant',
    role: 'Corporate Relations Head',
    year: '3rd Year',
    branch: 'ME',
    image: '/images/team/CorporateRelationshead.jpeg',
  },
  {
    id: 9,
    name: 'Khushi Kumari',
    role: 'Application Head',
    year: '3rd Year',
    branch: 'CSE',
    image: '/images/team/Applicationhead.jpeg',
  },
  {
    id: 10,
    name: 'Mahesh Singh Pawar',
    role: 'Event Head',
    year: '3rd Year',
    branch: 'CSE',
    image: '/images/team/Eventhead.jpeg',
  },
  {
    id: 11,
    name: 'Aman Bharadwaj',
    role: 'Media Head',
    year: '2nd Year',
    branch: 'CSE',
    image: '/images/team/MediaHead.jpeg',
  },
  {
    id: 12,
    name: 'Ankit Panwar',
    role: 'Marketing Head',
    year: '2nd Year',
    branch: 'BBA',
    image: '/images/team/marketinghead.jpeg',
  },
  {
    id: 13,
    name: 'Ankit Raj',
    role: 'Inter-College Relations Coordinator',
    year: '2nd Year',
    branch: 'CSE',
    image: '/images/team/InterCollegeRelationsCoordinator.jpeg',
  },
  {
    id: 14,
    name: 'Mishti',
    role: 'Alumni Relations Coordinator',
    year: '2nd Year',
    branch: 'BCA',
    image: '/images/team/AlumniRelationsCoordinator.jpeg',
  },
  {
    id: 15,
    name: 'Ansh Pandey',
    role: 'Research & Publication Lead',
    year: '1st Year',
    branch: 'CSE',
    image: '/images/team/Research&PublicationLead.jpeg',
  },
  {
    id: 16,
    name: 'Priyanjali',
    role: 'Media Vice Head',
    year: '1st Year',
    branch: 'BBA',
    image: '/images/team/MediaViceHead.jpeg',
  },
  {
    id: 17,
    name: 'Agrani Mishra',
    role: 'Vice Research Head',
    year: '1st Year',
    branch: 'CSE',
    image: '/images/team/ViceResearchHead.jpeg',
  },
  {
    id: 18,
    name: 'Kumar Satyam',
    role: 'Graphic Head',
    year: '1st Year',
    branch: 'BCA',
    image: '/images/team/GraphicHead.jpeg',
  },
];

export const facultyMembers = [
  {
    id: 1,
    name: 'Kshitij Jain',
    role: 'ACM Faculty Coordinator',
    image:
      '/images/team/facultyCoordinator.jpeg',
  },
];

export const events = [
  {
    id: 1,
    type: 'Hackathon',
    status: 'upcoming' as const,
    title: 'National Level Hackathon 2K26',
    desc: 'Join us for the National Level Hackathon 2K26. Solve real-world problems across domains like Smart Agriculture, Healthcare, Clean Tech, AI & Cybersecurity, and more.',
    poster: 'https://lh7-rt.googleusercontent.com/formsz/AN7BsVBvdH19xJcHoL-cLSfm6mtVXUT0HZWRgy_qJT-0NrVlbp4kEF79gK5ZkhWDV7D9rMmBskSirKEje6v3oRbjAr398GdwUqfBVedrwthgWGnWAy-FybeJ3z2BkJDVqXUFBOjklD1whOzKpk_bGJt5usJOQKaX5NJmuL_yYDy2rZR3jIZwXWONN6_QcDCcvk7IFMPb5W3Lw9l2XCx6=w1024?key=GNfkgadBcAAancVxvJpfUg',
    date: '10 Apr 2026',
    time: 'Multi-Phase',
    venue: 'Shivalik College of Engineering, Dehradun',
    tags: ['AI & CyberSec', 'Smart Healthcare', 'Open Theme', '₹1.2L Prizes'],
    highlights: [
      { label: 'Phases', value: '3 Phases' },
      { label: 'Team Size', value: '4 - 6' },
      { label: 'Prizes Worth', value: '₹ 1.2 Lakh' },
      { label: 'Location', value: 'Dehradun' },
    ],
    registerUrl: 'https://hacknation1-0.vercel.app/',
  },
  {
    id: 2,
    type: 'Hackathon',
    status: 'past' as const,
    title: 'HackShivalik 1.0',
    desc: "ACM Chapter Shivalik's flagship 12-hour hackathon. Students built real-world solutions across domains like AI, Web, and IoT. A night of fast builds, big ideas, and real shipping.",
    date: '2025',
    time: '12 Hours',
    venue: 'Main Auditorium, SCE',
    tags: ['Open Theme', '12 Hours', 'Team / Solo'],
    highlights: [
      { label: 'Duration', value: '12 Hours' },
      { label: 'Team Size', value: '1 – 4' },
      { label: 'Participants', value: '120+' },
      { label: 'Location', value: 'Dehradun' },
    ],
    registerUrl: null,
  },
];

export const domains = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Building full-stack web apps using modern frameworks and tools.',
    icon: 'Globe',
  },
  {
    id: 2,
    title: 'AI & Machine Learning',
    description:
      'Exploring intelligent systems, models, and data-driven solutions.',
    icon: 'Brain',
  },
  {
    id: 3,
    title: 'Cybersecurity',
    description:
      'Understanding threats, ethical hacking, and building secure systems.',
    icon: 'Shield',
  },
  {
    id: 4,
    title: 'App Development',
    description: 'Creating cross-platform mobile apps for Android and iOS.',
    icon: 'Smartphone',
  },
  {
    id: 5,
    title: 'Open Source',
    description:
      'Contributing to the global open source community and building in public.',
    icon: 'Code',
  },
  {
    id: 6,
    title: 'Cloud & DevOps',
    description:
      'Deploying, scaling and automating infrastructure on modern cloud platforms.',
    icon: 'Cloud',
  },
];

export const codeOfConduct = [
  {
    title: 'General Ethical Principles',
    desc: 'Contribute to society, avoid harm, be honest, trustworthy, and fair in all computing work.',
  },
  {
    title: 'Professional Responsibilities',
    desc: 'Strive for excellence, maintain competence, and respect privacy and intellectual property.',
  },
  {
    title: 'Leadership Responsibilities',
    desc: 'Design inclusive systems, manage resources responsibly, and support the community.',
  },
  {
    title: 'Compliance with Code',
    desc: 'Uphold, promote, and respect the principles of this code in all professional endeavors.',
  },
];

export const stats = [
  { label: 'Members', value: '18+' },
  { label: 'Hackathons', value: '1' },
  { label: 'Domains', value: '6' },
  { label: 'Years Active', value: '1+' },
];
