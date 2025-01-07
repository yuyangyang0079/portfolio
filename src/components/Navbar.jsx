
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top mt-3 ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='brand-logo' src="/android-chrome-512x512.png" alt="" />my portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#projects">Project</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}




export default MyNavbar;
