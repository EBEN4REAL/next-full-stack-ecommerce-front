import Link from "next/link";
import styled from "styled-components";
import { ButtonStyle } from "@/components/Button";

const StyledLink = styled.a`
  ${ButtonStyle}
`;

interface ButtonLinkProps {
  children: React.ReactNode;
  href: string;
  outline?: number;
  white?: number;
}

export default function ButtonLink({ children, href, outline, white, ...rest }: ButtonLinkProps) {
  return (
    <Link href={href}>
      <StyledLink {...rest}>{children}</StyledLink>
    </Link>
  );
}