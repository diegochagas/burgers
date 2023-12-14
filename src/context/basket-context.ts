import { createContext, Dispatch, SetStateAction } from 'react';
import { Product } from '../components/Items';

interface BasketContextProps {
  basketProducts: Product[];
  setBasketProducts: Dispatch<SetStateAction<Product[]>>;
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
  subTotal: number;
  setSubTotal: Dispatch<SetStateAction<number>>;
}

const BasketContext = createContext<BasketContextProps>({
  basketProducts: [],
  setBasketProducts: () => {},
  total: 0,
  setTotal: () => {},
  subTotal: 0,
  setSubTotal: () => {},
});

export default BasketContext;
