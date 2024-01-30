import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Media = styled.img`
  width: 180px;
  height: 180px;
`;

export const Title = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
`;

export const Info = styled.div`
  position: relative;
  background-color: #f3f3f3;
  padding: 1rem;

  svg {
    position: absolute;
    right: 1rem;
    top: 2rem;
    color: red;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  border: 1px solid #cccccc;
`;
