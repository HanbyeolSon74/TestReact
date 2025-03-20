// import React, { useState } from "react";
// import "./styles.css";

// const images = [
//   "/images/slide1.jpg",
//   "/images/slide2.jpg",
//   "/images/slide3.jpg",
//   "/images/slide4.jpg",
// ];

// const colors = [
//   { color: "black", img: "/images/black.jpg" },
//   { color: "white", img: "/images/white.jpg" },
//   { color: "green", img: "/images/green.jpg" },
//   { color: "yellow", img: "/images/yellow.jpg" },
//   { color: "pink", img: "/images/pink.jpg" },
// ];

// const LeftSection = () => {
//   const [mainImage, setMainImage] = useState(images[0]);

//   return (
//     <div className="left-section">
//       <img className="main-image" src={mainImage} alt="Main Product" />
//       <div className="thumbnails">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Thumbnail ${index}`}
//             onMouseOver={() => setMainImage(img)}
//           />
//         ))}
//       </div>
//       <div className="color-options">
//         {colors.map((item, index) => (
//           <img
//             key={index}
//             src={item.img}
//             alt={item.color}
//             onMouseOver={() => setMainImage(item.img)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default LeftSection;

import React, { useState } from "react";
import { Image, Carousel } from "antd";

const images = [
  require("./images/black.jpg"),
  require("./images/white.jpg"),
  require("./images/green.jpg"),
  require("./images/pink.jpg"),
  require("./images/yellow.jpg"),
];

const LeftSection = () => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div style={{ width: "300px" }}>
      <Image
        src={mainImage}
        alt="Main"
        width="100%"
        style={{ marginBottom: "10px" }}
      />
      <Carousel dots={false}>
        {images.map((image, index) => (
          <div key={index} onMouseEnter={() => setMainImage(image)}>
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={70}
              height={70}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default LeftSection;
