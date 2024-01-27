import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import { IProductResponse } from "@/types/Product";

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
`;

interface Props {
  products: IProductResponse[],
  wishedProducts: string[]
}
export default function NewProducts({products, wishedProducts}: Props) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid products={products} wishedProducts={wishedProducts} />
    </Center>
  );
}