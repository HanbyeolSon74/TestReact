import React from "react";
import { Carousel, Card, Image } from "antd";

const productImages = [
  require("./images/white.jpg"),
  require("./images/black.jpg"),
  require("./images/yellow.jpg"),
  require("./images/pink.jpg"),
];

const BottomSection = () => {
  return (
    <Carousel autoplay>
      {productImages.map((image, index) => (
        <Card key={index} style={{ margin: "10px", textAlign: "center" }}>
          <Image src={image} alt={`Product ${index + 1}`} width={200} />
          <p>상품 {index + 1}</p>
        </Card>
      ))}
    </Carousel>
  );
};

export default BottomSection;
