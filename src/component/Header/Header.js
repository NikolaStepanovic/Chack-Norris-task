import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={classes.Box}>
      <NavLink
        to={'/career'}
        exact
        activeStyle={{ backgroundColor: 'yellowgreen' }}
        className={classes.Btn}
      >
        career
      </NavLink>
      <NavLink
        activeStyle={{ backgroundColor: 'yellowgreen' }}
        to={'/money'}
        className={classes.Btn}
      >
        money
      </NavLink>
      <NavLink
        activeStyle={{ backgroundColor: 'yellowgreen' }}
        to={'/explicit'}
        className={classes.Btn}
      >
        explicit
      </NavLink>
    </div>
  );
};

export default Header;
