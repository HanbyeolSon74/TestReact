import React from "react";
import { Card, Button, InputNumber, Space, Typography, Rate } from "antd";

const { Title, Text } = Typography;

const RightSection = () => {
  return (
    <Card
      title="프랑온드 심플 구름 슬리퍼"
      bordered={false}
      style={{ width: 400 }}
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Rate defaultValue={4.5} disabled />
        <Text>1,065개 상품평</Text>
        <Title level={2} style={{ color: "red" }}>
          8,500원
        </Title>
        <InputNumber min={1} defaultValue={1} style={{ width: "100px" }} />
        <Space>
          <Button onClick={() => alert("기능 준비 중")}>장바구니 담기</Button>
          <Button
            onClick={() => alert("기능 준비 중")}
            className="bg-blue-500 text-white p-2"
          >
            바로구매
          </Button>
        </Space>
      </Space>
    </Card>
  );
};

export default RightSection;
