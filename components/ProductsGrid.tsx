import styled from "styled-components";
import ProductBox from "@/components/ProductBox";
import { RevealWrapper } from 'next-reveal';
import { IProductResponse } from "@/types/Product";

const StyledProductsGrid = styled.div<{ interval: number }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

interface ProductsGridProps {
  products: IProductResponse[];
  wishedProducts?: string[]; 
}

export default function ProductsGrid({ products, wishedProducts = [] }: ProductsGridProps) {
  return (
    <StyledProductsGrid interval={100}>
      {products?.length > 0 && products.map((product, index) => (
        <RevealWrapper key={product._id} delay={index * 50}>
          <ProductBox {...product} wished={wishedProducts.includes(product._id)} />
        </RevealWrapper>
      ))}
    </StyledProductsGrid>
  );
}