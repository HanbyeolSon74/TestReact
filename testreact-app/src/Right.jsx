import React from "react";
import { Button, InputNumber, Space, Typography, Rate, Select } from "antd";
import "./Right.css";
import logoRocket from "./images/rocketlogo.png";
import bankbookIcon from "./images/bankbook.png";
import cardIcon from "./images/card.png";
import moneyIcon from "./images/m.png";
import blackColor from "./images/black.jpg";
import whiteColor from "./images/white.jpg";
import greenColor from "./images/green.jpg";
import yellowColor from "./images/yellow.jpg";
import pinkColor from "./images/pink.jpg";

const { Text } = Typography;

const RightSection = ({ setMainImage }) => {
  return (
    <div className="right-section">
      <Text strong style={{ fontSize: "18px" }}>
        프랑온드 폭신 구름 쿠션 슬리퍼
      </Text>

      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Space>
          {/* 별점이 4.5개인데 4개로 만 나와  */}
          <Rate defaultValue={4.5} disabled />
          <Text style={{ color: "#888" }}>8,913개 상품평</Text>
        </Space>

        <Text style={{ fontSize: "16px", color: "red", fontWeight: "bold" }}>
          3% <del style={{ color: "#888" }}>6,300원</del>
        </Text>

        <Space>
          <Text style={{ fontSize: "24px", fontWeight: "bold", color: "red" }}>
            6,070원
          </Text>
          <img src={logoRocket} alt="로켓배송" className="rocket-icon" />
        </Space>

        <Text>
          <span
            style={{ color: "green", fontSize: "16px", fontWeight: "bold" }}
          >
            내일(금) 3/21 도착 보장
          </span>
          <span> (9시간 19분 내 주문 시 / 서울⋅경기 기준)</span>
        </Text>

        <Space>
          <InputNumber min={1} defaultValue={1} style={{ width: "100px" }} />
          <Button type="default" onClick={() => alert("기능 준비 중")}>
            장바구니 담기
          </Button>
          <Button type="primary" onClick={() => alert("기능 준비 중")}>
            바로구매
          </Button>
        </Space>

        <Space>
          <img src={moneyIcon} alt="쿠페이머니" className="pay-icon" />
          <img src={cardIcon} alt="카드 결제" className="pay-icon" />
          <img src={bankbookIcon} alt="계좌이체" className="pay-icon" />
          <Text>PC에서도 간편한 결제 쿠페이머니 카드 계좌이체</Text>
        </Space>

        <Text>판매자: 잇다(itta)</Text>

        <Text>신발사이즈(mm)</Text>
        <Select style={{ width: "150px" }}>
          {Array.from({ length: 5 }, (_, i) => 230 + i * 10).map((size) => (
            <Select.Option key={size} value={`${size}~${size + 5}`}>
              {size}~{size + 5}
            </Select.Option>
          ))}
        </Select>

        {/* 색상 이미지 (호버 시 메인이미지 변경) */}
        <Text>색상 :</Text>
        <Space>
          <img
            src={blackColor}
            alt="black"
            className="color-option"
            onMouseEnter={() => setMainImage(blackColor)}
          />
          <img
            src={whiteColor}
            alt="white"
            className="color-option"
            onMouseEnter={() => setMainImage(whiteColor)}
          />
          <img
            src={greenColor}
            alt="green"
            className="color-option"
            onMouseEnter={() => setMainImage(greenColor)}
          />
          <img
            src={yellowColor}
            alt="yellow"
            className="color-option"
            onMouseEnter={() => setMainImage(yellowColor)}
          />
          <img
            src={pinkColor}
            alt="pink"
            className="color-option"
            onMouseEnter={() => setMainImage(pinkColor)}
          />
        </Space>
      </Space>
    </div>
  );
};

export default RightSection;
