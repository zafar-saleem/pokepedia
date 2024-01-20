import styled from "styled-components";

export const List = styled.div`
  margin-top: ${props => props.theme.tokens.gutter.gutter100};
`;

export const ListItem = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.5fr;
  background-color: #f3f3f3;
  border: 1px solid #cccccc;
  margin-bottom: ${props => props.theme.tokens.gutter.gutter100};

  svg {
    color: red;
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
  }
`;

export const Media = styled.img`
  width: 50px;
  margin-right: ${props => props.theme.tokens.gutter.gutter100};
`;

export const Title = styled.h2`
  font-size: 1rem;
  margin: 0;
  padding-top: 0.3rem;
`;
