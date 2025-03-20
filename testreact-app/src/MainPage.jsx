import React from "react";
import { Layout } from "antd";
import LeftSection from "./Left";
import RightSection from "./Right";
import BottomSection from "./Bottom";

const { Content } = Layout;

const MainPage = () => {
  return (
    <Layout style={{ padding: "20px" }}>
      <Content style={{ display: "flex", gap: "20px" }}>
        <LeftSection />
        <RightSection />
      </Content>
      <BottomSection />
    </Layout>
  );
};

export default MainPage;
