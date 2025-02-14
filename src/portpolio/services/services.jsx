import React from 'react';
import './services.css';

const services = [
  {
    id: 1,
    title: 'HTML TASKS',
    tasks: [
      {
        name: 'HTML Forms',
        description: 'Create a form with various input fields.',
        deployLink: 'https://example.com/html-form',
        sourceCode: 'https://github.com/user/html-form'
      },
      {
        name: 'HTML Tables',
        description: 'Build a structured table with multiple rows and columns.',
        deployLink: 'https://example.com/html-table',
        sourceCode: 'https://github.com/user/html-table'
      }
    ]
  },
  {
    id: 2,
    title: 'CSS TASKS',
    tasks: [
      {
        name: 'WEEK CHART Using Box MOdel',
        description: 'I built a Weeks Chart using only the CSS Box Model to display the seven days of the week inside a circular container. This project demonstrates how to position elements precisely using margins, paddings, borders, and background properties without relying on Flexbox or Grid.',
        deployLink: 'https://mukhesh-sompalli.github.io/weeks-chart/',
        sourceCode: 'https://github.com/Mukhesh-Sompalli/weeks-chart/blob/main/index.html'
      },
      {
        name: 'FLEX BOX Using FLEX properties',
        description: 'The given HTML and CSS code creates a responsive service card layout using Flexbox. At the top, there is a header displaying the title Flex Box, styled with a red shadow effect.Below it, a container holds multiple service cards, each containing an image, company name, description, and a 4-star rating using Font Awesome icons.The layout is designed to be responsive, meaning it adjusts based on screen size. When the screen width is 600px or more, the cards resize and align neatly, maintaining a structured view. The design uses Flexbox properties like flex-wrap, gap, and justify-content to ensure proper spacing and alignment.',
        deployLink: 'https://mukhesh-sompalli.github.io/flexboxes12/',
        sourceCode: 'https://github.com/Mukhesh-Sompalli/transitions/blob/main/index.html'
      },
      {
        name: 'KEYBOARD Using FLEX properties',
        description: 'This code creates a visual representation of a keyboard using HTML and CSS. The HTML structure consists of multiple div elements, each representing different keys of a keyboard, organized into rows such as function keys, number keys, and alphabetic keys. CSS styles define the layout and appearance, including borders, box shadows, and flex properties to align keys properly. Special keys like "Backspace," "Shift," and "Space" have adjusted flex properties to span multiple key spaces. The design includes hover effects that change the background color of specific keys when hovered over. Additionally, a media query ensures responsiveness by adjusting the keyboard Is width and layout when the screen width is 600px or smaller, making it more readable on smaller devices.',
        deployLink: 'https://mukhesh-sompalli.github.io/keyboard123/',
        sourceCode: 'https://github.com/Mukhesh-Sompalli/keyboard123/blob/main/index.html'
      },
      {
        name: 'CHESS Using GRID And GRID Properties',
        description: 'This HTML and CSS code creates a simple chessboard layout using the CSS Grid system. The container div is structured with an 8x8 grid, ensuring each square is evenly distributed. Each cell represents a chessboard tile, alternating between black and antiquewhite to mimic a traditional chessboard pattern. The chess pieces are represented using Font Awesome icons, placed inside specific grid cells. These icons are styled using classes like .sol and .ol, which define their color, size, and alignment to appear centered within each tile. Additionally, a media query is included to make the layout responsive for smaller screen widths, though there is a small typo (mai-width instead of min-width). This design efficiently represents a static chessboard with proper alignment of chess pieces for both players..',
        deployLink: 'https://mukhesh-sompalli.github.io/chess-grid/',
        sourceCode: 'https://github.com/Mukhesh-Sompalli/chess-grid/blob/main/index.html'
      },
      {
        name: 'FAN SPEED Using GRID TEMPLATE AREAS',
        description: 'This HTML and CSS code creates a simple interactive element where an SVG icon rotates at different speeds based on the selected radio button. The svg element is styled with a fixed width of 100px and positioned using margin properties. The radio buttons allow users to choose different speeds, each corresponding to a specific CSS transition duration. The checked radio input triggers a transformation using the CSS sibling selector (~), applying a rotate(360deg) effect to the svg element. The transition duration varies from 1 to 5 seconds depending on the selected input. However, this approach has limitations because radio buttons do not revert upon deselection, meaning the animation only triggers once per selection',
        deployLink: 'https://mukhesh-sompalli.github.io/transforms/',
        sourceCode: 'https://github.com/Mukhesh-Sompalli/transforms/blob/main/index.html'
      },
      {
        name: 'CAR SPEED Using Transitions',
        description: 'This code creates an interactive SVG rotation effect where selecting different radio buttons changes the rotation speed of an SVG icon. The svg element is styled with a fixed width of 100px and positioned using margin properties. The rotation effect is controlled by CSS sibling selectors (~), which apply different transition durations when a specific radio button is checked. The #num, #num1, #num2, and #num3 radio inputs correspond to rotation speeds of 1s, 3s, 4s, and 5s, respectively. However, due to the nature of radio buttons, the animation only triggers once per selection and does not reset',
        deployLink: 'https://mukhesh-sompalli.github.io/transitions/',
        sourceCode: 'https://github.com/Mukhesh-Sompalli/transforms/blob/main/index.html'
      }

    ]
  },
  {
    id: 3,
    title: 'JAVASCRIPT TASKS',
    tasks: [
      {
        name: 'JS Calculator',
        description: 'Create a calculator using JavaScript.',
        deployLink: 'https://example.com/js-calculator',
        sourceCode: 'https://github.com/user/js-calculator'
      },
      {
        name: 'DOM Manipulation',
        description: 'Practice changing HTML elements dynamically with JavaScript.',
        deployLink: 'https://example.com/js-dom',
        sourceCode: 'https://github.com/user/js-dom'
      }
    ]
  },
  {
    id: 4,
    title: 'REACT TASKS',
    tasks: [
      {
        name: 'React Todo App',
        description: 'Build a simple Todo List using React.',
        deployLink: 'https://example.com/react-todo',
        sourceCode: 'https://github.com/user/react-todo'
      },
      {
        name: 'React Weather App',
        description: 'Fetch and display weather data dynamically in React.',
        deployLink: 'https://example.com/react-weather',
        sourceCode: 'https://github.com/user/react-weather'
      }
    ]
  }
];

