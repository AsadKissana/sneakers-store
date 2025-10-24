import "./ProductGallery.css";

import { useState } from "react";
import "./ProductGallery.css";


import img1 from "../../assets/images/image-product-1.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import img4 from "../../assets/images/image-product-4.jpg";

const demoImages = [img1, img2, img3, img4];

const ProductGallery = () => {
  const [selected, setSelected] = useState(demoImages[0]);

  return (
    <div className="gallery">
      <div className="main-image">
        <img src={selected} alt="Product" />
      </div>
      <div className="thumbnails">
        {demoImages.map((img: string) => (
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
