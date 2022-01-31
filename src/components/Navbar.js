import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(prop) {
  const sswitch = {
    cursor:'pointer'
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Text-Utils/">{prop.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Text-Utils/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Text-Utils/about">About</Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" style={sswitch} type="checkbox" onClick={prop.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${prop.mode==='light'?'dark':'light'}`} style={sswitch} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Text-Utils'
}