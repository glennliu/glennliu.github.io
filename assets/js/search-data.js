// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "In reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-a-paper-is-accepted-by-ieee-t-ase",
          title: 'A paper is accepted by IEEE T-ASE.',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-ieee-t-ro",
          title: 'One paper is accepted by IEEE T-RO.',
          description: "",
          section: "News",},{id: "news-smile-i-have-successfully-defended-my-ph-d-thesis-thank-my-supervisor-prof-shen-thank-all-of-my-examiners-prof-ping-tan-prof-dan-xu-prof-zili-meng-and-prof-yiqiang-wang",
          title: ':smile: I have successfully defended my Ph.D. thesis. Thank my supervisor Prof. Shen....',
          description: "",
          section: "News",},{id: "projects-formation-flight-of-9-drones",
          title: 'Formation flight of 9 drones',
          description: "Outdoor entertainment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/skypix_project.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
