import { Stack, Typography } from "@mui/material";
import * as React from "react";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <Stack
      sx={{
        background: "#4b4d4e",
        padding: "3% 5%",
        flexDirection: { xs: "column", sm: "column", lg: "row" },
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row", lg: "row" },
          width: { lg: "65%" },
        }}
      >
        <Stack
          sx={{
            display: { xs: "none", sm: "flex", lg: "flex" },
            width: { xs: "100%", sm: "10%" },
          }}
        >
          <svg
            aria-hidden="true"
            className="native svg-icon iconLogoGlyphMd"
            width="32"
            height="37"
            viewBox="0 0 32 37"
          >
            <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
            <path
              d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
              fill="#F48024"
            ></path>
          </svg>
        </Stack>
        <Stack
          sx={{
            marginBottom: { xs: "20px", sm: "0", lg: "0" },
            width: { xs: "100%", sm: "20%" },
          }}
        >
          <Typography
            sx={{
              fontWeight: "550",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            STACK OVERFLOW
          </Typography>
          <Stack
            sx={{ flexDirection: { xs: "row", sm: "column", lg: "column" } }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "#cbcccd",
                margin: {
                  xs: "0 10px 0 0",
                  sm: '0 0 "5px" 0',
                  lg: "0 0 5px 0",
                },
              }}
            >
              Questions
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#cbcccd" }}>
              Help
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            marginBottom: { xs: "20px", sm: "0", lg: "0" },
            width: { xs: "100%", sm: "20%" },
          }}
        >
          <Typography
            sx={{ fontWeight: "550", fontSize: "14px", marginBottom: "10px" }}
          >
            PRODUCTS
          </Typography>
          <Stack
            sx={{
              flexDirection: { xs: "row", sm: "column", lg: "column" },
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Teams
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Advertising
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Collectives
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#cbcccd" }}>
              Talent
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            marginBottom: { xs: "20px", sm: "0", lg: "0" },
            width: { xs: "100%", sm: "20%" },
          }}
        >
          <Typography
            sx={{ fontWeight: "550", fontSize: "14px", marginBottom: "10px" }}
          >
            COMPANY
          </Typography>
          <Stack
            sx={{
              flexDirection: { xs: "row", sm: "column", lg: "column" },
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              About
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Press
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Work Here
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Legal
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Privacy Policy{" "}
            </Typography>
          </Stack>
          <Stack
            sx={{
              flexDirection: { xs: "row", sm: "column", lg: "column" },
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Terms of Service{" "}
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Cookie Settings
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#cbcccd" }}>
              Cookie Policy
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            marginBottom: { xs: "20px", sm: "0", lg: "0" },
            width: { xs: "100%", sm: "30%" },
          }}
        >
          <Typography
            sx={{ fontWeight: "550", fontSize: "14px", marginBottom: "10px" }}
          >
            STACK EXCHANGE NETWORK
          </Typography>
          <Stack
            sx={{
              flexDirection: { xs: "row", sm: "column", lg: "column" },
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Technology
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Culture & recreation
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Life & arts
            </Typography>
          </Stack>
          <Stack
            sx={{
              flexDirection: { xs: "row", sm: "column", lg: "column" },
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Science
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Professional
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              Business
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#cbcccd", marginBottom: "5px" }}
            >
              API
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#cbcccd" }}>
              Data
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: { xs: "100%", sm: "100%", lg: "35%" },
          marginTop: { xs: "40px", sm: "40px", lg: "0" },
          paddingLeft: { xs: "0", sm: "0", lg: "50px" },
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            marginBottom: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: "#cbcccd",
              marginRight: { xs: "10px", sm: "10px", lg: "10px" },
            }}
          >
            Blog
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#cbcccd",
              marginRight: { xs: "10px", sm: "10px", lg: "10px" },
            }}
          >
            Facebook
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#cbcccd",
              marginRight: { xs: "10px", sm: "10px", lg: "10px" },
            }}
          >
            Twitter
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#cbcccd",
              marginRight: { xs: "10px", sm: "10px", lg: "10px" },
            }}
          >
            LinkedIn
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#cbcccd",
              marginRight: { xs: "10px", sm: "10px", lg: "10px" },
            }}
          >
            Instagram
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#cbcccd",
            marginRight: "18px",
            marginTop: { xs: "0", sm: "0", lg: "40%" },
          }}
        >
          Site design / logo © 2022 Stack Exchange Inc; user contributions
          licensed under CC BY-SA. rev 2022.12.6.43081
        </Typography>
      </Stack>
    </Stack>
  );
}
