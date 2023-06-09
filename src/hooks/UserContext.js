import PropTypes from "prop-types";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const putUserData = async (userInfo) => {
    setUserData(userInfo);

    await localStorage.setItem(
      "codeBurguer:userData",
      JSON.stringify(userInfo)
    );
  };

  const logout = async () => {
    await localStorage.removeItem("codeBurguer:userData");
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem("codeBurguer:userData");

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };

    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ putUserData, userData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used UserContext");
  }

  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
