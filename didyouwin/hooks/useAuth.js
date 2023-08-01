import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";

const useAuth = () => {
  const {
    loggedIn,
    login,
    logout,
    getChainId,
    getAccounts,
    getBalance,
    sendTransaction,
    signMessage,
    getPrivateKey,
    getUserInfo,
    showWCM,
    initiateTopUp,
    addChain,
    switchChain,
    authenticateUser,
  } = useContext(AuthContext);

  console.log(loggedIn, login);
  return {
    loggedIn,
    login,
    logout,
    getChainId,
    getAccounts,
    getBalance,
    sendTransaction,
    signMessage,
    getPrivateKey,
    getUserInfo,
    showWCM,
    initiateTopUp,
    addChain,
    switchChain,
    authenticateUser,
  };
};

export default useAuth;
