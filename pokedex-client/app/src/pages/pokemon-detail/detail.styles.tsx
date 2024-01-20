import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: ${props => props.theme.breakpoints.m};
  margin: auto;
  // padding: ${props => props.theme.tokens.gutter.gutter100};
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
