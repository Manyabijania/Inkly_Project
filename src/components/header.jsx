import React from "react";
import DrawIcon from "@mui/icons-material/Draw";

function Header() {
  return (
    <header>
      <h1 className="header">
        <DrawIcon style={{ fontSize: "35px" }} />
        Inkling
      </h1>
    </header>
  );
}
export default Header;
