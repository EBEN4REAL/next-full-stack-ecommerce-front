import styled, { keyframes } from "styled-components";
import { ButtonStyle } from "@/components/Button";
import { primary } from "@/lib/colors";
import { useContext, useEffect, useRef, MouseEvent } from "react";
import { CartContext } from "@/components/CartContext";

interface FlyingButtonProps {
  white?: boolean;
  main?: boolean;
  _id?: string;
  src?: string;
  children?: React.ReactNode;
  outline?: boolean;
}

const flyAnimation = keyframes`
  100% {
    top: 0;
    left: 65%;
    opacity: 0;
    display: none;
    max-width: 50px;
    max-height: 50px;
  }
`;

const FlyingButtonWrapper = styled.div<{ white?: boolean; main?: boolean, outline?: boolean }>`
  button {
    ${ButtonStyle};
    ${({ main }) => main ? `
      background-color: ${primary};
      color: white;
    ` : `
      background-color: transparent;
      border: 1px solid ${primary};
      color: ${primary};
    `}
    ${({ white }) => white && `
      background-color: white;
      border: 1px solid white;
      font-weight: 500;
    `}
  }

  img {
    display: none;
    max-width: 100px;
    max-height: 100px;
    opacity: 1;
    position: fixed;
    z-index: 5;
    animation: ${flyAnimation} 1s;
    border-radius: 10px;
  }
`;

export default function FlyingButton(props: FlyingButtonProps) {
  const { addProduct } = useContext(CartContext);
  const imgRef = useRef<HTMLImageElement>(null);

  function sendImageToCart(ev: MouseEvent<HTMLButtonElement>) {
    if (imgRef.current) {
      imgRef.current.style.display = 'inline-block';
      imgRef.current.style.left = (ev.clientX - 50) + 'px';
      imgRef.current.style.top = (ev.clientY - 50) + 'px';
      setTimeout(() => {
        if (imgRef.current) {
          imgRef.current.style.display = 'none';
        }
      }, 1000);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const reveal = imgRef.current?.closest('div[data-sr-id]');
      if (reveal instanceof HTMLElement && reveal?.style.opacity === '1') {
        reveal.style.transform = 'none';
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <FlyingButtonWrapper white={props.white} main={props.main}>
      <img src={props.src} alt="" ref={imgRef} />
      <button onClick={(ev) => sendImageToCart(ev)}>{props.children}</button>
    </FlyingButtonWrapper>
  );
}