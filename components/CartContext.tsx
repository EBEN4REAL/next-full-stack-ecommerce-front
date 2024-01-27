import { createContext, useEffect, useState } from "react";

interface CartContextType {
  cartProducts: any[];
  setCartProducts: React.Dispatch<React.SetStateAction<any[]>>;
  addProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cartProducts: [],
  setCartProducts: () => {},
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState<any[]>([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts, ls]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")!));
    }
  }, [ls]);

  function addProduct(productId: any) {
    setCartProducts((prev) => [...prev, productId]);
  }

  function removeProduct(productId: any) {
    setCartProducts((prev) => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  }

  function clearCart() {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider
      value={{ cartProducts, setCartProducts, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}