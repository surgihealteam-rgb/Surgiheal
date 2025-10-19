export const navItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Services',
    dropdown: [
      {
        name: 'Emergency Care',
        href: '/services/emergency',
        description: '24/7 emergency medical services'
      },
      {
        name: 'General Surgery',
        href: '/services/surgery',
        description: 'Advanced surgical procedures'
      },
      {
        name: 'Laparoscopic Surgery',
        href: '/services/laparoscopic-surgery',
        description: 'Minimally invasive surgical procedures'
      },
      {
        name: 'Laser Surgery',
        href: '/services/laser-surgery',
        description: 'Minimally invasive laser procedures'
      },
      {
        name: 'Gynecology & Obstetrics',
        href: '/services/gynecology',
        description: 'Comprehensive womens health care'
      },
      {
        name: 'Urology',
        href: '/services/urology',
        description: 'Urological and kidney care'
      },
      {
        name: 'Gastroenterology',
        href: '/services/gastroenterology',
        description: 'Digestive system care'
      },
      {
        name: 'Oncology',
        href: '/services/oncology',
        description: 'Comprehensive cancer care'
      },
      {
        name: 'Orthopedics',
        href: '/services/orthopedics',
        description: 'Bone and joint treatments'
      },
      {
        name: 'Proctology',
        href: '/services/proctology',
        description: 'Treatment for piles, fissures, and anorectal disorders'
      }
    ]
  },
  {
    name: 'Doctors',
    dropdown: [
      {
        name: 'Find a Doctor',
        href: '/find-doctor',
        description: 'Search our medical professionals'
      },
      {
        name: 'Specialties',
        href: '/doctors/specialties',
        description: 'Browse by medical specialty'
      },
      {
        name: 'Book Consultation',
        href: '/book-consultation',
        description: 'Schedule an appointment'
      }
    ]
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
];