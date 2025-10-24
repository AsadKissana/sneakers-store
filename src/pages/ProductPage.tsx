import ProductGallery from "../components/ProductGallery/ProductGallery";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import type { Product } from "../types/product";
import "./ProductPage.css";

const product: Product = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 250,
  discount: 50,
  images: [
    "/assets/images/product1.jpg",
    "/assets/images/product2.jpg",
    "/assets/images/product3.jpg",
    "/assets/images/product4.jpg",
  ],
};

const ProductPage = () => (
  <div className="product-page">
    <ProductGallery images={product.images} />
    <ProductDetails product={product} />
  </div>
);

export default ProductPage;
