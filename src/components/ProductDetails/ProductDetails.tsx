import type { Product } from "../../types/product";
import PriceTag from "./PriceTag";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";
import "./ProductDetails.css";

interface Props {
  product: Product;
}

const ProductDetails = ({ product }: Props) => (
  <div className="details">
    <h4 className="company-name">Sneaker Company</h4>
    <h1 className="product-title">{product.name}</h1>
    <p className="product-description">{product.description}</p>

    <PriceTag price={product.price} discount={product.discount} />

    <div className="purchase-section">
      <QuantitySelector />
      <AddToCartButton />
    </div>
  </div>
);

export default ProductDetails;