const Services = () => {
  const handleReadMore = (service) => {
    const newWindow = window.open("", "_blank");

    newWindow.document.write(`
      <html>
        <head>
          <title>${service.title}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #222;
              color: white;
              text-align: center;
              padding: 20px;
            }
            .back-button {
              background-color: #ff8c00;
              color: white;
              padding: 10px 20px;
              border: none;
              border-radius: 5px;
              font-size: 1rem;
              cursor: pointer;
              position: absolute;
              top: 20px;
              left: 20px;
              box-shadow: 0 4px 8px rgba(255, 105, 180, 0.4);
              transition: transform 0.2s ease-in-out;
            }
            .back-button:hover {
              transform: scale(1.1);
            }
            .tasks-container {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 20px;
              justify-content: center;
              padding: 60px 20px 20px;
            }
            .task-card {
              background-color: #333;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(255, 105, 180, 0.4);
              text-align: left;
            }
            h1 {
              color: #ff8c00;
              margin-top: 50px;
            }
            h2 {
              color: #fff;
            }
            a {
              color: #ff8c00;
              text-decoration: none;
              font-weight: bold;
            }
            hr {
              border: 0;
              height: 1px;
              background: #555;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <button class="back-button" onclick="window.close()">🔙 Back to Home</button>
          <h1>${service.title}</h1>
          <div class="tasks-container">
            ${service.tasks.map(task => `
              <div class="task-card">
                <h2>✔ ${task.name}</h2>
                <p>${task.description}</p>
                <p>🔗 <a href="${task.deployLink}" target="_blank">Live Demo</a></p>
                <p>💻 <a href="${task.sourceCode}" target="_blank">Source Code</a></p>
              </div>
            `).join('')}
          </div>
        </body>
      </html>
    `);

    newWindow.document.close();
  };

  return (
    <div className="services">
      <h1>My Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={service.id}>
            <div className="service-number">0{index + 1}</div>
            <h2>{service.title}</h2>
            <p>To explore my {service.title}, click the link below...</p>
            <button onClick={() => handleReadMore(service)}>Read More →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
