import { Menu } from "antd";
import { BulbOutlined } from "@ant-design/icons";

import "./Header.css";
import CONSTANTS from "../../utils/constants";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const items = [
    {
        label: 'Select Theme',
        key: 'selectTheme',
        icon: <BulbOutlined />,
        children: [
            {
                label: CONSTANTS.THEMES.LIGHT,
                value: CONSTANTS.THEMES.LIGHT,
                key: CONSTANTS.THEMES.LIGHT
            },
            {
                label: CONSTANTS.THEMES.DARK,
                value: CONSTANTS.THEMES.DARK,
                key: CONSTANTS.THEMES.DARK
            },
        ],
    }
];

const Header = ({ onThemeSwitch }) => {
    const { context } = useContext(AuthContext);

    return (
        <div className="header">
            <Menu items={items} defaultValue={context.theme} onClick={(theme) => onThemeSwitch(theme.key)} mode="horizontal" selectable={true}>
            </Menu>
        </div>
    );
}

export default Header;
