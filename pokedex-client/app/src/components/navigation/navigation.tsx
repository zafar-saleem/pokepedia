import { useLocation } from "react-router-dom"
import * as Styles from "./navigation.styles";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <Styles.Nav>
        <Styles.NavItem>
          <Styles.NavLink to="/" className={pathname === "/" ? `active` : null}>All</Styles.NavLink>
        </Styles.NavItem>
        <Styles.NavItem>
          <Styles.NavLink to="/favorites" className={pathname === "/favorites" ? `active` : null}>Favorites</Styles.NavLink>
        </Styles.NavItem>
      </Styles.Nav>
    </nav>
  )
}

export default Navigation;
