import styled, { CSSObject, FlattenSimpleInterpolation, css } from "styled-components";
import { primary } from "@/lib/colors";
import React, { ButtonHTMLAttributes } from "react";

export const ButtonStyle = (
  props: { block?: boolean; white?: boolean; black?: boolean; primary?: boolean; outline?: boolean; size?: string }
): FlattenSimpleInterpolation => css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 15px;
  svg {
    height: 16px;
    margin-right: 5px;
  }
  ${props.white && props.outline && css`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
`}
  ${props.black && props.outline && css`
  background-color: transparent;
  color: #000;
  border: 1px solid #000;
`}
  ${props.black && !props.outline && css`
  background-color: #000;
  color: #fff;
`}
  ${props.block && css`
    display: block;
    width: 100%;
  `}
  ${props.white && !props.outline && css`
    background-color: #fff;
    color: #000;
  `}
  ${props.primary && !props.outline && css`
    background-color: ${primary};
    border: 1px solid ${primary};
    color: #fff;
  `}
  ${props.primary && props.outline && css`
    background-color: transparent;
    border: 1px solid ${primary};
    color: ${primary};
  `}
  ${props.size === 'l' && css`
    font-size: 1.2rem;
    padding: 10px 20px;
    svg {
      height: 20px;
    }
  `}
`;

const StyledButton = styled.button`
  ${(props: { block?: boolean; white?: boolean; black?: boolean; primary?: boolean; outline?: boolean; size?: string }) => ButtonStyle(props)}
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  primary?: boolean;
  black?: boolean;
  block?: boolean;
  white?: boolean;
  outline?: boolean;
}

export default function Button({children, ...rest }: Props) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}