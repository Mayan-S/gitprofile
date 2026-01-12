// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Mayan-S', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Mayan-S/gitprofile', 'Mayan-S/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Resume Builder',
          description:
            'Generate an engineering resume in under 5 minutes as a TeX or PDF file',
          imageUrl:
            'https://raw.githubusercontent.com/Mayan-S/profile/main/images/image.png',
          link: 'https://mayan-s.github.io/resume-builder/',
        },
        {
          title: 'Spotify Stats',
          description:
            'Display your Spotify listening data in a Spotify Wrapped style slideshow',
          imageUrl:
            'https://raw.githubusercontent.com/Mayan-S/profile/main/images/image_1.png',
          link: 'https://github.com/Mayan-S/spotify-stats',
        },
        {
          title: 'Document Scanner',
          description:
            'Uses OpenCV and Tesseract OCR to scan documents and extract text',
          imageUrl:
            'https://raw.githubusercontent.com/Mayan-S/profile/main/images/image_2.png',
          link: 'https://github.com/Mayan-S/document-scanner',
        },
        {
          title: 'Impossible Tic-Tac-Toe',
          description:
            'Choose between single-player and multi-player Tic-Tac-Toe',
          imageUrl:
            'https://raw.githubusercontent.com/Mayan-S/profile/main/images/image_4.png',
          link: 'https://github.com/Mayan-S/impossible-tic-tac-toe',
        },
        {
          title: 'DE1-SoC Arcade Game',
          description:
            'Asteroid dodging game on FPGA with VGA display, keyboard controls, and collision detection',
          imageUrl:
            'https://raw.githubusercontent.com/Mayan-S/profile/main/images/image_3.jpg',
          link: 'https://github.com/Mayan-S/DE1-SoC-Arcade-Game',
        },
        {
          title: 'Redesign Proposal for Chestnut Residence Building',
          description:
            'A description of the proposal to redesign the 27th and 28th floors of the Chestnut Residence building',
          imageUrl:
            'https://raw.githubusercontent.com/Mayan-S/profile/main/images/image_6.png',
          link: 'https://mayan-s.github.io/chestnut-residence-redesign/',
        },
      ],
    },
  },
  seo: { 
    title: 'Portfolio of Mayan Saravanabavan', 
    description: 'Electrical Engineering student at University of Toronto with experience in Python, C/C++, Verilog, and embedded systems', 
    imageURL: '' 
  },
  social: {
    linkedin: 'mayan-saravanabavan',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'mayan.saravanabavan@mail.utoronto.ca',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C',
    'C++',
    'HTML',
    'CSS',
    'Verilog',
    'RISC-V Assembly',
    'Git',
    'Quartus Prime',
    'ModelSim',
    'LTSpice',
    'Altium Designer',
    'KiCAD',
  ],
  experiences: [
    // Work Experience
    {
      company: 'CANUE',
      position: 'Undergraduate Research Assistant',
      from: 'July 2025',
      to: 'Present',
      companyLink: 'https://canue.ca',
    },
    {
      company: 'University of Toronto',
      position: 'Alumni Events Assistant',
      from: 'May 2025',
      to: 'June 2025',
      companyLink: 'https://www.utoronto.ca',
    },
    {
      company: 'Durham District School Board',
      position: 'Peer Tutor',
      from: 'September 2022',
      to: 'July 2023',
      companyLink: '',
    },
    {
      company: 'Youth In Politics',
      position: 'Technical Editor',
      from: 'June 2021',
      to: 'January 2023',
      companyLink: '',
    },
  ],
  certifications: [
    // Awards
    {
      name: 'University of Toronto Scholar',
      body: '',
      year: 'September 2024',
      link: '',
    },
    {
      name: 'Frank Howard Guest Admission Bursary',
      body: '',
      year: 'September 2024',
      link: '',
    },
    {
      name: 'Elexicon Energy Inc. Award',
      body: '',
      year: 'June 2024',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of Toronto',
      degree: 'BASc in Electrical Engineering + PEY Co-op',
      from: '2024',
      to: '2029',
    },
    {
      institution: 'J Clarke Richardson Collegiate',
      degree: 'Ontario Secondary School Diploma',
      from: '2020',
      to: '2024',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
