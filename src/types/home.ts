import React from "react";
import ProductItem from "./ProductItem";

export interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number; // giá giảm
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Áo thun nam",
    price: 200000,
    discount: 150000,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Quần jeans nữ",
    price: 350000,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Giày thể thao",
    price: 500000,
    discount: 450000,
    image: "https://via.placeholder.com/100",
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
