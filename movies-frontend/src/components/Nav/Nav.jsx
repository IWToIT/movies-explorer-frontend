import { NavLink } from 'react-router-dom';
import { authPath } from '../../constants/constants';

function Nav({ location, menuActivity }) {
  return (
    !authPath.includes(location.pathname) &&
    <>
      {window.screen.width > 768 ? (
        <div className="nav">
          <nav className="nav__links">
            <NavLink to="/movies" className="nav__link">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="nav__link">
              Сохранённые фильмы
            </NavLink>
          </nav>
          <NavLink to="/profile" className="nav__link nav__link_type_profile">
            Аккаунт
            <div className="nav__profile-logo" />
          </NavLink>
        </div>
      ) : (
        <div className={`nav ${menuActivity ? 'nav_active' : ''}`}>
          <nav className={`nav__links ${menuActivity ? 'nav__links_active' : ''}`}>
            <NavLink to="/" className="nav__link">
              Главная
              {location.pathname === '/' && <span className="nav__underline" />}
            </NavLink>
            <NavLink to="/movies" className="nav__link">
              Фильмы
              {location.pathname === '/movies' && <span className="nav__underline" />}
            </NavLink>
            <NavLink to="/saved-movies" className="nav__link">
              Сохранённые фильмы
              {location.pathname === '/saved-movies' && <span className="nav__underline" />}
            </NavLink>
            <NavLink to="/profile" className="nav__link nav__link_type_profile">
              Аккаунт
              {location.pathname === '/profile' && <span className="nav__underline" />}
              <div className="nav__profile-logo" />
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
}

export default Nav;
