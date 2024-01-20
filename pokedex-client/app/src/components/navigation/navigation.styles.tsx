import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  // gap: 1rem;
  text-align: center;
  border: 1px solid ${props => props.theme.palette.branding.color500};
`;

export const NavItem = styled.li`

`;

export const NavLink = styled(Link)`
  display: block;
  padding: 1rem;
  color: ${props => props.theme.palette.branding.color500};
  
  &.active {
    color: ${props => props.theme.palette.branding.color100};
    background-color: ${props => props.theme.palette.branding.color500};
  }
`;
