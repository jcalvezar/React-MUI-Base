import React, { useState } from "react";
import HeaderVisitor from "./HeaderVisitor";
import HeaderAdmin from "./HeaderAdmin";
import HeaderUser from "./HeaderUser";
import { useSelector } from "react-redux";

export default function Header() {
  const { loggedAs } = useSelector((state) => state.authReducer);

  console.log(loggedAs);

  return (
    <>
      {!loggedAs && <HeaderVisitor />}
      {loggedAs === "admin" && <HeaderAdmin />}
      {loggedAs === "user" && <HeaderUser />}
    </>
  );
}
