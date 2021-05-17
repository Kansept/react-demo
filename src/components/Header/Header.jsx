import logo from './../../logo.svg';
import s from './Header.module.css';

const Header = () => {
    return (
      <header className={s.header}>
        <img src={logo} alt="Лого" height="40"/>
      </header>
    );
}

export default Header;