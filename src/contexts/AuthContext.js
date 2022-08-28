import { createContext, useContext, useState } from "react";
import * as SecureStore from "expo-secure-store";
const AuthContext = createContext();
import axios from "axios";
const apiUrl = "http://192.168.1.47:3000";
import * as RootNavigation from "../navigation/RootNavigation";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [tdp, setTdp] = useState();
  const [bank, setBank] = useState();

  const login = async (username, password) => {
    axios
      .get(apiUrl + "/login", {
        params: {
          username: username,
          password: password,
        },
      })
      .then(async ({ data }) => {
        if (data.status) {
          await SecureStore.setItemAsync("token", data.token);
          setToken(data.token);
          setBank(data.user.bank);
          setTdp(data.user.tdp);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        alert(err.toString());
        console.log(err);
      });
  };

  const register = async (username, password) => {
    axios
      .get(apiUrl + "/register", {
        params: {
          username: username,
          password: password,
        },
      })
      .then(async ({ data }) => {
        if (data.status) {
          await SecureStore.setItemAsync("token", data.token);
          setToken(data.token);
          console.log(data);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        alert(err.toString());
        console.log(err);
      });
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("token");
    setToken(null);
  };

  const values = {
    token,
    login,
    logout,
    register,
    tdp,
    bank,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth, apiUrl };
