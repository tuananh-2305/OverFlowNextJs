import { InputBase } from "@mui/material";
import * as React from "react";

export interface IInputSearchProps {
  handleClick: any;
}

export default function InputSearch(props: IInputSearchProps) {
  const { handleClick } = props;
  return (
    <>
      <InputBase
        sx={{
          border: "1px solid #b1b3b4",
          borderRadius: "3px",
          position: "absolute",
          width: "100%",
          padding: "3px 0 3px 40px",
          fontSize: "13px",
          backgroundColor: { xs: "#fff", sm: "none", lg: "none" },
        }}
        placeholder="Search..."
        onFocus={handleClick}
      />
    </>
  );
}
