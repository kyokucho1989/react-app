import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "./AuthContext.js";

export default function Header() {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  function setAuth() {
    setIsLogin(!isLogin);
  }
  return (
    <>
      <button onClick={setAuth}>{isLogin ? "ログアウト" : "ログイン"}</button>
    </>
  );
}

Header.propTypes = {
  setIsLogin: PropTypes.func,
};
