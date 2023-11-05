import { createContext, useState } from "react";

import CONSTANTS from "../utils/constants";

const initContext = {
  isAuthenticated: false,
  theme: CONSTANTS.THEMES.DARK,
};

export const AuthContext = createContext(initContext);

const AuthContextContainer = ({ children }) => {
  const [context, setContext] = useState(initContext);

  return (
    <AuthContext.Provider value={{ context, setContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextContainer;
