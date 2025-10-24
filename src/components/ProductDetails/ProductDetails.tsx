import PriceTag from "./PriceTag";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";
import "./ProductDetails.css";

// Local product object for demonstration
const demoProduct = {
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 250,
  discount: 50,
};

const ProductDetails = () => (
  <div className="details">
    <h4 className="company-name">Sneaker Company</h4>
    <h1 className="product-title">{demoProduct.name}</h1>
    <p className="product-description">{demoProduct.description}</p>

  <PriceTag />

    <div className="purchase-section">
      <QuantitySelector />
      <AddToCartButton />
    </div>
  </div>
);

export default ProductDetails;
