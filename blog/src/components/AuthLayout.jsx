import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Protected({ children, authentication = true }) {
  const authstatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  //TODO: make it more easy to understand

  // if (authStatus ===true){
  //     navigate("/")
  // } else if (authStatus === false) {
  //     navigate("/login")
  // }

  //let authValue = authStatus === true ? true : false

  useEffect(() => {
    if (authentication && authstatus !== authentication) {
      navigate("/");
    } else if (!authentication && authstatus !== authentication) {
      navigate("/login");
    }
    setLoader(false);
  }, [authstatus, authentication, navigate]);

  return loader ? <h1>loading</h1> : <>{children} </>;
}
