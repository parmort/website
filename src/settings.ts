export const profile = {
  fullName: 'Nolan Prochnau',
  title: 'Musician',
  description: ``,
  highlighted_ensembles: [
    {
      group: 'Brandywine String Quartet',
      description: `The Brandywine String Quartet is a concertizing string
        quartet in Chester County, PA, focusing on education and blending
        traditional string quartet repertoire with accessible selections.`
    },
    {
      group: 'Jarrettown United Methodist Church',
      position: 'Director of Music',
      description: ``
    },
  ],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
  email: 'nolanjprochnau@gmail.com',
  linkedin: '',
  x: '',
  github: '',
  gitlab: '',
  scholar: '',
  inspire: '',
  arxiv: '',
}

export const template = {
  website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
  menu_left: false,
  transitions: true,
  lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
  darkTheme: 'light', // Select one of the Daisy UI Themes or create your own
  excerptLength: 200,
  postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
  default_title: 'Nolan Prochnau',
  default_description: 'Violist and Organist',
  default_image: '/images/astro-academia.png',
}
