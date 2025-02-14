import React from 'react';
import './services.css';

const services = [
  { id: 1, title: 'HTML TASKS', description: 'To explore my HTML TASKS and tasks, click the link below...', content: '<h1>HTML Tasks</h1><p>Here you can list all the HTML tasks...</p>' },
  { id: 2, title: 'CSS TASKS', description: 'To explore my CSS TASKS and tasks, click the link below', content: '<h1>CSS Tasks</h1><p>Here you can list all the CSS tasks...</p>' },
  { id: 3, title: 'JAVA SCRIPT TASKS', description: 'To explore my JAVA SCRIPT TASKS and tasks, click the link below...', content: '<h1>JavaScript Tasks</h1><p>Here you can list all the JavaScript tasks...</p>' },
  { id: 4, title: 'REACT TASKS', description: 'To explore my REACT TASKS and tasks, click the link below...', content: '<h1>React Tasks</h1><p>Here you can list all the React tasks...</p>' },
//   { id: 5, title: 'Digital marketing', description: 'Web development is the process of building, programming...', link: '#' },
//   { id: 6, title: 'Content writing', description: 'Web development is the process of building, programming...', link: '#' },
];

const ServiceCard = ({ id, title, description, content }) => {
  const handleReadMore = () => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(content);
    newWindow.document.close();
  };

  return (
    <div className="service-card">
      <h2>{id < 10 ? `0${id}` : id}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleReadMore}>Read More →</button>
    </div>
  );
};

const Services = ({ setCurrentPage }) => (
  <div className="services">
    <h1>My Services</h1>
    <div className="services-grid">
      {services.map(service => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  </div>
);

export default Services;
