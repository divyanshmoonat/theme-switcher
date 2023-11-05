import UserService from "../../services/user/User.js";

const updateThemePreference = async (req, res) => {
    const userService = new UserService();

    const findObject = {
        // _id: req.user._id,
        _id: "65479a6e2c3e71219d1a86d7",
    };

    const updateObject = {
        themePreference: req.body.themePreference
    };

    await userService.updateUser(findObject, updateObject);
    res.json({ success: true, message: "User preference updated successfully" });
};

export default updateThemePreference;