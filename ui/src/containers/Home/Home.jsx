import { useContext } from "react";
import { Layout, Typography } from "antd";
import axios from "axios";

import Header from "../../components/Header/Header";
import { AuthContext } from "../../context/authContext";
import CONSTANTS from "../../utils/constants";

const Home = () => {
  const { context, setContext } = useContext(AuthContext);

  const onThemeChange = async (theme) => {
    setContext({ ...context, theme });
    try {
      await axios.post(
        `${CONSTANTS.API_BASE_URL}user/update-theme-preference`,
        { themePreference: theme },
        { withCredentials: true }
      );
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div className="app-home t-align-center">
      <Header onThemeSwitch={onThemeChange} />
      <Layout.Content>
        <Typography.Title>Home Page</Typography.Title>
        <Typography.Text>
          This is a sample page demonstrating theme switching, please change the
          theme from top left corner
        </Typography.Text>
      </Layout.Content>
    </div>
  );
};

export default Home;
