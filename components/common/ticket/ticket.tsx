import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";

export interface ITicketProps {
  tittleTicket: string;
  textTicket: string;
  bgBtnTicket: string;
  bgTicket: string;
  imgTicket: any;
}

export default function Ticket(props: ITicketProps) {
  const { tittleTicket, textTicket, bgBtnTicket, bgTicket, imgTicket } = props;
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        background: bgTicket,
        position: "relative",
        padding: "10% 10% 0",
        borderRadius: "5px",
        color: "#000",
      }}
    >
      <Stack>
        {bgBtnTicket == "#ff8000" ? (
          <svg
            aria-hidden="true"
            className="native svg-icon iconLogoMd"
            width="187"
            height="37"
            viewBox="0 0 187 37"
          >
            <path
              d="m42 23-2.2-.2c-1.7-.1-2.3-.8-2.3-2 0-1.4 1-2.2 3-2.2 1.3-.1 2.6.3 3.6 1.1l1.3-1.3c-1.4-1-3.1-1.5-4.8-1.4-2.9 0-4.9 1.5-4.9 3.9 0 2.2 1.4 3.4 4 3.6l2.2.2c1.6.1 2.2.8 2.2 2 0 1.6-1.4 2.4-3.6 2.4-1.6.1-3.1-.5-4.2-1.6L35 28.8c1.5 1.4 3.5 2 5.5 1.9 3.2 0 5.5-1.5 5.5-4.1 0-2.6-1.6-3.4-4-3.6Zm15.8-6.1c-2.2 0-3.5.4-4.7 1.9l1.3 1.3c.8-1.1 2.1-1.7 3.4-1.5 2.5 0 3.4 1 3.4 2.9v1.3h-4c-3 0-4.6 1.5-4.6 3.9 0 1 .3 2 1 2.7.8.9 1.9 1.2 3.8 1.2 1.4.1 2.9-.4 3.9-1.4v1.3h2v-9.1c-.1-2.9-1.9-4.5-5.5-4.5Zm3.4 8.9c.1.8-.1 1.7-.7 2.3a4 4 0 0 1-3 .9c-2.1 0-3.1-.7-3.1-2.3 0-1.6 1-2.4 3-2.4h3.8v1.5Zm9.7-7.1c1.2 0 2.4.5 3.1 1.5l1.3-1.3a5.4 5.4 0 0 0-4.4-2c-3.4 0-5.9 2.3-5.9 6.9 0 4.6 2.6 6.9 5.9 6.9 1.7.1 3.3-.7 4.4-2L74 27.4c-.7 1-1.9 1.5-3.1 1.5-1.2.1-2.4-.5-3.1-1.5-.7-1.1-1-2.3-.9-3.6-.1-1.3.2-2.5.9-3.6.7-1 1.9-1.6 3.1-1.5Zm16.8-1.6h-2.4L79.2 23V11.1h-2v19.4h2v-4.9l2.4-2.4 4.5 7.3h2.4l-5.6-8.6 4.8-4.8Zm9.2-.16c-1.6-.1-3.2.5-4.3 1.7-1.3 1.3-1.6 2.9-1.6 5.4 0 2.5.3 4.1 1.6 5.4 1.1 1.1 2.7 1.7 4.3 1.7 1.6.1 3.2-.5 4.3-1.7 1.3-1.3 1.6-2.9 1.6-5.4 0-2.5-.3-4.1-1.6-5.4a5.38 5.38 0 0 0-4.3-1.7Zm1.7 10.5c-.9.8-2.3.8-3.2 0-.7-.7-.8-2-.8-3.4s.1-2.7.8-3.4c.9-.8 2.3-.8 3.2 0 .7.7.8 1.9.8 3.4s-.1 2.7-.8 3.4Zm13.6-10.4-2.8 8.6-2.8-8.6h-3.7l5.2 14h2.7l5.1-14h-3.7Zm9.6-.1c-3.6 0-6.1 2.6-6.1 7.1 0 5.7 3.2 7.2 6.5 7.2 2 .1 4-.7 5.3-2.2l-2.1-2.1c-.8.9-2 1.4-3.2 1.3-1.6.1-3-1.1-3.1-2.7v-.4h8.7v-1.6c.1-3.8-2.1-6.6-6-6.6Zm-2.7 5.8c0-.5.1-1 .3-1.5.4-.9 1.3-1.4 2.3-1.4 1-.1 1.9.5 2.3 1.4.2.5.3 1 .3 1.5h-5.2Zm13.33-4.3v-1.3h-3.4v14h3.5v-8.4c-.1-1.3.8-2.4 2.1-2.6h.2c.7 0 1.4.3 1.8.8l2.6-2.6a4.1 4.1 0 0 0-3.3-1.3c-1.3-.1-2.6.4-3.5 1.4Zm7.6-2.8v15.4h3.5v-11h2.6v-2.7h-2.6v-1.5c-.1-.6.3-1.2.9-1.3h1.6v-3h-2a3.9 3.9 0 0 0-4 3.8v.3Zm20.27 1.3c-1.6-.1-3.2.5-4.3 1.7-1.3 1.3-1.6 2.9-1.6 5.4 0 2.5.3 4.1 1.6 5.4 1.1 1.1 2.7 1.7 4.3 1.7 1.6.1 3.2-.5 4.3-1.7 1.3-1.3 1.6-2.9 1.6-5.4 0-2.5-.3-4.1-1.6-5.4a5.38 5.38 0 0 0-4.3-1.7Zm1.7 10.5c-.9.8-2.3.8-3.2 0-.7-.7-.8-2-.8-3.4s.1-2.7.8-3.4c.9-.8 2.3-.8 3.2 0 .7.7.8 1.9.8 3.4s-.1 2.7-.8 3.4Zm20.7-10.4-2.3 8.6-2.9-8.6H175l-2.8 8.7-2.3-8.6h-3.7l4.3 14h2.9l2.9-8.8 2.9 8.8h3l4.3-14-3.8-.1Zm-31.22 9.8v-15.2h-3.5v15.4a3.8 3.8 0 0 0 3.6 4h2.5v-3h-1.3c-.6.1-1.1-.2-1.3-.8v-.4ZM52.7 17.4H49V13h-2v13.9c0 2 1.1 3.6 3.4 3.6h1.4v-1.7h-1c-1.3 0-1.8-.7-1.8-2v-7.7h1.9l1.8-1.7Z"
              fill="var(--black-800)"
            ></path>
            <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
            <path
              d="m23.1 25.99.68-2.95-16.1-3.35L7 23l16.1 2.99ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm4.2-7.4L26 18.4l2.1-2.5L15.4 5.3l-2.1 2.5ZM21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0ZM7 30h16v-3H7v3Z"
              fill="#F48024"
            ></path>
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            className="native svg-icon iconLogoTeamsAltMd"
            width="185"
            height="37"
            viewBox="0 0 185 37"
          >
            <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
            <path
              d="m23.1 25.99.68-2.95-16.1-3.35L7 23l16.1 2.99ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm4.2-7.4L26 18.4l2.1-2.5L15.4 5.3l-2.1 2.5ZM21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0ZM7 30h16v-3H7v3Z"
              fill="#F48024"
            ></path>
            <path
              d="M75.51 13.2h-10c-.3 0-.5.2-.5.5v15.67c0 .3.2.5.5.5h2.4c.3 0 .5-.2.5-.5v-6.11h6c.3 0 .5-.2.5-.5V20.6c0-.3-.2-.5-.5-.5h-6v-3.75h7.15c.3 0 .5-.2.5-.5v-2.16c-.05-.25-.3-.5-.55-.5Zm14.09 3.5a5.02 5.02 0 0 0-1.15-1.8 6.18 6.18 0 0 0-4.5-1.8 6.07 6.07 0 0 0-5.4 3.1c-.2.45-.4.95-.5 1.45-.1.5-.15 1.05-.2 1.6-.05.55-.05 1.35-.05 2.3 0 1.26.05 2.2.1 2.9.05.71.2 1.36.45 2.01.25.65.65 1.2 1.15 1.8 1.2 1.2 2.7 1.8 4.45 1.8a5.8 5.8 0 0 0 5.65-3.66c.25-.59.35-1.29.4-2 .05-.64.05-1.64.05-2.9 0-1.25 0-2.2-.05-2.9a5 5 0 0 0-.4-1.9Zm-8.25 1.65c.1-.55.3-1 .6-1.35.2-.25.5-.45.85-.6.35-.15.75-.2 1.1-.2.4 0 .75.1 1.1.2.35.15.65.35.85.6.3.35.5.75.6 1.3.1.6.15 1.7.15 3.2 0 1 0 1.8-.05 2.4a4 4 0 0 1-.25 1.31c-.1.3-.25.55-.5.8-.5.55-1.15.8-1.95.8a2.69 2.69 0 0 1-1.95-.75c-.2-.2-.35-.4-.4-.6-.05-.1-.15-.35-.2-.75l-.15-1.25c0-.5-.05-1.15-.05-1.96.1-1.45.15-2.55.25-3.15Zm20.72 4.41a4.6 4.6 0 0 0 2.9-4.46 4.71 4.71 0 0 0-2.55-4.4 5.64 5.64 0 0 0-2.8-.66h-6.1c-.3 0-.5.2-.5.5v15.68c0 .3.2.5.5.5h2.4c.3 0 .5-.2.5-.5V23.3h2.15l3.15 6.3c.1.16.25.3.45.3h2.75a.6.6 0 0 0 .45-.24c.1-.15.1-.35 0-.5l-3.3-6.41Zm-5.65-6.41h3c.7 0 1.2.15 1.6.55.4.35.55.8.55 1.45 0 .6-.2 1.05-.55 1.4-.4.35-.9.55-1.6.55h-3v-3.95Zm27.62-3.15h-11c-.3 0-.5.2-.5.5v2.15c0 .3.2.5.5.5h3.8v13.02c0 .3.2.5.5.5h2.35c.3 0 .5-.2.5-.5V16.35h3.8c.3 0 .5-.2.5-.5v-2.16c.05-.25-.2-.5-.45-.5Zm13.48 0h-10c-.3 0-.5.2-.5.5v15.67c0 .3.2.5.5.5h10c.3 0 .5-.2.5-.5V27.2c0-.3-.2-.5-.5-.5h-7.15V23h6c.3 0 .5-.2.5-.5v-2.1c0-.3-.2-.5-.5-.5h-6v-3.56h7.15c.3 0 .5-.2.5-.5v-2.16c0-.25-.25-.5-.5-.5Zm10.42.34a.48.48 0 0 0-.45-.35h-1.9c-.2 0-.4.15-.45.35l-5.75 15.68c-.05.15-.05.3.05.45.1.15.25.2.4.2h2.55c.2 0 .4-.15.45-.35l.95-2.8h5.45l.95 2.8c.05.2.25.35.45.35h2.55c.15 0 .3-.1.4-.2.1-.15.1-.3.05-.45l-5.7-15.68Zm.3 10.17h-3.4l1.75-4.9 1.65 4.9Zm21.75-10.51h-2.4c-.2 0-.35.1-.45.3l-4 8.76-4.1-8.77c-.1-.2-.25-.3-.45-.3h-2.4c-.3 0-.5.2-.5.5v15.68c0 .3.2.5.5.5h2.4c.3 0 .5-.2.5-.5V21.1l2.75 5.66c.1.15.25.3.45.3h1.75c.2 0 .35-.1.45-.3l2.65-5.6v8.26c0 .3.2.5.5.5h2.4c.3 0 .5-.2.5-.5V13.74c-.05-.3-.25-.55-.55-.55Zm13.45 8.15a3.8 3.8 0 0 0-1.3-.8 7.7 7.7 0 0 0-1.85-.45l-1.8-.25c-.3-.05-.6-.1-.9-.25a2.1 2.1 0 0 1-.6-.35c-.3-.25-.4-.6-.4-1.1 0-.4.1-.7.25-1 .2-.3.45-.5.75-.65.35-.15.8-.25 1.3-.25.45 0 .85.05 1.2.1s.7.2 1 .35c.3.15.6.35.9.65.2.2.5.2.7 0l1.55-1.5c.1-.1.15-.25.15-.35a.45.45 0 0 0-.15-.35 7.11 7.11 0 0 0-2.3-1.46 8.4 8.4 0 0 0-2.9-.45c-1.15 0-2.15.2-3 .6a4.67 4.67 0 0 0-2 1.8c-.45.76-.7 1.66-.7 2.66 0 1.4.45 2.55 1.3 3.36.8.75 1.85 1.2 3.25 1.4l1.85.25c.4.05.75.15.95.2.2.05.35.15.5.35.3.25.45.7.45 1.25 0 .6-.2 1.05-.65 1.35-.5.35-1.2.55-2.1.55-.5 0-1-.05-1.4-.15-.4-.1-.8-.25-1.2-.45-.35-.2-.7-.45-1.05-.8a.45.45 0 0 0-.35-.15.45.45 0 0 0-.35.15l-1.6 1.55c-.1.1-.15.2-.15.35 0 .15.05.25.15.35a7.1 7.1 0 0 0 2.6 1.7c.95.36 2.05.5 3.3.5.85 0 1.7-.1 2.4-.34a5.16 5.16 0 0 0 3.25-2.66c.3-.65.45-1.35.45-2.1-.05-1.6-.55-2.8-1.5-3.6Z"
              fill="var(--black-800)"
            ></path>
            <path fill="#D6D9DC" d="M47 13h1v17h-1z"></path>
          </svg>
        )}
      </Stack>
      <Stack sx={{ display: { xs: "none", sm: "none", lg: "flex" } }}>
        <Image src={imgTicket} width="500" height="400" alt="imageticket" />
      </Stack>
      <Stack sx={{ display: { xs: "flex", sm: "flex", lg: "none" } }}>
        <Image src={imgTicket} width="350" height="300" alt="imageticket" />
      </Stack>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: "24px",
          marginBottom: "15px",
        }}
      >
        {tittleTicket}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "18px",
          color: "#4b4d4e",
        }}
      >
        {textTicket}
      </Typography>
      {bgBtnTicket == "#ff8000" ? (
        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
          <Stack
            sx={{
              width: "200px",
              background: bgBtnTicket,
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 0",
              borderRadius: "5px",
              marginBottom: "13px",
              color: "#fff",
              cursor: "pointer",
              marginTop: { sm: "50px", lg: "0" },
            }}
          >
            Join the community
          </Stack>
          <Typography
            sx={{
              color: "#000",
              fontSize: "12px",
              fontWeight: "300",
              marginBottom: "40px",
            }}
          >
            or <a style={{ textDecoration: "underline" }}>search content</a>
          </Typography>
        </Stack>
      ) : (
        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Stack
              sx={{ width: "70px", height: "1px", background: bgBtnTicket }}
            ></Stack>
            <Typography sx={{ fontSize: "13px", margin: "0 15px" }}>
              Get started
            </Typography>
            <Stack
              sx={{ width: "70px", height: "1px", background: bgBtnTicket }}
            ></Stack>
          </Stack>
          <Stack sx={{ flexDirection: "row", marginBottom: "30px" }}>
            <Stack
              sx={{
                background: bgBtnTicket,
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                borderRadius: "5px",
                marginBottom: "10px",
                flexDirection: "row",
                marginRight: "5px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              For large orgnizations <ApartmentIcon />
            </Stack>
            <Stack
              sx={{
                background: bgBtnTicket,
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                borderRadius: "5px",
                marginBottom: "10px",
                flexDirection: "row",
                marginLeft: "5px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              For small teams{" "}
              <GroupIcon style={{ marginLeft: "2px", flexDirection: "row" }} />
            </Stack>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}
