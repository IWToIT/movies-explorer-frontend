import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ menuActivity, onMenuToggle, location }) {
  const menuPath = ['/profile', '/movies', '/saved-movies'];
  const authPath = ['/signup', '/signin'];

  return (
    <header className={`header ${authPath.includes(location.pathname) ? 'header_for_auth' : menuPath.includes(location.pathname) ? 'header_for_movies' : ''}`}>
      <Link to="/" className="logo" />
      {location.pathname === '/signin' && <h2 className="header__title">Рады видеть!</h2>}
      {location.pathname === '/signup' && <h2 className="header__title">Добро пожаловать!</h2>}
      <>
        {location.pathname === '/' && (
          <>
            <div className="header__auth-container">
              <Link to="/signup" className="header__link">
                Регистрация
              </Link>
              <Link to="/signin" className="header__link header__link_type_green">
                Войти
              </Link>
            </div>
            {menuActivity && (
              <>
                <div
                  onClick={onMenuToggle}
                  className={`header__menu-container ${menuActivity ? 'header__menu-container_type_mobile' : ''}`}
                >
                  <span className={`header__menu ${menuActivity ? 'header__menu_active' : ''}`} />
                </div>
                <Navigation location={location} menuActivity={menuActivity} />
              </>
            )}
          </>
        )}
        {menuPath.includes(location.pathname) && (
          <>
            <Navigation location={location} menuActivity={menuActivity} />
            <div
              onClick={onMenuToggle}
              className={`header__menu-container ${menuActivity ? 'header__menu-container_type_mobile' : ''}`}
            >
              <span className={`header__menu ${menuActivity ? 'header__menu_active' : ''}`} />
            </div>
          </>
        )}
        
      </>
    </header>
  );
}

export default Header;
