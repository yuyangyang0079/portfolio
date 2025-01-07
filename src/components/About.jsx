import './About.css';

function About() {
  return (
    <div className="about container py-5" id="about">
      <div>
      <h2 className="text-center mb-4">About Me</h2>
      <p>
        I'm a web developer with a passion for creating beautiful and functional websites. 
        I specialize in React, Node.js, and PostgreSQL.
      </p>   
      </div>

      <h4>Skills:</h4>
      <ul>
        <li>HTML, </li>
        <li> CSS,</li>
        <li>JavaScript,</li>
        <li>Bootstrap,</li>
        <li>npm,</li>
        <li>vite,</li>
        <li>ejs,</li>
        <li> Node.js,</li>
        <li>React.js,</li>
        <li>PostgreSQL </li>
      </ul>
    </div>
  );
}

export default About;
