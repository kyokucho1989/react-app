import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children, isLogin, setIsLogin }) => {
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.array,
  isLogin: PropTypes.function,
  setIsLogin: PropTypes.function,
};
