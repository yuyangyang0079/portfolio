
import './Home.css'; // Optionally, create a separate CSS file for Home styling

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container text-center">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm <strong>Yangyang Yu</strong>, a passionate web developer. I'm excited to share my journey and skills with you. Feel free to explore my work and learn more about what I do!
        </p>
        <div>
        <img className='avatar' src="/src/assets/Avatar.png" alt="avatar" />
        </div>
        
        <button className="contact-btn" href="#contact">Contact Me</button>
      </div>
    </section>
  );
}

export default Home;




  