import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuth = () => {
  const { localSignIn } = useContext(AuthContext);

  useEffect(localSignIn, []);

  return null;
};

export default ResolveAuth;
