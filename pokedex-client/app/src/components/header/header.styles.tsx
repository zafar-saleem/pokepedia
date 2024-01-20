import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 5px 5px -2px #cccccc;
`;

export const Controllers = styled.div`
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 2fr 0.6fr 0.20fr 0.20fr;
`;

export const Button = styled(Link)`
  border: 0px solid red;
  cursor: pointer;
  background: transparent;
  background: url(./assets/list.webp) no-repeat;

  span {
    display: block;
    height: 5px;
    margin-bottom: 3px;
    background: ${props => props.theme.palette.branding.color500};
  }

  &.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // padding: 1rem;
    background: url(./assets/grid.webp) no-repeat;

    span {
      width: 10px;
      height: 15px;
      display: inline-block;
    }
  }
`;
