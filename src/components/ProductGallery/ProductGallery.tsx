import { useState } from "react";
import "./ProductGallery.css";

interface Props {
  images: string[];
}

const ProductGallery = ({ images }: Props) => {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="gallery">
      <div className="main-image">
        <img src={selected} alt="Product" />
      </div>
      <div className="thumbnails">
        {images.map((img) => (
          <img
            key={img}
            src={img}
            onClick={() => setSelected(img)}
            className={selected === img ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
