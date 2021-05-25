import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.css';

const Navbar = (props) => {
    return (
      <nav className={s.nav}>
        <ul>
          <li><NavLink to="/profile" activeClassName={s.active} className={s.item}>Profile</NavLink></li>
          <li><NavLink to="/dialogs" activeClassName={s.active} className={s.item}>Messages</NavLink></li>
          <li><NavLink to="/news" activeClassName={s.active} className={s.item}>News</NavLink></li>
          <li><NavLink to="/music" activeClassName={s.active} className={s.item}>Music</NavLink></li>
          <li><NavLink to="/settings" activeClassName={s.active} className={s.item}>Settings</NavLink></li>
        </ul>
        <Friends friends={props.state.friends}/>
      </nav>
    );
}

export default Navbar;
