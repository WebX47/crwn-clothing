import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
