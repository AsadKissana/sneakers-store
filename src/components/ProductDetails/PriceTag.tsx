import "./PriceTag.css";

interface Props {
  price: number;
  discount: number;
}

const PriceTag = ({ price, discount }: Props) => {
  const final = price - (price * discount) / 100;
  return (
    <div className="price">
      <div className="current-price">
        <span>${final.toFixed(2)}</span>
        <span className="discount">{discount}%</span>
      </div>
      <p className="old-price">${price.toFixed(2)}</p>
    </div>
  );
};

export default PriceTag;
