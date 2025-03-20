import React from "react";
import { Image, Space } from "antd";
import "./Left.css";

const images = [
  { color: "black", img: require("./images/black.jpg") },
  { color: "white", img: require("./images/white.jpg") },
  { color: "green", img: require("./images/green.jpg") },
  { color: "yellow", img: require("./images/yellow.jpg") },
  { color: "pink", img: require("./images/pink.jpg") },
];

const LeftSection = ({ mainImage, setMainImage }) => {
  return (
    <div className="left-section" style={{ width: "300px" }}>
      <Image
        src={mainImage}
        alt="Main"
        width="100%"
        style={{ marginBottom: "10px" }}
      />

      <Space size="small" wrap>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.img}
            alt={image.color}
            width={70}
            height={70}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setMainImage(image.img)}
          />
        ))}
      </Space>
    </div>
  );
};

export default LeftSection;
