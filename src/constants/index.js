export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#project',
      personalProject : {
        
      }
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Netflix-Home Page clone',
      desc: 'I created a Netflix homepage clone that adapts seamlessly to all screen sizes, ensuring a consistent user experience. The site features responsive navigation, carousel sliders, a grid layout, and custom styling to enhance the design. This project showcases my ability to build modern, user-friendly web interfaces.',
      subdesc:
        "Developed using HTML, CSS,Bootstrap, and Javascript this Netflix homepage clone ensures seamless responsiveness, modern UI design, and high performance across devices with a clean layout.",
      href: 'https://netflix-home-page.s3.us-east-2.amazonaws.com/index.html',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.ico',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Html',
          path: '/assets/technologies_logo/html.svg',
        },
        {
          id: 2,
          name: 'Css',
          path: 'assets/technologies_logo/css.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/technologies_logo/javascript.svg',
        },
        {
          id: 4,
          name: 'BootStrap',
          path: '/assets/technologies_logo/Bootstrap_logo.png',
        },
        
      ],
    },
    {
      title: 'Spotify - Music Playing Website',
      desc: 'I developed a Spotify-inspired music player website that dynamically fetches music tracks using JavaScript and integrates Firebase Authentication for user sign-up, login, and logout. With a responsive design that adapts smoothly across all devices, this project demonstrates my ability to create engaging, user-friendly web applications.',
      subdesc:
        'Developed using HTML, CSS, JavaScript, and Firebase, this Spotify-inspired music player dynamically fetches tracks, ensuring seamless responsiveness and an engaging user interface across all devices.',
      href: 'https://spotify1315.freewebhostmost.com/index.html',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Html',
          path: '/assets/technologies_logo/html.svg',
        },
        {
          id: 2,
          name: 'Css',
          path: 'assets/technologies_logo/css.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/technologies_logo/javascript.svg',
        },
        {
          id: 4,
          name: 'Fire Base',
          path: '/assets/technologies_logo/firebase.svg',
        },
      ],
    },
    {
      title: 'SwiftCart - Online E-commerce Website',
      desc: ' I developed SwiftCart, a personal e-commerce project that highlights my skills in web development. This dynamic and interactive website utilizes HTML, CSS, and JavaScript to create a responsive user interface that enhances the online shopping experience. Key features include product display, category filtering, and a search functionality, all designed to make navigation intuitive and engaging.',
      subdesc:
        'Built with HTML, CSS, and JavaScript, SwiftCart delivers a seamless and responsive e-commerce experience, integrating external APIs for dynamic product data and user-friendly interactions.',
      href: 'https://swift-cart.s3.us-east-2.amazonaws.com/public/index.html',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Html',
          path: '/assets/technologies_logo/html.svg',
        },
        {
          id: 2,
          name: 'Css',
          path: 'assets/technologies_logo/css.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/technologies_logo/javascript.svg',
        },
        {
          id: 4,
          name: 'Api',
          path: '/assets/technologies_logo/apiw.png',
        },
        {
          id: 5,
          name: 'BootStrap',
          path: '/assets/technologies_logo/Bootstrap_logo.png',
        },

      ],
    },
    {
      title: 'CoinWatch - Cryptocurrency Extension',
      desc: 'CoinWatch is a Google Chrome extension designed to help users track cryptocurrency prices and manage their favorite coins efficiently. This project showcases my skills in web development, featuring user authentication, real-time data retrieval, and detailed historical data visualization, all aimed at enhancing the cryptocurrency trading experience.',
      subdesc:
        'Developed with React, JavaScript, and Material-UI, CoinWatch integrates Firebase for secure user authentication and the CoinGecko API for real-time price updates, providing a seamless and interactive experience for cryptocurrency enthusiasts.',
      href: 'https://chromewebstore.google.com/detail/cryptowatch/dkblgnpmcbchofckopipgkjehhheahdf',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/technologies_logo/react.svg',
        },
        {
          id: 2,
          name: 'Material Ui',
          path: 'assets/technologies_logo/material-ui.svg',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/technologies_logo/javascript.svg',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
        {
          id: 5,
          name: 'Fire Base',
          path: '/assets/technologies_logo/firebase.svg',
        },
        {
          id: 6,
          name: 'Apex Chart',
          path: '/assets/technologies_logo/apexchart.png',
        },
      ],
    },
    {
      title: 'EatExpress - Streamlined Multi-Vendor Restaurant Management',
      desc: 'EatExpress is a multi-vendor platform where vendors can register, add up to 10 restaurants, and manage food products for each restaurant. The vendor dashboard offers an intuitive interface to streamline restaurant management and product listings.',
      subdesc:
        'Built with a backend powered by Express, Mongoose, Node.js, and JWT for secure authentication, EatExpress ensures efficient vendor management. The frontend is developed using React, Material-UI, and CSS, providing a seamless and responsive experience for vendors.',
      href: 'https://eat-express-backend-and-froentend-vendor-dashboard.vercel.app',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: 'white',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/technologies_logo/react.svg',
        },
        {
          id: 2,
          name: 'Node Js',
          path: 'assets/technologies_logo/node-js-icon.webp',
        },
        {
          
          id: 3,
          name: 'Express js',
          path: '/assets/technologies_logo/express-js.png',
        },
        {
          id: 4,
          name: 'Mongodb',
          path: '/assets/technologies_logo/mongodb.png',
        },
        {
          id: 6,
          name: 'Material Ui',
          path: 'assets/technologies_logo/material-ui.svg',
        },
        {
          id: 6,
          name: '\Jwt',
          path: 'assets/technologies_logo/jwt.png',
        },
        {
          id: 7,
          name: 'JavaScript',
          path: '/assets/technologies_logo/javascript.svg',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isVerySmall, isSmall, isMobile, isTablet, isMedium) => {
    return {
      deskScale: isSmall ? 0.059 : isMobile ? 0.1 : isMedium ?  0.09 : isTablet ? 0.09 :0.1,
      deskPosition: isVerySmall ? [0.5, -5, 0] :  isSmall ? [0.5, -4.5, 0] : isMobile ? [0.7, -8, 0] : isMedium ? [0.7, -6, 0] : isTablet ? [1, -6, 0] : [0.24, -7.8, 0],
      cubePosition:  isVerySmall ? [5.2, -6, 0]: isSmall ? [4.5, -5, 0] : isMobile ? [8, -7, 0] : isMedium ? [7.3, -5, 0] : isTablet ? [7.3, -5, 0]  : [12, -9, 0], // Merge same mobile/tablet values
      reactLogoPosition: isVerySmall ? [4.7, 3, 0] : isSmall ? [4.2, 4, 0] : isMobile ? [7, 5, 0] : isMedium ? [6.8, 5, 0] : isTablet ? [6, 5.5, 0] : [11, 3.5, 0], // Merge same mobile/tablet values
      ringPosition:  isVerySmall ?  [-11, 8, 0] : isSmall  ? [-9.6, 10, 0]  : isMobile ? [-17, 13, 0] :  isMedium  ? [-15, 13, 0] : isTablet ? [-15, 15, 0] : [-30, 7, 0],
      targetPosition: isVerySmall? [-1.5, -10, -10] : isSmall ? [-0.7, -9, -10] : isMobile ? [-5, -10, -10] : isTablet ? [-4, -9, -10] : [-12, -12, -10],
    };
  };
  
  
  export const workExperiences = [
    /*{
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    }, */
    {
      id: 1,
      name: 'Lumen Technologies',
      pos: 'Web Developer',
      duration: '2022[Aug] - 2023[Jun]',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/Lumen.png.webp',
      animation: 'clapping',
    },
    {
      id: 2,
      name: 'Cognizant',
      pos: 'Junior Web Developer',
      duration: '2022 [Jan] - 2022 [July]',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/cognizant.png',
      animation: 'salute',
    },
  ];






 






