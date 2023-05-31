/* eslint-disable react/no-unescaped-entities */
import { InputBase, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "@/images/logo.png";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import ErrorIcon from "@mui/icons-material/Error";
import StarsIcon from "@mui/icons-material/Stars";
import ClearIcon from "@mui/icons-material/Clear";
import Free from "@/images/free.svg";
import InputSearch from "../common/search/inputS";
import SearchItem from "../common/search/search";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleSearch = () => {
    setShowSearch(false);
  };
  const handleSearchMobile = () => {
    setShowSearchMobile(!showSearchMobile);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleSearch);
    return () => {
      document.removeEventListener("mousedown", handleSearch);
    };
  }, []);
  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        borderTop: "3px solid #ff8000",
        background: "#fff",
        color: "#000",
        boxShadow: "0px 1px 4px -1px #97999b",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          padding: "15px",
          "&:hover": { background: "#e5e6e6", cursor: "pointer" },
        }}
        onClick={handleMenu}
      >
        {showMenu ? <ClearIcon /> : <MenuIcon />}
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          padding: { sm: "10px 0", lg: "12px 10px" },
          "&:hover": { background: "#e5e6e6", cursor: "pointer" },
        }}
      >
        <Image
          src={Logo}
          alt="logo"
          style={{ width: "30px", height: "30px" }}
        />
        <Typography
          sx={{
            fontSize: "20px",
            display: { xs: "none", sm: "flex", lg: "flex" },
          }}
        >
          stack<a style={{ fontWeight: "550" }}>overflow</a>
        </Typography>
      </Stack>
      <Stack sx={{ flexDirection: "row", fontSize: "14px", color: "#707375" }}>
        <Stack
          sx={{
            padding: { sm: "10px", lg: "10px 20px" },
            "&:hover": {
              background: "#e5e6e6",
              cursor: "pointer",
              borderRadius: "20px",
            },
            display: { xs: "none", sm: "flex", lg: "flex" },
          }}
        >
          About
        </Stack>
        <Stack
          sx={{
            padding: { sm: "10px", lg: "10px 20px" },
            "&:hover": {
              background: "#e5e6e6",
              cursor: "pointer",
              borderRadius: "20px",
            },
          }}
        >
          Products
        </Stack>
        <Stack
          sx={{
            padding: { sm: "10px", lg: "10px 20px" },
            "&:hover": {
              background: "#e5e6e6",
              cursor: "pointer",
              borderRadius: "20px",
            },
            display: { xs: "none", sm: "flex", lg: "flex" },
          }}
        >
          For Teams
        </Stack>
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          position: "relative",
          width: { xs: "360px", sm: "25%", lg: "45%" },
          alignItems: "center",
          marginLeft: { xs: "-177px", sm: "0", lg: "10px" },
          display: { xs: "none", sm: "flex", lg: "flex" },
        }}
      >
        <SearchIcon
          sx={{ position: "absolute", marginLeft: "10px", zIndex: "2" }}
        />
        <InputSearch handleClick={() => setShowSearch(true)} />
        {showSearch && <SearchItem />}
      </Stack>
      <Stack
        sx={{
          display: { xs: "flex", sm: "none", lg: "none" },
          position: "relative",
          width: "20%",
          paddingLeft: "50px",
        }}
      >
        <SearchIcon onClick={handleSearchMobile} />
        {showSearchMobile && (
          <Stack
            sx={{
              flexDirection: "row",
              position: "absolute",
              width: "360px",
              alignItems: "center",
              marginLeft: "-177px",
              top: "58px",
            }}
          >
            <SearchIcon
              sx={{ position: "absolute", marginLeft: "10px", zIndex: "2" }}
            />
            <InputSearch handleClick={() => setShowSearch(true)} />
            {showSearchMobile && <SearchItem />}
          </Stack>
        )}
      </Stack>
      <Stack sx={{ flexDirection: "row", marginLeft: "10px" }}>
        <Stack
          sx={{
            border: "1px solid #3399ff",
            background: "#e6faff",
            color: "#3399ff",
            borderRadius: "5px",
            padding: "6px 10px",
            marginRight: "5px",
            cursor: "pointer",
          }}
        >
          Log in
        </Stack>
        <Stack
          sx={{
            background: "#3399ff",
            color: "#fff",
            borderRadius: "5px",
            padding: "6px 10px",
            cursor: "pointer",
          }}
        >
          Sign up
        </Stack>
      </Stack>
      {showMenu && (
        <Stack
          sx={{
            position: "absolute",
            background: "#fff",
            boxShadow: "1px 1px 4px -1px #97999b",
            width: { xs: "28vh", sm: "25vh", lg: "32vh" },
            zIndex: "10",
            top: "55px",
            padding: "20px 0 30px",
          }}
        >
          <Stack
            sx={{
              padding: "10px",
              background: "#e5e6e6",
              borderRight: "3px solid #ff8000",
              fontSize: "14px",
              fontWeight: "550",
              marginBottom: "10px",
            }}
          >
            Home
          </Stack>
          <Stack
            sx={{
              fontSize: "12px",
              color: "#939597",
              padding: "10px",
              marginBottom: "5px",
            }}
          >
            PUBLIC
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              paddingLeft: "10px",
              fontSize: "14px",
              alignItems: "center",
              color: "#646668",
              marginBottom: "5px",
            }}
          >
            <PublicIcon />
            <Stack sx={{ marginLeft: "5px" }}>Questions</Stack>
          </Stack>
          <Stack
            sx={{ color: "#646668", paddingLeft: "40px", fontSize: "14px" }}
          >
            <Stack sx={{ padding: "10px 0" }}>Tags</Stack>
            <Stack sx={{ padding: "10px 0" }}>User</Stack>
            <Stack sx={{ padding: "10px 0" }}>Companies</Stack>
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              color: "#646668",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px 10px",
            }}
          >
            <Stack sx={{ fontSize: "12px", color: "#939597" }}>
              COLLECTIVES
            </Stack>
            <ErrorIcon fontSize="small" />
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              padding: "5px 10px",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <StarsIcon sx={{ color: "#ff8000" }} />
            <Stack
              sx={{ marginLeft: "8px", fontSize: "14px", color: "#646668" }}
            >
              Explore Collectives
            </Stack>
          </Stack>
          <Stack
            sx={{
              fontSize: "12px",
              color: "#939597",
              padding: "10px",
              marginBottom: "15px",
            }}
          >
            TEAMS
          </Stack>
          <Stack
            sx={{
              padding: { xs: "0 25px", sm: "0 40px", lg: "0 40px" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>
              <a style={{ fontWeight: "550" }}>Stack Overflow for Teams</a> –
              Start collaborating and sharing organizational knowledge.
            </Typography>
            <Image src={Free} alt="" />
            <Stack
              sx={{
                background: "#ff8000",
                padding: "10px",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                color: "#fff",
                fontSize: "12px",
                margin: "10px 0",
              }}
            >
              Create a free team
            </Stack>
            <Typography sx={{ fontSize: "12px", color: "#939597" }}>
              Why Teams?
            </Typography>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}
