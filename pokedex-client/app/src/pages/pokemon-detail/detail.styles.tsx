import styled, { css } from "styled-components";

const centered = css`
  max-width: ${props => props.theme.breakpoints.m};
  margin: auto;
`;

export const Container = styled.div`
  ${centered};
  border: 1px solid ${props => props.theme.borderColor};
`;

export const ImageWrapper = styled.div`
  text-align: center;
`;

export const Wrapper = styled.div`
  position: relative;
  padding: ${props => props.theme.tokens.gutter.gutter100};
  background-color: #f3f3f3;

  h2 {
    margin: 0;
  }

  svg {
    color: red;
    position: absolute;
    right: 1rem;
    top: 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const ProgresStyles = css`
  width: 85%;
  height: 10px;
  border-radius: 10rem;
  display: inline-block;
  margin-right: 1rem;
`;

export const ProgressCP = styled.div`
  ${ProgresStyles}
  background-color: #9fa1fc;
`;

export const ProgressHP = styled.div`
  ${ProgresStyles}
  background-color: #74c0a2;
`;

export const PokemonBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;

  h5 {
    margin: 0.5rem;
  }
`;

const bodyAttributes = css`
  display: block;
  padding: ${props => props.theme.tokens.gutter.gutter100};
  background-color: #f3f3f3;
  border-top: 1px solid ${props => props.theme.borderColor};
`;

export const WeightContainer = styled.div`
  ${bodyAttributes};
  border-right: 1px solid ${props => props.theme.borderColor};
`;

export const HeightContainer = styled.div`
  ${bodyAttributes};
`;

export const Evolutions = styled.div`
  ${centered};
`;

export const EvolutionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

export const EvolutionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  text-align: center;
  border: 1px solid ${props => props.theme.borderColor};

  span {
    display: block;
    text-align: left;
    font-weight: bold;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #f3f3f3;
  }

  svg {
    color: red;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const Media = styled.img`
  width: 150px;
`;
