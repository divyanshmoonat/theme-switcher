import { ConfigProvider, Layout, theme } from "antd";

import CONSTANTS from "../../utils/constants";

import "./ThemeConfig.css";

const { Content } = Layout;

const { defaultAlgorithm, darkAlgorithm } = theme;
const ThemeConfig = ({ children, siteTheme }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm:
          siteTheme === CONSTANTS.THEMES.DARK
            ? darkAlgorithm
            : defaultAlgorithm,
      }}
    >
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </ConfigProvider>
  );
};

export default ThemeConfig;
