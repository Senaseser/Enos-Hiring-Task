import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
        <h1 className="navbar-title">Enos Weather Forecaster</h1>
        <img
        className="navbar-img"
          src={logo}
          alt="logo"
        ></img>
    </div>
  )
}

export default Navbar