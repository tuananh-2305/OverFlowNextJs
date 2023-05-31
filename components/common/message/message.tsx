import { Stack, Typography } from "@mui/material";
import * as React from "react";

export interface IMessageProps {
  messageText: string;
  messsageBtn: string;
  messsageIcon: any;
  messageBtnColor: string;
  mg: string;
  bgMessage: string;
}

export default function Message(props: IMessageProps) {
  const {
    messageText,
    messsageBtn,
    messsageIcon,
    messageBtnColor,
    mg,
    bgMessage,
  } = props;
  return (
    <Stack
      sx={{
        background: bgMessage,
        padding: { xs: "10% 15%", sm: "10% 15%", lg: "6% 15%" },
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
      }}
    >
      <Stack sx={{ color: messageBtnColor, marginBottom: "15px" }}>
        {messsageIcon}
      </Stack>
      <Typography
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#000",
          fontWeight: "300",
        }}
      >
        {messageText}
      </Typography>
      <Stack
        sx={{
          width: "200px",
          background: messageBtnColor,
          justifyContent: "center",
          alignItems: "center",
          padding: "12px 0",
          borderRadius: "5px",
          marginBottom: mg,
          cursor: "pointer",
        }}
      >
        {messsageBtn}
      </Stack>
      {messsageBtn == "Join the community" ? (
        <Typography sx={{ color: "#000", fontSize: "12px", fontWeight: "300" }}>
          or <a style={{ textDecoration: "underline" }}>search content</a>
        </Typography>
      ) : (
        ""
      )}
    </Stack>
  );
}
