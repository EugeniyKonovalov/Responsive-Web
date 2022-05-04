import React from "react";
import { gallery } from "../../content";

const Gallery = () => {
  return (
    <div>
      <div className="gallery">
        {gallery.map((item, index) => (
          <figure className="gallery-item" key={index}>
            <img
              src={item}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
