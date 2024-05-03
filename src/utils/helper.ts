import { Product } from '../types/types';

export const showFilterOptions = (products: Product[]) => {
  const options = Array.from(
    new Set(products.map((product) => product.product_type))
  );
  return options;
}

export const calculateTotalPrice = (cardItems: Product[]) => {
  let totalSum = cardItems.reduce((total, item) => total + +item.price, 0);
  totalSum = parseFloat(totalSum.toFixed(2));
  return totalSum;
};

export const calculateQuantity = (shoppingHistory: Product[][]) => {
  const quantityMap = new Map<string, number>();

  shoppingHistory.forEach((checkout: Product[]) => {
    checkout.forEach((product: Product) => {
      const { id } = product;
      if (quantityMap.has(id)) {
        quantityMap.set(id, quantityMap.get(id)! + 1);
      } else {
        quantityMap.set(id, 1);
      }
    });
  });

  return quantityMap;
};


