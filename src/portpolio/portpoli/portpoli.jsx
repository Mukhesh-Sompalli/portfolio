import React from 'react';
import './portpoli.css'; // Assuming you have a CSS file for styling
import Lazyriver from "./lazyriver.jpg";
import HtmlCss from "./htmlcss.png";
import Boxrotator from "./boxrotator.jpg";
import Movies from "./moviesfilter.jpg";
import Portpolio1 from "./portpolio12.png";

const projects = [
  {
    id: 1,
    title: 'HTML-CSS TEMPLATE',
    tagline: 'Responsive web page design',
    image: HtmlCss,
    description: 'I built a simple yet fully responsive website using HTML5 and CSS3. The site adjusts seamlessly across various devices, including desktops, tablets, and mobiles, ensuring a smooth user experience. I utilized media queries to ensure the layout fits all screen sizes perfectly. A clean navigation bar with interactive hover effects was designed for ease of use. I applied Flexbox and CSS Grid to organize content neatly and efficiently. The website features a goldenrod color theme with hover effects to enhance visual appeal. Additionally, I focused on using semantic HTML tags like <header>, <section>, and <footer> to improve SEO and accessibility.',
    deployLink: ' https://mukhesh-sompalli.github.io/pr-template/',
    sourceCodeLink: 'https://github.com/Mukhesh-Sompalli/projecttask/blob/main/index.html',
  },
  {
    id: 2,
    title: 'NETFLIX CLONE',
    tagline: 'Streaming platform interface',
    image: 'https://fueler.io/storage/users/timeline_image/1698732274-pvn0jzm7qa43cuazyx3s.jpg',
    description: 'I recently built a simple Netflix Clone project using React.js. This project replicates the UI and experience of Netflix while utilizing locally stored videos placed in a relative path instead of fetching data from external APIs. The application features a fully responsive Netflix-style UI, displaying movies and TV shows in categorized sections. It includes a search bar that allows users to find movies from local storage easily.This project also incorporates Firebase authentication, enabling users to sign up and log in for a personalized experience. React Router is implemented for seamless navigation between pages like Home, Movie Details, and Login. Additionally, the project includes a custom HTML5 video player with play, pause, volume control, and fullscreen support for an enhanced viewing experience.The UI is built using CSS Flexbox, Grid, and media queries, ensuring responsiveness across different devices. Interactive features like hover effects, a dynamic navbar, and smooth navigation improve the user experience. Future enhancements may include a "My List" feature, advanced UI animations, and additional functionalities to make the platform more engaging.',
    deployLink: 'https://netflix-jade-seven.vercel.app/',
    sourceCodeLink: 'https://vercel.com/mukhesh-sompallis-projects/netflix/3u1qD75ZUGFEthoBVsRbX9dus3HV/source',
  },
  {
    id: 3,
    title: 'BOX ROTATOR',
    tagline: 'Interactive rotating box animation',
    image: Boxrotator,
    description: 'An interactive 3D box rotation animation using CSS.',
    deployLink: 'https://your-deployment-link.com/box-rotator',
    sourceCodeLink: 'https://github.com/yourusername/box-rotator',
  },
  {
    id: 4,
    title: 'MOVIES LIST',
    tagline: 'Dynamic movie catalog display',
    image: Movies,
    description: 'A movie listing app with filter and search functionalities.',
    deployLink: 'https://your-deployment-link.com/movies-list',
    sourceCodeLink: 'https://github.com/yourusername/movies-list',
  },
  {
    id: 5,
    title: 'LAZY RIVER',
    tagline: 'Smooth scrolling content flow',
    image: Lazyriver,
    description: 'A smooth horizontal scrolling feature for web content.',
    deployLink: 'https://your-deployment-link.com/lazy-river',
    sourceCodeLink: 'https://github.com/yourusername/lazy-river',
  },
  {
    id: 6,
    title: 'Fake Store API',
    tagline: 'Fetching and displaying product cards',
    image: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3fqoynbiyvtxa2kh3vrn.png',
    description: 'Displays products fetched from Fake Store API.',
    deployLink: 'https://your-deployment-link.com/fake-store-api',
    sourceCodeLink: 'https://github.com/yourusername/fake-store-api',
  },
  {
    id: 7,
    title: 'MATCHING CARDS',
    tagline: 'Interactive memory card game',
    image: 'https://media.istockphoto.com/id/1427286707/photo/light-bulb-on-yellow-background-inspiration-and-creative-idea-concept.jpg?s=612x612&w=0&k=20&c=trOuKMYWNTlxODSAuvs1577nvv0paA_hmoB8HvzFRZY=',
    description: 'A fun memory game where players match pairs of cards.',
    deployLink: 'https://your-deployment-link.com/matching-cards',
    sourceCodeLink: 'https://github.com/yourusername/matching-cards',
  },
  {
    id: 8,
    title: 'PortFolio',
    tagline: 'Personal Portfolio Website',
    image: Portpolio1,
    description: 'A portfolio website showcasing projects and skills.',
    deployLink: 'https://your-deployment-link.com/portfolio',
    sourceCodeLink: 'https://github.com/yourusername/portfolio',
  },
];

const ProjectCard = ({ id, title, tagline, image, deployLink, sourceCodeLink }) => {
  const handleReadMore = () => {
    const projectDetails = projects.find(project => project.id === id);
    if (projectDetails) {
      const newTab = window.open("", "_blank");
      newTab.document.write(`
        <html>
          <head>
            <title>${projectDetails.title}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #1f1c2c, #928dab);
                color: white;
                padding: 20px;
                text-align: center;
              }
              h1 {
                font-size: 3em;
                margin-bottom: 20px;
                background: linear-gradient(45deg, #ff00ff, #ff8c00);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              p {
                font-size: 1.2em;
                margin: 10px 0;
              }
              a {
                color: #ff8c00;
                text-decoration: none;
                font-weight: bold;
              }
              button {
                background-color: #ff8c00;
                color: #fff;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1em;
                margin-top: 20px;
                transition: background-color 0.3s;
              }
              button:hover {
                background-color: #ff00ff;
              }
            </style>
          </head>
          <body>
            <h1>${projectDetails.title}</h1>
            <p><strong>Tagline:</strong> ${projectDetails.tagline}</p>
            <p><strong>Description:</strong> ${projectDetails.description}</p>
            <p><strong>Deployment:</strong> <a href="${projectDetails.deployLink}" target="_blank">${projectDetails.deployLink}</a></p>
            <p><strong>Source Code:</strong> <a href="${projectDetails.sourceCodeLink}" target="_blank">${projectDetails.sourceCodeLink}</a></p>
            <button onclick="window.close()">Close</button>
          </body>
        </html>
      `);
    }
  };

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{tagline}</p>
      <a href={deployLink} target="_blank" rel="noopener noreferrer" className="button">Live Demo</a>
      <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="button">Source Code</a>
      <button onClick={handleReadMore}>Read More →</button>
    </div>
  );
};

const Portfolio = () => (
  <div className="portfolio">
    <h1>My Latest Projects</h1>
    <div className="portfolio-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </div>
);

export default Portfolio;