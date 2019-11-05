const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'James Kurniawan',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | James Kurniawan',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | James Kurniawan',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | James Kurniawan',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | James Kurniawan',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
