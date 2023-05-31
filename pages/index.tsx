import { Stack, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SearchIcon from "@mui/icons-material/Search";
import LockIcon from "@mui/icons-material/Lock";
import { useEffect, useReducer, useState } from "react";
import Logitech from "./../images/brand/logitech.svg";
import Overstock from "./../images/brand/overstock.svg";
import Philips from "./../images/brand/philips.svg";
import Verizon from "./../images/brand/verizon-media.svg";
import Wisetech from "./../images/brand/wisetech-global.svg";
import Expensify from "./../images/brand/expensify.svg";
import Instacart from "./../images/brand/instacart.svg";
import Bloomberg from "./../images/brand/bloomberg.svg";
import Chevron from "./../images/brand/chevron.svg";
import Box from "./../images/brand/box.svg";
import Microsoft from "./../images/brand/microsoft.svg";
import Intercom from "./../images/brand/intercom.svg";
import Barkbox from "./../images/brand/barkbox.svg";
import Dialpad from "./../images/brand/dialpad.svg";
import Foryou from "./../images/foryou.png";
import Question from "./../images/question.png";
import HomeImage from "./../images/home.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import InventoryIcon from "@mui/icons-material/Inventory";
import KeyIcon from "@mui/icons-material/Key";
import AddIcon from "@mui/icons-material/Add";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import BuildIcon from "@mui/icons-material/Build";
import LeftImage from "./../images/left.png";
import RightImage from "./../images/right.png";
import Ask from "../components/common/ask/ask";
import Message from "../components/common/message/message";
import Ticket from "../components/common/ticket/ticket";
import Discount from "../components/common/discount/discount";
import { NextPageWithLayout } from "@/models/common";
import { MainLayout } from "@/components/layout";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Exchange1 from "@/images/exchange/1.png";
import Exchange2 from "@/images/exchange/2.png";
import Exchange3 from "@/images/exchange/3.png";
import Exchange4 from "@/images/exchange/4.png";
import Exchange5 from "@/images/exchange/5.png";
import Exchange6 from "@/images/exchange/6.png";
import Exchange7 from "@/images/exchange/7.png";
import Exchange8 from "@/images/exchange/8.png";
import Exchange9 from "@/images/exchange/9.png";
import Exchange10 from "@/images/exchange/10.png";
import Exchange11 from "@/images/exchange/11.png";
import Exchange12 from "@/images/exchange/12.png";
import Earth from "@/images/earth.svg";
import Company from "@/images/company.svg";

const Home: NextPageWithLayout = () => {
  const listJobs = [
    "developer",
    "data scientist",
    "system admin",
    "mobile developer",
    "game developer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleJob = setInterval(() => {
      setIndex(index + 1);
      if (index >= 4) setIndex(0);
    }, 2000);

    return () => {
      clearInterval(handleJob);
    };
  });
  const [showBrand, setShowBrand] = useState(true);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [showCompany1, setShowCompany1] = useState(false);
  const [showCompany2, setShowCompany2] = useState(false);
  const [showCompany3, setShowCompany3] = useState(true);
  const [showCompany4, setShowCompany4] = useState(false);
  const [showCompany5, setShowCompany5] = useState(false);

  const [showCheck1, setShowCheck1] = useState(false);
  const [showCheck2, setShowCheck2] = useState(false);
  const [showCheck3, setShowCheck3] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [showLock, setShowLock] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const [showExchange1, setShowExchange1] = useState(false);
  const [showExchange2, setShowExchange2] = useState(false);
  const [showExchange3, setShowExchange3] = useState(false);
  const [showExchange4, setShowExchange4] = useState(false);
  const [showExchange5, setShowExchange5] = useState(false);
  const [showExchange6, setShowExchange6] = useState(false);

  useEffect(() => {
    if (window.scrollY >= 1900) {
      setTimeout(() => {
        setShowCheck1(true);
      }, 100);
      setTimeout(() => {
        setShowCheck2(true);
      }, 500);
      setTimeout(() => {
        setShowCheck3(true);
      }, 1000);
    } else {
      setShowCheck1(false);
      setShowCheck2(false);
      setShowCheck3(false);
    }

    if (window.scrollY >= 4800) {
      setTimeout(() => {
        setShowKey(true);
      }, 100);
      setTimeout(() => {
        setShowLock(true);
      }, 500);
      setTimeout(() => {
        setShowTeam(true);
      }, 1000);
      setTimeout(() => {
        setShowPhone(true);
      }, 1500);
    } else {
      setShowKey(false);
      setShowLock(false);
      setShowTeam(false);
      setShowPhone(false);
    }
    if (window.scrollY >= 6500) {
      setTimeout(() => {
        setShowExchange1(true);
      }, 100);
      setTimeout(() => {
        setShowExchange2(true);
      }, 500);
      setTimeout(() => {
        setShowExchange3(true);
      }, 1000);
      setTimeout(() => {
        setShowExchange4(true);
      }, 1500);
      setTimeout(() => {
        setShowExchange5(true);
      }, 2000);
      setTimeout(() => {
        setShowExchange6(true);
      }, 2500);
    } else {
      setShowExchange1(false);
      setShowExchange2(false);
      setShowExchange3(false);
      setShowExchange4(false);
      setShowExchange5(false);
      setShowExchange6(false);
    }
  }, []);

  return (
    <Stack>
      <Stack
        sx={{
          position: "fixed",
          width: "100%",
          zIndex: "100",
        }}
      >
        <Header />
      </Stack>
      <Stack
        sx={{
          padding: {
            xs: "20% 20px 50px",
            sm: "15% 50px 50px",
            lg: "8% 50px 50px",
          },
          background: "#fff",
        }}
      >
        <Stack
          sx={{
            background: "#4b4d4e",
            position: "relative",
            borderRadius: "10px",
          }}
        >
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row", lg: "row" },
              justifyContent: "center",
              alignItems: "center",
              margin: {
                xs: "20px 20px 0",
                sm: "50px 10px 0",
                lg: "50px 10px 0",
              },
            }}
          >
            <Stack
              sx={{
                width: { sm: "40%", lg: "32%" },
                marginRight: { xs: "0", sm: "15px", lg: "15px" },
                marginBottom: { xs: "30px", sm: "0", lg: "0" },
              }}
            >
              <Message
                messageText="Find the best answer to your technical question, help others answer theirs"
                messsageBtn="Join the community"
                messsageIcon={<SearchIcon fontSize="large" />}
                messageBtnColor="#ff8000"
                mg="20px"
                bgMessage="#ffe6cc"
              />
            </Stack>
            <Stack
              sx={{
                width: { sm: "40%", lg: "32%" },
                marginLeft: { xs: "0", sm: "15px", lg: "15px" },
              }}
            >
              <Message
                messageText="Want a secure, private space for your technical knowledge?"
                messsageBtn="Discover Teams"
                messsageIcon={<LockIcon fontSize="large" />}
                messageBtnColor="#3399ff"
                mg="38px"
                bgMessage="#ccebff"
              />
            </Stack>
          </Stack>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "8%",
            }}
          >
            <Stack
              sx={{
                flexDirection: { xs: "column", sm: "column", lg: "row" },
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "30px", sm: "50px", lg: "50px" },
                  fontWeight: "700",
                }}
              >
                Every
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "30px", sm: "50px", lg: "50px" },
                  fontWeight: "700",
                  color: "#ff8000",
                  flexDirection: "row",
                  margin: "0 8px",
                }}
              >
                {listJobs[index]}
              </Typography>
              <Stack sx={{ flexDirection: "row" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "30px", sm: "50px", lg: "50px" },
                    fontWeight: "700",
                    marginRight: "10px",
                  }}
                >
                  has a
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "30px", sm: "50px", lg: "50px" },
                    fontWeight: "700",
                    display: { xs: "flex", sm: "flex", lg: "none" },
                  }}
                >
                  tab open to
                </Typography>
              </Stack>
            </Stack>
            <Stack sx={{ flexDirection: "row" }}>
              <Typography
                sx={{
                  fontSize: "50px",
                  fontWeight: "700",
                  display: { xs: "none", sm: "none", lg: "flex" },
                  marginRight: "10px",
                }}
              >
                tab open to
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "30px", sm: "50px", lg: "50px" },
                  fontWeight: "700",
                }}
              >
                Stack Overflow
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: { xs: "20%", sm: "10%", lg: "5%" },
                background: "#97999b",
                height: "8px",
                borderRadius: "5px",
                margin: { xs: "10% 0", sm: "5% 0 8%", lg: "5% 0 5%" },
              }}
            ></Stack>
          </Stack>
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row", lg: "row" },
              margin: { xs: "0 8% 25%", sm: "0 8% 17%", lg: "0 15% 17%" },
              justifyContent: "space-around",
              alignItems: { xs: "center", sm: "normal", lg: "normal" },
            }}
          >
            <Stack
              sx={{
                textAlign: "center",
                width: { xs: "100%", sm: "20%", lg: "20%" },
                marginBottom: { xs: "20px", sm: "0", lg: "0" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                100+ million
              </Typography>
              <Typography sx={{ color: "#b1b3b4", fontSize: "14px" }}>
                monthly visitors to Stack Overflow & Stack Exchange
              </Typography>
            </Stack>
            <Stack
              sx={{
                textAlign: "center",
                width: { xs: "100%", sm: "20%", lg: "20%" },
                marginBottom: { xs: "20px", sm: "0", lg: "0" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                45.1+ billion
              </Typography>
              <Typography sx={{ color: "#b1b3b4", fontSize: "14px" }}>
                Times a developer got help since 2008
              </Typography>
            </Stack>
            <Stack
              sx={{
                textAlign: "center",
                width: { xs: "100%", sm: "20%", lg: "20%" },
                marginBottom: { xs: "20px", sm: "0", lg: "0" },
              }}
            >
              <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                191% ROI
              </Typography>
              <Typography
                sx={{ color: "#b1b3b4", fontSize: "14px", marginBottom: "5px" }}
              >
                from companies using Stack Overflow for Teams
              </Typography>
            </Stack>
            <Stack
              sx={{
                textAlign: "center",
                width: { xs: "100%", sm: "20%", lg: "20%" },
              }}
            >
              <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                5,000+
              </Typography>
              <Typography
                sx={{ color: "#b1b3b4", fontSize: "14px", marginBottom: "5px" }}
              >
                Stack Overflow for Teams instances active every day
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            flexDirection: { xs: "column", sm: "row", lg: "row" },
            justifyContent: "space-around",
            padding: { sm: "0 5%", lg: "0 8%" },
            margin: "-10% 0 10%",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              width: { xs: "90%", sm: "45%", lg: "47%" },
              marginBottom: { xs: "40px", sm: "0", lg: "0" },
            }}
          >
            <Ticket
              tittleTicket="A public platform building the definitive collection of coding questions & answers"
              textTicket="A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world."
              bgBtnTicket="#ff8000"
              bgTicket="linear-gradient(to bottom, #ffffff 0%, #ffd9b3 100%)"
              imgTicket={Earth}
            />
          </Stack>
          <Stack sx={{ width: { xs: "90%", sm: "45%", lg: "47%" } }}>
            <Ticket
              tittleTicket="A private collaboration & knowledge sharing SaaS platform for companies"
              textTicket="A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge."
              bgTicket="linear-gradient(to bottom, #ffffff 0%, #b3e6ff 100%)"
              bgBtnTicket="#3399ff"
              imgTicket={Company}
            />
          </Stack>
        </Stack>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: { xs: "50%", sm: "20%", lg: "8%" },
          }}
        >
          <Typography
            sx={{
              color: "#939597",
              marginBottom: "5%",
              textAlign: "center",
            }}
          >
            Thousands of organizations around the globe use Stack Overflow for
            Teams
          </Typography>
          <Stack
            sx={{
              height: "120px",
              overflow: "hidden",
              overflowX: { xs: "scroll", sm: "visible", lg: "visible" },
              width: { xs: "350px", sm: "750px", lg: "900px" },
            }}
          >
            {showBrand && (
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: { xs: "750px", sm: "750px", lg: "900px" },
                }}
              >
                <Image src={Logitech} alt="" width="150" height="120" />
                <Image src={Overstock} alt="" width="150" height="120" />
                <Image src={Philips} alt="" width="150" height="120" />
                <Image src={Verizon} alt="" width="150" height="120" />
              </Stack>
            )}
            {show1 && (
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: { xs: "750px", sm: "750px", lg: "900px" },
                }}
              >
                <Image src={Wisetech} alt="" width="150" height="120" />
                <Image src={Expensify} alt="" width="150" height="120" />
                <Image src={Instacart} alt="" width="150" height="120" />
                <Image src={Bloomberg} alt="" width="150" height="120" />
              </Stack>
            )}
            {show2 && (
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: { xs: "750px", sm: "750px", lg: "900px" },
                }}
              >
                <Image src={Chevron} alt="" width="150" height="100" />
                <Image src={Box} alt="" width="150" height="100" />
                <Image src={Microsoft} alt="" width="150" height="120" />
                <Image src={Intercom} alt="" width="150" height="120" />
              </Stack>
            )}
            {show3 && (
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: { xs: "750px", sm: "750px", lg: "900px" },
                }}
              >
                <Image src={Barkbox} alt="" width="150" height="120" />
                <Image src={Dialpad} alt="" width="150" height="120" />
              </Stack>
            )}
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: { xs: "50%", sm: "28%", lg: "15%" },
              marginTop: "30px",
            }}
          >
            <Stack
              sx={{
                width: "40px",
                height: "10px",
                background: "#939597",
                borderRadius: "5px",
              }}
              onClick={() => {
                setShowBrand(true);
                setShow1(false);
                setShow2(false);
                setShow3(false);
              }}
            ></Stack>
            <Stack
              sx={{
                width: "40px",
                height: "10px",
                background: "#939597",
                borderRadius: "5px",
              }}
              onClick={() => {
                setShow1(true);
                setShowBrand(false);
                setShow2(false);
                setShow3(false);
              }}
            ></Stack>
            <Stack
              sx={{
                width: "40px",
                height: "10px",
                background: "#939597",
                borderRadius: "5px",
              }}
              onClick={() => {
                setShow2(true);
                setShowBrand(false);
                setShow1(false);
                setShow3(false);
              }}
            ></Stack>
            <Stack
              sx={{
                width: "40px",
                height: "10px",
                background: "#939597",
                borderRadius: "5px",
              }}
              onClick={() => {
                setShow3(true);
                setShowBrand(false);
                setShow1(false);
                setShow2(false);
              }}
            ></Stack>
          </Stack>
        </Stack>
        {/* For you */}
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              marginRight: "-20px",
              borderRadius: "5px",
              overflow: "hidden",
              display: { xs: "none", sm: "flex", lg: "flex" },
            }}
          >
            <Image
              src={HomeImage}
              alt=""
              style={{ width: "250px", height: "250px" }}
            />
          </Stack>
          <Stack
            sx={{
              zIndex: "10",
              borderRadius: "5px",
              overflow: "hidden",
              position: "relative",
              width: { xs: "300px", sm: "400px", lg: "400px" },
              height: { xs: "200px", sm: "300px", lg: "300px" },
            }}
          >
            <Image
              src={Foryou}
              alt=""
              style={{ width: "400px", height: "300px", position: "absolute" }}
            />
          </Stack>
          <Stack
            sx={{
              marginLeft: "-20px",
              borderRadius: "5px",
              overflow: "hidden",
              display: { xs: "none", sm: "flex", lg: "flex" },
            }}
          >
            <Image
              src={Question}
              alt=""
              style={{ width: "250px", height: "250px" }}
            />
          </Stack>
        </Stack>
        <Stack
          sx={{
            background: "#4b4d4e",
            borderRadius: "5px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-8%",
            position: "relative",
          }}
        >
          <Stack
            sx={{
              marginTop: { xs: "30%", sm: "12%", lg: "12%" },
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <svg
              aria-hidden="true"
              className="svg-icon iconLogoTeams native mb32"
              width="186"
              viewBox="0 0 146 36"
            >
              <path
                d="M33.9 18.9l-1.62-.2c-1.25-.09-1.82-.57-1.82-1.53 0-1.05.76-1.73 2.3-1.73 1.05 0 2.01.3 2.68.77l.96-.96a5.67 5.67 0 00-3.64-1.05c-2.2 0-3.74 1.15-3.74 2.97 0 1.73 1.05 2.6 3.07 2.78l1.72.2c1.15.09 1.73.57 1.73 1.53 0 1.25-1.06 1.82-2.69 1.82-1.24 0-2.4-.29-3.16-1.15l-.96.96c1.15 1.06 2.5 1.44 4.22 1.44 2.5 0 4.12-1.15 4.12-3.07-.19-1.92-1.43-2.6-3.16-2.78h-.01zm12.77-4.6c-1.63 0-2.69.28-3.55 1.43l.96.96c.57-.86 1.24-1.15 2.59-1.15 1.82 0 2.59.77 2.59 2.2v.97h-3.07c-2.3 0-3.55 1.15-3.55 2.97 0 .77.29 1.53.77 2.11.67.67 1.44.96 2.87.96 1.35 0 2.11-.29 2.98-1.06v.96h1.53v-6.9c-.1-2.3-1.44-3.46-4.12-3.46v.01zm2.59 6.7c0 .87-.2 1.45-.48 1.73-.67.58-1.44.68-2.3.68-1.63 0-2.3-.58-2.3-1.73s.76-1.82 2.3-1.82h2.87l-.1 1.15.01-.01zm7.29-5.36c.96 0 1.53.28 2.3 1.15l.96-.96c-1.06-1.15-1.92-1.54-3.36-1.54-2.59 0-4.5 1.73-4.5 5.28 0 3.45 1.91 5.28 4.5 5.28 1.44 0 2.3-.39 3.36-1.54l-1.06-.96c-.76.86-1.34 1.15-2.3 1.15-.96 0-1.82-.38-2.4-1.15-.48-.67-.67-1.44-.67-2.78 0-1.25.2-2.11.67-2.78a3.23 3.23 0 012.5-1.15zm12.85-1.25h-1.82l-4.6 4.5V9.8h-1.54v14.77h1.54v-3.74L64.8 19l3.45 5.57h1.82l-4.22-6.62 3.55-3.55v-.01zm7-.29c-1.53 0-2.58.58-3.26 1.34-.96.96-1.24 2.21-1.24 4.13s.28 3.16 1.24 4.12a4.5 4.5 0 003.27 1.35c1.53 0 2.68-.58 3.26-1.35.96-.96 1.24-2.2 1.24-4.12s-.28-3.17-1.24-4.13c-.58-.76-1.63-1.34-3.26-1.34h-.01zm1.25 7.96c-.29.3-.67.48-1.24.48-.58 0-.96-.19-1.25-.48-.58-.57-.58-1.53-.58-2.59 0-1.15.1-2.01.58-2.59a1.7 1.7 0 011.25-.48c.57 0 .95.2 1.24.48.58.58.58 1.44.58 2.6.1 1.14 0 2.1-.58 2.58zm10.36-7.86l-2.1 6.62-2.21-6.62h-2.8l3.94 10.65h2.1L90.9 14.2h-2.89zm7.3-.1c-2.79 0-4.61 1.92-4.61 5.47 0 4.32 2.4 5.47 4.9 5.47 1.91 0 2.96-.58 4.02-1.63l-1.63-1.54c-.67.67-1.25.96-2.4.96-1.53 0-2.3-.96-2.3-2.4h6.62v-1.15c0-3.07-1.63-5.18-4.6-5.18zm-2.02 4.41c0-.48.1-.76.29-1.15.28-.67.86-1.15 1.82-1.15.86 0 1.53.48 1.82 1.15.2.39.2.67.29 1.15h-4.22zm10.55-3.26V14.2h-2.59v10.65h2.69v-6.43c0-1.35.86-1.92 1.72-1.92.68 0 .96.2 1.44.67l2.02-2.01c-.77-.77-1.44-.96-2.5-.96-1.24-.1-2.2.38-2.78 1.05zm5.39-2.2v11.8h2.69V16.4h1.92v-2h-1.92v-1.15c0-.58.28-.96.96-.96h1.05v-2.2h-1.53c-2.21 0-3.17 1.53-3.17 2.97v-.01zm16.2 1.05c-1.54 0-2.6.58-3.27 1.34-.96.96-1.24 2.21-1.24 4.13s.28 3.16 1.24 4.12a4.5 4.5 0 003.26 1.35c1.54 0 2.7-.58 3.27-1.35.96-.96 1.24-2.2 1.24-4.12s-.28-3.17-1.24-4.13c-.58-.76-1.73-1.34-3.27-1.34h.01zm1.24 7.96c-.29.3-.67.48-1.25.48-.57 0-.95-.19-1.24-.48-.58-.57-.58-1.53-.58-2.59 0-1.15.1-2.01.58-2.59.29-.28.67-.48 1.24-.48.58 0 .96.2 1.25.48.58.58.58 1.44.58 2.6 0 1.14 0 2.1-.58 2.58zm15.83-7.86l-1.73 6.62-2.2-6.62h-1.92l-2.2 6.62-1.73-6.62h-2.79l3.26 10.65h2.21l2.2-6.72 2.21 6.72h2.21l3.26-10.65h-2.78zm-24.57 7.38V9.98h-2.68v11.8c0 1.53.96 3.07 3.07 3.07h1.53v-2.21h-.96c-.67 0-.96-.39-.96-1.06zm-76.92-5.56l1.34-1.34h-2.88v-3.36h-1.53v10.65c0 1.53.86 2.78 2.59 2.78h1.05V23.5h-.76c-.96 0-1.44-.57-1.44-1.53v-5.85l1.63-.1z"
                fill="#fff"
              ></path>
              <path d="M21 27v-8h3v11H0V19h3v8h18z" fill="#BCBBBB"></path>
              <path
                d="M5.4 19.1l13.6 2 .2-2.4-13.3-2.6-.5 3zm1.8-6.8l12 5.6 1.1-2.4-12-5.6-1.1 2.4zm3.4-5.9l10.2 8.5 1.7-2-10.2-8.5-1.7 2zM17.1.2L15 1.8l7.9 10.6 2.1-1.6L17.1.2zM5 25h14v-3H5v3zm24 10.86V28h5v1.58h-3.03v1.57h2.52v1.59h-2.52v3.1H29v.02zm6.02-3.03v-1.8c0-1.21.18-1.85.66-2.36.54-.57 1.23-.8 2.4-.8 1.23 0 1.97.28 2.5.94.38.48.54 1.1.54 2.22v1.8c0 1.21-.18 1.85-.66 2.37-.54.56-1.22.8-2.39.8-1.24 0-1.98-.28-2.5-.94-.4-.49-.55-1.1-.55-2.23zm4.14-.15v-1.5c0-1.36-.23-1.73-1.09-1.73-.86 0-1.09.37-1.09 1.73v1.5c0 1.36.23 1.74 1.1 1.74.85 0 1.08-.38 1.08-1.74zm4.88.14v3.04h-1.96V28h3.08c1.1 0 1.67.15 2.09.57.4.4.57.93.57 1.8 0 1.35-.37 2-1.35 2.29l1.7 3.19h-2.18l-1.43-3.04h-.52v.01zM44 31.34h.96c.7 0 .92-.22.92-.9 0-.66-.23-.88-.92-.88H44v1.78zm9.05 4.52v-6.27h-2.02V28h6v1.58h-2.02v6.27h-1.96v.01zm4.98 0V28h5.08v1.58h-3.14v1.52h2.65v1.58h-2.65v1.59h3.2v1.58h-5.14v.01zm10.21-1.39h-2.5l-.42 1.39H63.2L66.03 28h1.9l2.84 7.85h-2.1l-.43-1.39v.01zm-.46-1.55L67 30.27l-.8 2.65h1.58zm3.46 2.94V28h1.81l1.88 3.9 1.88-3.9h1.82v7.85h-1.87v-4.24l-1.2 2.48H74.3l-1.2-2.48v4.24h-1.87l.01.01zm8.17-1.32l1.48-.95c.36.6.82.84 1.65.84.7 0 1.03-.25 1.03-.78 0-.42-.22-.64-.8-.78-1.37-.34-1.66-.44-2.07-.7-.63-.41-.92-1-.92-1.89 0-1.57.96-2.4 2.75-2.4 1.36 0 2.21.43 2.75 1.38l-1.44.91c-.38-.54-.75-.73-1.34-.73-.55 0-.85.25-.85.71 0 .53.3.75 1.36 1.01 1 .26 1.24.34 1.64.6.53.35.79.92.79 1.8 0 .86-.21 1.42-.66 1.8-.5.42-1.28.64-2.26.64-.9 0-1.74-.2-2.29-.56a2.2 2.2 0 01-.82-.9z"
                fill="#F48024"
              ></path>
            </svg>
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "25px", lg: "30px" },
                textAlign: "center",
                margin: { xs: "10% 30px 0", sm: "5% 0 0", lg: "5% 0 0" },
              }}
            >
              Capture your company’s knowledge and context in a
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "25px", lg: "30px" },
                textAlign: "center",
                margin: { xs: "0 40px 0", sm: "0", lg: "0" },
              }}
            >
              discoverable format to{" "}
              <a style={{ color: "#ff8000" }}>unblock your team</a>
            </Typography>
            <Stack
              sx={{
                width: "200px",
                background: "#3399ff",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 0",
                borderRadius: "5px",
                marginBottom: "13px",
                color: "#fff",
                margin: "5% 0",
              }}
            >
              Take a tour of Teams
            </Stack>
            <Stack
              sx={{
                flexDirection: { xs: "column", sm: "row", lg: "row" },
                height: "30vh",
                width: "100%",
                padding: { xs: "0 20px 30px", sm: "0 0 0 30px", lg: "0 10%" },
                marginBottom: { xs: "80%", sm: "0", lg: "0" },
              }}
            >
              {showCheck1 && (
                <Stack
                  sx={{
                    alignItems: "center",
                    textAlign: "center",
                    width: { xs: "100%", sm: "220px", lg: "350px" },
                    marginBottom: { xs: "20px", sm: "0", lg: "0" },
                  }}
                >
                  <CheckCircleIcon sx={{ color: "#33cc33" }} />
                  <Typography
                    sx={{
                      margin: { sm: "4% 0 18% ", lg: "4% 0" },
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Increase productivity
                  </Typography>
                  <Typography sx={{ color: "#cbcccd" }}>
                    If somebody somewhere has the right answer, suddenly you
                    have it too. Collaborate better in a remote-first world.
                  </Typography>
                </Stack>
              )}
              {showCheck2 && (
                <Stack
                  sx={{
                    alignItems: "center",
                    textAlign: "center",
                    width: { xs: "100%", sm: "220px", lg: "350px" },
                    marginBottom: { xs: "20px", sm: "0", lg: "0" },
                  }}
                >
                  <CheckCircleIcon sx={{ color: "#33cc33" }} />
                  <Typography
                    sx={{ margin: "4% 0", fontSize: "18px", fontWeight: "600" }}
                  >
                    Accelerate time to market
                  </Typography>
                  <Typography sx={{ color: "#cbcccd" }}>
                    Shorten the time between initial idea and complete product.
                    Take delays and misinformation out of the equation.
                  </Typography>
                </Stack>
              )}
              {showCheck3 && (
                <Stack
                  sx={{
                    alignItems: "center",
                    textAlign: "center",
                    width: { xs: "100%", sm: "220px", lg: "350px" },
                    marginBottom: { xs: "20px", sm: "0", lg: "0" },
                  }}
                >
                  <CheckCircleIcon sx={{ color: "#33cc33" }} />
                  <Typography
                    sx={{ margin: "4% 0", fontSize: "18px", fontWeight: "600" }}
                  >
                    Protect institutional knowledge
                  </Typography>
                  <Typography sx={{ color: "#cbcccd" }}>
                    People come and people go, but if you capture their
                    contributions in one central place, that expertise sticks
                    around.
                  </Typography>
                </Stack>
              )}
            </Stack>
            <Stack
              sx={{
                background: "#646668",
                width: { xs: "100%", sm: "50%", lg: "80%" },
                height: "1px",
              }}
            ></Stack>
            <Stack
              sx={{
                margin: { xs: "15% 10px", sm: "5% 0", lg: "5% 0" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Ensure your company stays on course
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Here are just a few types of technologists that we help.
              </Typography>
              <Stack
                sx={{
                  width: { xs: "350px", sm: "700px", lg: "80%" },
                  overflowX: { xs: "scroll", sm: "scroll", lg: "visible" },
                  justifyContent: "center",
                  alignItems: "center",
                  height: "45vh",
                  margin: "5%",
                }}
              >
                <Stack
                  sx={{
                    flexDirection: "row",
                    height: { xs: "40vh", sm: "35vh", lg: "45vh" },
                    width: { xs: "1000px", sm: "1200px", lg: "100%" },
                  }}
                >
                  <Stack
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "35px 25px",
                      background: showCompany1 ? "#646668" : "",
                      width: showCompany1 ? "26%" : "18.5%",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      setShowCompany1(true);
                      setShowCompany2(false);
                      setShowCompany3(false);
                      setShowCompany4(false);
                      setShowCompany5(false);
                    }}
                  >
                    <Stack>
                      <svg
                        aria-hidden="true"
                        className="fc-black-300 mb0 mx32 svg-spot spotRocketLg"
                        width="96"
                        height="96"
                        viewBox="0 0 96 96"
                      >
                        <path
                          d="M78.2 14.36a1.73 1.73 0 0 1 1.27-1.85 37.5 37.5 0 0 1 7.66-1.5c1.09-.09 1.98.8 1.9 1.89-.21 2.6-.79 5.19-1.56 7.8a1.71 1.71 0 0 1-1.66 1.28c-4.27-.16-7.08-3.56-7.62-7.62ZM34.55 77.77l3.55-2.84-10-11-3.36 2.69c-.89.7-1 2.02-.23 2.86l7.34 8.08c.7.77 1.88.86 2.7.21ZM70.1 37.93a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm-7 7a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                          opacity=".2"
                        ></path>
                        <path d="M75.5 27a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-7 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-14 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm4-7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM27.21 70.41l2.93 3.23a3.47 3.47 0 0 0 4.74.37l2.82-2.25c.95.34 2.03.25 2.95-.33.8-.51 1.95-1.26 3.35-2.2v8.29c0 3.02 3.6 4.6 5.82 2.56l8.25-7.56a3.5 3.5 0 0 0 1.03-1.77l3.84-16.33c1.7-1.53 3.4-3.13 5.08-4.8 11.26-11.2 22.04-25.83 22.92-41.56a3.32 3.32 0 0 0-3.5-3.5c-15.71.86-30.38 11.47-41.59 22.54a161.7 161.7 0 0 0-5.19 5.4 1.5 1.5 0 0 0-.54.05l-18.35 4.83c-.74.2-1.4.63-1.87 1.25l-5.18 6.8A3.47 3.47 0 0 0 17.48 51H26c-.83 1.21-1.5 2.2-1.95 2.92a3.42 3.42 0 0 0 .38 4.2l.4.43-2.06 2.06a3.47 3.47 0 0 0-.11 4.79l2.53 2.79-.75.75a1.5 1.5 0 0 0 2.12 2.12l.65-.65ZM87.95 7.9c-.17 2.9-.7 5.78-1.53 8.61a9.21 9.21 0 0 1-5.8-2.27 7.13 7.13 0 0 1-2.6-4.88 39.23 39.23 0 0 1 9.59-1.8c.2 0 .35.15.34.34ZM47.96 29.24c7.87-7.77 17.2-15.02 27.15-18.87a10.32 10.32 0 0 0 3.54 6.13 12.33 12.33 0 0 0 6.8 2.95c-3.8 10.29-11.39 19.93-19.54 28.03A169.1 169.1 0 0 1 39.04 68.9c-.15.1-.37.08-.53-.09l-4.68-5.02 10.73-10.73a1.5 1.5 0 0 0-2.12-2.12L31.78 61.6l-5.16-5.53a.42.42 0 0 1-.06-.52 167.03 167.03 0 0 1 21.4-26.31Zm-18.3 34.48-2.35 2.35-2.43-2.69a.47.47 0 0 1 .01-.65l1.99-1.99 2.78 2.98Zm-.33 4.57 2.37-2.37 3.64 3.89L33 71.67a.47.47 0 0 1-.65-.05l-3.03-3.33ZM47 67.15c3.38-2.4 7.6-5.56 12.06-9.34l-2.88 12.25a.47.47 0 0 1-.14.24l-8.25 7.56a.47.47 0 0 1-.79-.34V67.15Zm-9.8-30.73A177.28 177.28 0 0 0 28.11 48H17.48a.47.47 0 0 1-.37-.76l5.17-6.8a.47.47 0 0 1 .26-.16l14.67-3.86ZM14.06 81.44a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.12-2.12l7-7a1.5 1.5 0 0 1 2.12 0Zm9-6.88a1.5 1.5 0 0 0-2.12-2.12l-5 5a1.5 1.5 0 0 0 2.12 2.12l5-5Zm-7-4.12a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.12-2.12l7-7a1.5 1.5 0 0 1 2.12 0Zm9 12.12a1.5 1.5 0 0 0-2.12-2.12l-5 5a1.5 1.5 0 0 0 2.12 2.12l5-5Z"></path>
                      </svg>
                    </Stack>
                    <Typography
                      sx={{
                        margin: "10% 0 5%",
                        fontSize: "20px",
                        fontWeight: "550",
                      }}
                    >
                      DevOps engineers
                    </Typography>
                    {showCompany1 && (
                      <Typography>
                        Shipping new products and features requires teamwork and
                        coordination. Forget checklists and long docs no one
                        ever reads.
                      </Typography>
                    )}
                  </Stack>
                  <Stack
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "35px 25px",
                      background: showCompany2 ? "#646668" : "",
                      width: showCompany2 ? "26%" : "18.5%",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      setShowCompany1(false);
                      setShowCompany2(true);
                      setShowCompany3(false);
                      setShowCompany4(false);
                      setShowCompany5(false);
                    }}
                  >
                    <Stack>
                      <svg
                        aria-hidden="true"
                        className="fc-black-300 mb0 mx32 svg-spot spotMetricsLg"
                        width="96"
                        height="96"
                        viewBox="0 0 96 96"
                      >
                        <path
                          d="M86 26.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm-52 25a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm-15 40a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM72.5 60a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
                          opacity=".2"
                        ></path>
                        <path d="M75 17a8 8 0 1 1 6.49 7.86L68.04 50.79A7.98 7.98 0 0 1 63 65a8 8 0 0 1-7.85-9.55l-17-9.84a8 8 0 0 1-8.56 4.27L20.21 75.2a8 8 0 1 1-2.8-1.08l9.38-25.32a8 8 0 1 1 12.19-6.18l17.3 10.02a8 8 0 0 1 9.12-3.27l13.29-25.63A8 8 0 0 1 75 17Zm8-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM31 37a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM16 77a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm42-20a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z"></path>
                      </svg>
                    </Stack>
                    <Typography
                      sx={{
                        margin: "10% 0 5%",
                        fontSize: "20px",
                        fontWeight: "550",
                      }}
                    >
                      Data scientists
                    </Typography>
                    {showCompany2 && (
                      <Typography>
                        Business decisions are better when backed by data. Give
                        visibility to the data that support your strategies.
                      </Typography>
                    )}
                  </Stack>
                  <Stack
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "35px 25px",
                      background: showCompany3 ? "#646668" : "",
                      width: showCompany3 ? "26%" : "18.5%",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      setShowCompany1(false);
                      setShowCompany2(false);
                      setShowCompany3(true);
                      setShowCompany4(false);
                      setShowCompany5(false);
                    }}
                  >
                    <Stack>
                      <svg
                        aria-hidden="true"
                        className="fc-black-300 mb0 mx32 svg-spot spotTechnicalWritingLg"
                        width="96"
                        height="96"
                        viewBox="0 0 96 96"
                      >
                        <path
                          d="M33.3 60.21a1 1 0 0 1-.04-1.46l41.1-40.1a1 1 0 0 1 .33-.22l10.83-4.17a1 1 0 0 1 1.31 1.25l-3.26 9.78a1 1 0 0 1-.22.37L43.17 67.8a1 1 0 0 1-1.4.05l-8.48-7.64Zm-9.19 19.02a1 1 0 0 0 .38.98l2.12 1.61a1 1 0 0 1 .11 1.49l-9.1 9.48a3 3 0 0 1-4.29.04l-5.1-5.1a3 3 0 0 1 .11-4.35l12.5-11.28a1 1 0 0 1 1.33-.01l2.38 2.08a1 1 0 0 1 .33.94l-.77 4.12Z"
                          opacity=".2"
                        ></path>
                        <path d="M91.4 5.56a1.5 1.5 0 0 0-1.87-1.98l-15 5c-.24.07-.44.2-.61.38l-9.2 9.6.26-1.85a1.5 1.5 0 0 0-.86-1.58l-11-5a1.5 1.5 0 0 0-1.93.64l-4.51 8.12c-2.16-.21-4.27-.2-6.35 0l-4.52-8.12a1.5 1.5 0 0 0-1.93-.64l-11 5a1.5 1.5 0 0 0-.84 1.73l1.77 7.06c-.9.76-1.6 1.62-2.22 2.46-.32.44-.63.9-.93 1.33v.01a245.75 245.75 0 0 1-.71 1.01l-7.98-2.65a1.5 1.5 0 0 0-1.85.84l-5 12a1.5 1.5 0 0 0 .77 1.95l8 3.56c-.2 2.27-.2 4.93 0 7.14l-8 3.56a1.5 1.5 0 0 0-.77 1.95l5 12a1.5 1.5 0 0 0 1.85.84l2.58-.86-9.57 8.84a1.5 1.5 0 0 0-.04 2.16l9 9a1.5 1.5 0 0 0 2.12 0l7.77-7.76 10.05 4.57c.73.33 1.6.02 1.96-.7l3.53-7.06c2.19.22 4.34.2 6.45-.02l5.48 7.31c.4.54 1.13.74 1.76.5l10-4c.62-.26 1-.9.93-1.57l-.9-8.13a21 21 0 0 0 3.99-4.01l7.06 1.77a1.5 1.5 0 0 0 1.73-.84l5-11a1.5 1.5 0 0 0-.5-1.84L74.1 51.8c.24-2.24.22-4.44 0-6.6l6.28-4.48c.57-.4.78-1.15.52-1.8l-3.59-8.64a1.5 1.5 0 0 0-.58-.7l8.35-8.53c.14-.14.25-.3.32-.5l6-15ZM20.01 68.1c.1-.09.18-.19.25-.3 1 1.46 2.1 2.94 3.55 4.24l-1.67 6.7-.65.64-5.94-5.94a1.5 1.5 0 0 0-.86-.43l5.32-4.9ZM13 74.58c.02.36.17.7.44.98l5.94 5.94L15 85.88l-6.84-6.84L13 74.58Zm12.34 3.74 1.62-6.46a1.5 1.5 0 0 0-.53-1.54c-1.7-1.33-2.8-2.93-4.13-4.86l-.57-.82a1.5 1.5 0 0 0-1.7-.56l-7.68 2.56-3.9-9.36 7.66-3.4c.6-.28.96-.91.88-1.57a37.6 37.6 0 0 1 0-8.61 1.5 1.5 0 0 0-.88-1.57l-7.66-3.4 3.9-9.37 7.68 2.56c.6.2 1.26 0 1.65-.5.45-.57.86-1.15 1.24-1.7l.22-.32.87-1.24a10.1 10.1 0 0 1 2.35-2.43c.5-.36.75-.99.6-1.6l-1.7-6.78 8.6-3.91 4.33 7.79c.3.53.89.84 1.5.76a29.4 29.4 0 0 1 7.61 0 1.5 1.5 0 0 0 1.51-.76l4.33-7.8 8.72 3.97-.7 4.87-6.23 6.5a14.06 14.06 0 0 0-4.86-2.61A21.77 21.77 0 0 0 43.5 25C31.49 25 23 34.69 23 46.5c0 11.76 8.53 22.1 20.6 22.1C55.47 68.6 66 58.44 66 46.5a10.2 10.2 0 0 0-1.14-4.65l-.02-.02a4.72 4.72 0 0 0-.03-.06l9.84-10.06 3 7.26-6.02 4.3A1.5 1.5 0 0 0 71 44.7c.32 2.5.35 5.04 0 7.61-.07.55.17 1.1.62 1.42l6 4.28-3.98 8.74-6.79-1.7a1.5 1.5 0 0 0-1.54.53c-1.66 2.12-2.65 3.29-4.68 4.7-.45.31-.7.85-.63 1.4l.87 7.86L53 82.69l-5.31-7.08a1.5 1.5 0 0 0-1.39-.59c-2.5.32-5.04.35-7.61 0a1.5 1.5 0 0 0-1.54.82l-3.36 6.7-8.32-3.78a1.5 1.5 0 0 0-.14-.43Zm37.38-53.34a1.5 1.5 0 0 0 1.26-1.27l.01-.06 10.54-11 7.36 7.36-43.73 44.7a17.18 17.18 0 0 1-8-5.76l32.56-33.97ZM49.1 29c1.62.55 2.93 1.23 3.74 1.94L28.47 56.38A20.59 20.59 0 0 1 26 46.5C26 36.14 33.34 28 43.5 28c1.58 0 3.68.35 5.61 1Zm-5.52 36.6c-.67 0-1.34-.04-1.99-.11l20.96-21.43.02.04v.02c.21.59.42 1.42.42 2.38 0 10.23-9.12 19.1-19.4 19.1Zm39.86-48.27-6.42-6.42L87.4 7.45l-3.96 9.88Z"></path>
                      </svg>
                    </Stack>
                    <Typography
                      sx={{
                        margin: "10% 0 5%",
                        fontSize: "20px",
                        fontWeight: "550",
                      }}
                    >
                      Software engineers
                    </Typography>
                    {showCompany3 && (
                      <Typography>
                        Help engineers be more efficient and streamline
                        knowledge sharing using a tool they already love and
                        trust.
                      </Typography>
                    )}
                  </Stack>
                  <Stack
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "35px 25px",
                      background: showCompany4 ? "#646668" : "",
                      width: showCompany4 ? "26%" : "18.5%",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      setShowCompany1(false);
                      setShowCompany2(false);
                      setShowCompany3(false);
                      setShowCompany4(true);
                      setShowCompany5(false);
                    }}
                  >
                    <Stack>
                      <svg
                        aria-hidden="true"
                        className="fc-black-300 mb0 mx32 svg-spot spotHeadsetLg"
                        width="96"
                        height="96"
                        viewBox="0 0 96 96"
                      >
                        <path
                          d="M67.37 12.9A38.67 38.67 0 0 0 50.8 9a38.02 38.02 0 0 0-16.47 3.9c-.38.3-.44.74-.19 1.2l4.74 7.49c.24.35.79.61 1.29.6.1-.01.21-.04.32-.07 1.01-.29 6.76-1.88 10.4-1.88 3.7 0 9.6 1.65 10.45 1.9.07.02.14.04.22.04.44.05 1-.15 1.25-.6l4.73-7.49c.26-.44.2-.9-.18-1.18ZM19 77.5a7.84 7.84 0 0 0 7.79 7.88 3.98 3.98 0 0 0 3.93-3.9v-18.5A4 4 0 0 0 26.8 59a7.84 7.84 0 0 0-7.8 7.89v10.6Zm57.94 6.88c4.3 0 7.78-3.54 7.78-7.89V65.9a7.84 7.84 0 0 0-7.78-7.9A4 4 0 0 0 73 61.99v18.5a3.98 3.98 0 0 0 3.94 3.89ZM49 92h6a3 3 0 0 0 0-6h-6a3 3 0 0 0 0 6Z"
                          opacity=".2"
                        ></path>
                        <path d="M54.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM50 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM42.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11 43.69a37.1 37.1 0 0 1 19.3-32.54l1.99 2.93C20.7 19.81 13.95 30.6 13.95 44.57a1.5 1.5 0 0 0 3 0c0-13 6.27-22.8 17-27.96l.05-.02 1.66 2.44c.38.57 1.1.8 1.74.57a34.63 34.63 0 0 1 11.47-1.97c4.03 0 7.94.63 11.45 1.96.66.25 1.4 0 1.79-.58l1.33-2.06c10.35 5.35 16.59 14.92 16.59 27.62a1.5 1.5 0 0 0 3 0c0-13.74-6.78-24.26-17.95-30.14l1.99-3.06A37.8 37.8 0 0 1 75 17.41a36.77 36.77 0 0 1 11 26.28V64h-3v-1.23c0-5.26-4.7-9.27-10.13-9.27-3.06 0-5.87 2.31-5.87 5.43v18.23c0 3.05 2.83 5.34 5.87 5.34.2 0 .4 0 .59-.02-.07.39-.21.77-.4 1.06-.28.43-.5.46-.56.46H54.74a4.5 4.5 0 0 0-4.24-3h-6a4.5 4.5 0 0 0 0 9h6a4.5 4.5 0 0 0 4.24-3H72.5a3.7 3.7 0 0 0 3.07-1.83c.6-.92.93-2.08.93-3.17v-.03a1.78 1.78 0 0 0 0-.09c3.74-1.32 6.5-4.62 6.5-8.65V73h4.33c2.46 0 4.17-2.19 4.17-4.5 0-1.74-.97-3.41-2.5-4.13V43.69c0-11.12-4.5-21.1-11.88-28.41A40.39 40.39 0 0 0 48.5 3.5C26.1 3.5 8 21.45 8 43.69v20.48a4.5 4.5 0 0 0-3 4.33C5 70.81 6.7 73 9.17 73H13v.23c0 5.26 4.7 9.27 10.13 9.27 3.04 0 5.87-2.3 5.87-5.34V58.93c0-3.12-2.8-5.43-5.87-5.43C17.7 53.5 13 57.51 13 62.77V64h-2V43.69ZM37.5 16.4 33 9.8a37.72 37.72 0 0 1 15.5-3.3 37.5 37.5 0 0 1 15.89 3.49l-4.16 6.39a37.63 37.63 0 0 0-22.73.03Zm14.25 68.26a1.5 1.5 0 0 0 0 1.66c-.27.4-.73.67-1.25.67h-6a1.5 1.5 0 0 1 0-3h6c.52 0 .98.27 1.25.67ZM23.13 56.5c1.7 0 2.87 1.26 2.87 2.43v18.23c0 1.06-1.14 2.34-2.87 2.34-4.08 0-7.13-2.96-7.13-6.27V62.77c0-3.31 3.05-6.27 7.13-6.27ZM9.17 67H13v3H9.17C8.69 70 8 69.5 8 68.5S8.69 67 9.17 67ZM70 58.93c0-1.17 1.16-2.43 2.87-2.43 4.08 0 7.13 2.96 7.13 6.27v10.46c0 3.31-3.05 6.27-7.13 6.27-1.73 0-2.87-1.28-2.87-2.34V58.93ZM83.5 70v-3h3.83c.48 0 1.17.5 1.17 1.5s-.69 1.5-1.17 1.5H83.5Z"></path>
                      </svg>
                    </Stack>
                    <Typography
                      sx={{
                        margin: "10% 0 5%",
                        fontSize: "20px",
                        fontWeight: "550",
                      }}
                    >
                      Support teams
                    </Typography>
                    {showCompany4 && (
                      <Typography>
                        Level up your support by providing information to your
                        customers using a natural interface: questions and
                        answers.
                      </Typography>
                    )}
                  </Stack>
                  <Stack
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "35px 25px",
                      background: showCompany5 ? "#646668" : "",
                      width: showCompany5 ? "26%" : "18.5%",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      setShowCompany1(false);
                      setShowCompany2(false);
                      setShowCompany3(false);
                      setShowCompany4(false);
                      setShowCompany5(true);
                    }}
                  >
                    <Stack>
                      <svg
                        aria-hidden="true"
                        className="fc-black-300 mb0 mx32 svg-spot spotPeopleLg"
                        width="96"
                        height="96"
                        viewBox="0 0 96 96"
                      >
                        <path
                          opacity=".2"
                          d="M36 47.5a9.48 9.48 0 0 1-3.67 7.5h5.76a1 1 0 0 1 .7.29l1.39 1.36A9.5 9.5 0 0 1 57.87 54h7.7a9.5 9.5 0 1 1 13.86 0H83a4 4 0 0 1 4 4v23a2 2 0 0 1-2 2H64v10a1 1 0 0 1-1 1H36a1 1 0 0 1-1-1V83H16a1 1 0 0 1-1-1V59a4 4 0 0 1 4-4h1.67a9.48 9.48 0 0 1 5.83-17 9.5 9.5 0 0 1 9.5 9.5Z"
                        ></path>
                        <path d="M13 44.5A11 11 0 1 1 30.98 53h.52a1.5 1.5 0 0 1 0 3H15.54C13.5 56 12 57.54 12 59.21V78h4.38a1.5 1.5 0 0 1-.38-1V63a1.5 1.5 0 0 1 3 0v14c0 .38-.14.73-.38 1h9.06a1.5 1.5 0 0 1 0 3H10.5A1.5 1.5 0 0 1 9 79.5V59.21c0-3.5 3.03-6.21 6.54-6.21h1.48A10.98 10.98 0 0 1 13 44.5Zm11-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm23 8A11 11 0 0 0 40.02 64h-1.33C35.12 64 32 66.73 32 70.3v20.2c0 .83.67 1.5 1.5 1.5h27c.83 0 1.5-.67 1.5-1.5V70.3c0-3.57-3.12-6.3-6.7-6.3h-1.32A11 11 0 0 0 47 44.5Zm-8 11a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm-4 14.8c0-1.7 1.55-3.3 3.7-3.3h16.6c2.15 0 3.7 1.6 3.7 3.3V89h-4V75a1.5 1.5 0 0 0-3 0v14H42V75a1.5 1.5 0 0 0-3 0v14h-4V70.3Zm35-36.8A11 11 0 0 1 76.98 53h1.7A6.28 6.28 0 0 1 85 59.21V79.5c0 .83-.67 1.5-1.5 1.5H66.32a1.5 1.5 0 0 1 0-3h8.06a1.5 1.5 0 0 1-.38-1V63a1.5 1.5 0 0 1 3 0v14c0 .38-.14.73-.38 1H82V59.21A3.28 3.28 0 0 0 78.68 56H62.5a1.5 1.5 0 0 1 0-3h.52A11 11 0 0 1 70 33.5Zm8 11a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"></path>
                        <path
                          d="M12.5 11a1.5 1.5 0 0 0 0 3h13a1.5 1.5 0 0 0 0-3h-13ZM11 17.5c0-.83.67-1.5 1.5-1.5h9a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1-1.5-1.5Zm-5-10C6 6.67 6.67 6 7.5 6h25c.83 0 1.5.67 1.5 1.5v15c0 .83-.67 1.5-1.5 1.5H29v6a1.5 1.5 0 0 1-2.4 1.2L17 24H7.5A1.5 1.5 0 0 1 6 22.5v-15ZM9 9v12h8.5c.32 0 .64.1.9.3L26 27v-6h5V9H9Zm60.5 3a1.5 1.5 0 0 0 0 3h13a1.5 1.5 0 0 0 0-3h-13ZM68 18.5c0-.83.67-1.5 1.5-1.5h8a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1-1.5-1.5ZM87.5 7c.83 0 1.5.67 1.5 1.5v16c0 .83-.67 1.5-1.5 1.5H76.42l-7.15 4.29A1.5 1.5 0 0 1 67 29v-3h-2.5a1.5 1.5 0 0 1-1.5-1.5v-16c0-.83.67-1.5 1.5-1.5h23ZM86 23V10H66v13h4v3.35l5.23-3.14c.23-.14.5-.21.77-.21h10Zm-42.5 4a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3h-9ZM59 22.5c0-.83-.67-1.5-1.5-1.5h-19c-.83 0-1.5.67-1.5 1.5v12c0 .83.67 1.5 1.5 1.5H41v4.5a1.5 1.5 0 0 0 2.56 1.06L49.12 36h8.38c.83 0 1.5-.67 1.5-1.5v-12ZM40 24h16v9h-8.12L44 36.88V33h-4v-9Z"
                          opacity=".35"
                        ></path>
                      </svg>
                    </Stack>
                    <Typography
                      sx={{
                        margin: "10% 0 5%",
                        fontSize: "20px",
                        fontWeight: "550",
                      }}
                    >
                      Engineering leaders
                    </Typography>
                    {showCompany5 && (
                      <Typography>
                        Help your team get the information they need to do their
                        job - reduce burnout and help engineers grow and learn
                        together.
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              sx={{
                flexDirection: { sm: "column", lg: "row" },
                justifyContent: "space-around",
                width: { xs: "100%", sm: "90%", lg: "80%" },
                alignItems: "center",
                marginBottom: "25px",
                marginTop: "5%",
              }}
            >
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row", lg: "row" },
                  margin: { xs: "0", sm: "0 0 50px", lg: "-62% 0 0" },
                  alignItems: "center",
                }}
              >
                <Stack
                  sx={{
                    width: { xs: "320px", sm: "270px", lg: "330px" },
                    marginRight: { xs: "0", sm: "10px", lg: "10px" },
                    marginBottom: { xs: "25px", sm: "0", lg: "0" },
                  }}
                >
                  <Discount
                    tittleDiscount="Free"
                    priceDiscount="Free"
                    textDiscount="No credit card required"
                    textBtnDiscount="Create a free account"
                    textEndDiscount="Always free up to 50 teammates"
                    iconDiscount1={<VolumeDownIcon />}
                    iconDiscount2={<AdminPanelSettingsIcon />}
                    iconDiscount3={<InventoryIcon />}
                    textDiscount1="ChatOps integrations - Slack & Microsoft Teams"
                    textDiscount2="Your own private space hosted on stackoverflowteams.com"
                    textDiscount3="Structured and searchable knowledge base"
                    colorDiscount="#ff8000"
                  />
                </Stack>
                <Stack
                  sx={{
                    width: { xs: "320px", sm: "270px", lg: "330px" },
                    margin: {
                      xs: "0 0 55px 0",
                      sm: "0 0 0 10px",
                      lg: "0 0 0 10px",
                    },
                  }}
                >
                  <Discount
                    tittleDiscount="Basic"
                    priceDiscount="$6 USD"
                    textDiscount="per teammate / month"
                    textBtnDiscount="Get started"
                    textEndDiscount="Up to 250 teammates"
                    iconDiscount1={<KeyIcon />}
                    iconDiscount2={<VolumeDownIcon />}
                    iconDiscount3={<AdminPanelSettingsIcon />}
                    iconDiscount4={<InventoryIcon />}
                    textDiscount1="Single sign-on (SSO) with SAML + Okta integration"
                    textDiscount2="ChatOps integrations - Slack & Microsoft Teams"
                    textDiscount3="Your own private space hosted on stackoverflowteams.com"
                    textDiscount4="Structured and searchable knowledge base"
                    colorDiscount="#d8d9da"
                  />
                </Stack>
              </Stack>
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row", lg: "column" },
                  alignItems: { xs: "center", sm: "normal", lg: "normal" },
                }}
              >
                <Stack
                  sx={{
                    width: { xs: "320px", sm: "270px", lg: "330px" },
                    margin: {
                      xs: "0 0 25px 0",
                      sm: "0 10px 0 0",
                      lg: "0 10px 20px 0",
                    },
                  }}
                >
                  <Discount
                    tittleDiscount="Business"
                    priceDiscount="$12 USD"
                    textDiscount="per teammate / month"
                    textBtnDiscount="Get started"
                    textEndDiscount="Unlimited teammates"
                    iconAdd={<AddIcon />}
                    iconDiscount1={<AssignmentIcon />}
                    iconDiscount2={<InsertLinkIcon />}
                    iconDiscount3={<LibraryBooksIcon />}
                    iconDiscount4={<LibraryBooksIcon />}
                    iconDiscount5={<AddModeratorIcon />}
                    iconDiscount6={<BuildIcon />}
                    textAdd="All the features of Basic plus…"
                    textDiscount1="Long-form knowledge with Articles"
                    textDiscount2="Additional integrations — ChatOps, Jira, GitHub & Okta"
                    textDiscount3="Group content together into Collections"
                    textDiscount4="Usage and adoption metrics"
                    textDiscount5="Priority customer support"
                    textDiscount6="Content Health tools"
                    colorDiscount="#4b4d4e"
                  />
                </Stack>
                <Stack
                  sx={{
                    width: { xs: "320px", sm: "270px", lg: "330px" },
                    marginBottom: "10%",
                    marginLeft: { xs: "0", sm: "10px", lg: "-350px" },
                  }}
                >
                  <Discount
                    tittleDiscount="Enterprise"
                    priceDiscount="Custom pricing"
                    textDiscount="Let’s talk about what you need"
                    textBtnDiscount="Request a demo"
                    textEndDiscount="Unlimited teammates"
                    iconAdd={<AddIcon />}
                    iconDiscount1={<AssignmentIcon />}
                    iconDiscount2={<InsertLinkIcon />}
                    iconDiscount3={<LibraryBooksIcon />}
                    iconDiscount4={<LibraryBooksIcon />}
                    iconDiscount5={<AddModeratorIcon />}
                    textAdd="Premium features of Business plus…"
                    textDiscount1="Unlimited Teams within your instance"
                    textDiscount2="Flexible hosting options — cloud or on-premises"
                    textDiscount3="Robust read and write API"
                    textDiscount4="Your own customer success and community building representative"
                    textDiscount5="99.5% uptime SLA and priority support"
                    colorDiscount="#002080"
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack
              sx={{
                flexDirection: { sm: "column", lg: "row" },
                justifyContent: "space-around",
                alignItems: "center",
                width: "90%",
                marginBottom: "5%",
              }}
            >
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row", lg: "row" },
                  justifyContent: "space-between",
                  width: { xs: "80%", sm: "80%", lg: "48%" },
                  marginBottom: { xs: "20px", sm: "20px", lg: "0" },
                }}
              >
                <Stack
                  sx={{
                    border: ".5px solid #939597",
                    borderRadius: "5px",
                    padding: { xs: "20px", sm: "20px 30px", lg: "20px 30px" },
                    textAlign: "center",
                    width: { sm: "250px", lg: "275px" },
                    marginBottom: { xs: "20px", sm: "0", lg: "0" },
                  }}
                >
                  <Typography>
                    A Forrester Consulting study shows{" "}
                    <a
                      style={{
                        color: "#3399ff",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      191% return on investment
                    </a>{" "}
                    with Stack Overflow for Teams.
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    border: ".5px solid #939597",
                    borderRadius: "5px",
                    padding: { xs: "20px", sm: "20px 30px", lg: "20px 30px" },
                    textAlign: "center",
                    width: { sm: "250px", lg: "275px" },
                  }}
                >
                  <Typography>
                    The world’s largest telecom firm{" "}
                    <a
                      style={{
                        color: "#3399ff",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      saved $10M
                    </a>{" "}
                    in deflected support cases with our centralized knowledge
                    base.
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row", lg: "row" },
                  justifyContent: "space-between",
                  width: { xs: "80%", sm: "80%", lg: "48%" },
                }}
              >
                <Stack
                  sx={{
                    border: ".5px solid #939597",
                    borderRadius: "5px",
                    padding: { xs: "20px", sm: "35px 30px", lg: "20px 30px" },
                    textAlign: "center",
                    width: { sm: "250px", lg: "275px" },
                    marginBottom: { xs: "20px", sm: "0", lg: "0" },
                  }}
                >
                  <Typography>
                    Subject-matter experts at software platform Unqork had{" "}
                    <a
                      style={{
                        color: "#3399ff",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      27% more time
                    </a>{" "}
                    to work on projects after using Teams.
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    border: ".5px solid #939597",
                    borderRadius: "5px",
                    padding: { xs: "20px", sm: "35px 30px", lg: "20px 30px" },
                    textAlign: "center",
                    width: { sm: "250px", lg: "275px" },
                  }}
                >
                  <Typography>
                    You can save time and money with Stack Overflow for Teams.
                  </Typography>
                  <Stack
                    sx={{
                      border: "1px solid #3399ff",
                      borderRadius: "5px",
                      color: "#3399ff",
                      padding: "10px 15px",
                      marginTop: "15px",
                    }}
                  >
                    Calculate your ROI
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "center",
                margin: "0 20px 15%",
              }}
            >
              <Stack
                sx={{
                  alignItems: "center",
                  justifyContent: "center ",
                  display: { xs: "none", sm: "none", lg: "flex" },
                }}
              >
                <Image
                  src={LeftImage}
                  alt=""
                  style={{ width: "350px", height: "90%" }}
                />
                <Typography>Microsoft Teams</Typography>
              </Stack>
              <Stack
                sx={{
                  textAlign: "center",
                  margin: { sm: "5% 25%", lg: "5% 25px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "35px",
                    fontWeight: "550",
                    marginBottom: "20px",
                  }}
                >
                  Integrates with and improves other tools
                </Typography>
                <Typography sx={{ color: "#cbcccd" }}>
                  All plans come with integrations for ChatOps tools{" "}
                  <a style={{ color: "#3399ff" }}>Slack</a> &{" "}
                  <a style={{ color: "#3399ff" }}>Microsoft Teams</a> in order
                  to cut down on pings, limit distractions and make the tools
                  even more powerful. Business and Enterprise customers get
                  access to Jira, GitHub & Okta integrations.
                </Typography>
                <Typography sx={{ color: "#cbcccd" }}>
                  Some of the premium features available with paid tiers
                </Typography>
              </Stack>
              <Stack
                sx={{
                  alignItems: "center",
                  justifyContent: "center ",
                  display: { xs: "none", sm: "none", lg: "flex" },
                }}
              >
                <Typography>Slack</Typography>
                <Image
                  src={RightImage}
                  alt=""
                  style={{ width: "350px", height: "90%" }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            color: "#000",
            flexDirection: { xs: "colum", sm: "column", lg: "row" },
            alignItems: "center",
            margin: {
              xs: "-5% 5% 50%",
              sm: "-5% 10% 15% 14%",
              lg: "-5% 10% 0",
            },
            height: "25vh",
            zIndex: "5",
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              width: { xs: "100%", sm: "100%", lg: "50%" },
              marginBottom: { xs: "10px", sm: "10px", lg: "0" },
            }}
          >
            {showKey && (
              <Stack
                sx={{
                  background: "#d8d9da",
                  width: { xs: "150px", sm: "250px", lg: "250px" },
                  padding: "35px",
                  borderRadius: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginRight: "2%",
                }}
              >
                <Stack sx={{ marginBottom: "10px" }}>
                  <svg
                    aria-hidden="true"
                    className="p-fc-purple d:fc-orange-400 d-block mx-auto mb12 svg-spot spotKey"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      opacity=".2"
                      d="m43.05 15.18-22.29 9.35a9.1 9.1 0 0 0-10.87-3 9 9 0 0 0-4.82 11.79 9 9 0 0 0 17.17-5.2l12.28-5.22 1.5 3.57c.2.47.7.68 1.18.48l1.65-.7c.46-.19.67-.7.48-1.16l-1.5-3.58 1.92-.8 2.08 4.94c.2.47.7.68 1.17.48l1.65-.69c.47-.2.68-.7.48-1.17l-2.06-4.9 1.45-.6c.47-.2.67-.7.48-1.18l-.81-1.92a.85.85 0 0 0-1.14-.5ZM15.36 34.86a5.33 5.33 0 1 1-4.14-9.84 5.33 5.33 0 0 1 4.14 9.84Z"
                      fill="#002699"
                    ></path>
                    <path
                      fill="#002699"
                      d="M6.82 30.54a5.5 5.5 0 1 0 10.14-4.26 5.5 5.5 0 0 0-10.14 4.26Zm3.72-5.36a3.5 3.5 0 1 1 2.7 6.45 3.5 3.5 0 0 1-2.7-6.45Zm8.74-3.38a10.2 10.2 0 0 0-11.26-2.25 10.06 10.06 0 0 0-5.46 13.14 10.06 10.06 0 0 0 13.2 5.3 10.18 10.18 0 0 0 6.04-10.7l9.66-3.99 1.17 2.78a2 2 0 0 0 2.61 1.07l1.85-.78a2 2 0 0 0 1.07-2.62l-1.2-2.86.63-.27L39.01 24a2 2 0 0 0 2.62 1.07l1.85-.78a2 2 0 0 0 1.07-2.61l-1.47-3.5c.9-.74 1.25-2.02.77-3.15l-.19-.46a2.78 2.78 0 0 0-3.63-1.48l-20.75 8.7Zm-1.12 1.74a1 1 0 0 0 1.23.38l21.41-8.99c.4-.16.85.02 1.02.42l.19.45a.73.73 0 0 1-.37.95 1 1 0 0 0-.75 1.37l1.81 4.33-1.84.77L39.08 19a1 1 0 0 0-.49-.52 1 1 0 0 0-.91-.07l-2.41 1.01a1 1 0 0 0-.55 1.28l.05.14 1.54 3.69-1.84.77-1.55-3.69a1 1 0 0 0-1.3-.53h-.01l-11.3 4.65a1 1 0 0 0-.6 1.16l.02.14A8.2 8.2 0 0 1 15 36.14a8.06 8.06 0 0 1-10.58-4.23A8.06 8.06 0 0 1 8.8 21.4a8.18 8.18 0 0 1 9.36 2.15Z"
                    ></path>
                  </svg>
                </Stack>
                <Typography>Robust read and write API</Typography>
              </Stack>
            )}
            {showLock && (
              <Stack
                sx={{
                  background: "#d8d9da",
                  width: { xs: "150px", sm: "250px", lg: "250px" },
                  padding: "35px",
                  borderRadius: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginRight: { xs: "0", sm: "2%", lg: "2%" },
                }}
              >
                <Stack sx={{ marginBottom: "10px" }}>
                  <svg
                    aria-hidden="true"
                    className="p-fc-purple d:fc-orange-400 d-block mx-auto mb12 svg-spot spotLock"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      opacity=".2"
                      d="M12 22a2 2 0 0 0-2 2v19a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V26a4 4 0 0 0-4-4H12Zm6 7a5 5 0 1 1 7.67 4.23l.05.35c.15.84.36 1.8.61 2.86A2.06 2.06 0 0 1 24.35 39h-2.7a2.06 2.06 0 0 1-1.98-2.56c.29-1.2.52-2.3.66-3.2l-.19-.14A5 5 0 0 1 18 29Z"
                      fill="#002699"
                    ></path>
                    <path
                      fill="#002699"
                      d="M23 24a5 5 0 0 0-2.86 9.1l.2.13c-.15.91-.38 2-.67 3.21A2.06 2.06 0 0 0 21.65 39h2.7c1.32 0 2.3-1.26 1.98-2.56a46.74 46.74 0 0 1-.6-2.86l-.06-.35A5 5 0 0 0 23 24Zm0 2a3 3 0 0 1 1.76 5.43l-.16.11a2 2 0 0 0-.91 2c.16.98.4 2.12.7 3.37.01.05-.02.09-.04.09h-2.7c-.02 0-.05-.04-.04-.09.3-1.25.54-2.4.7-3.36a2 2 0 0 0-.78-1.92l-.13-.09A3 3 0 0 1 23 26ZM12 12.44V18H9a3 3 0 0 0-3 3v21a3 3 0 0 0 3 3h28a3 3 0 0 0 3-3V21a3 3 0 0 0-3-3h-3v-5.56C34 6.2 29.36 1 23 1S12 6.19 12 12.44ZM23 3c5.14 0 9 4.18 9 9.44V18H14v-5.56C14 7.18 17.86 3 23 3ZM9 20h28a1 1 0 0 1 1 1v21a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V21a1 1 0 0 1 1-1Z"
                    ></path>
                  </svg>
                </Stack>
                <Typography>Single sign-on with AD or SAML</Typography>
              </Stack>
            )}
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              width: { xs: "100%", sm: "100%", lg: "50%" },
            }}
          >
            {showTeam && (
              <Stack
                sx={{
                  background: "#d8d9da",
                  width: { xs: "150px", sm: "250px", lg: "250px" },
                  padding: "35px",
                  borderRadius: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginRight: "2%",
                }}
              >
                <Stack sx={{ marginBottom: "10px" }}>
                  <svg
                    aria-hidden="true"
                    className="p-fc-purple d:fc-orange-400 d-block mx-auto mb12 svg-spot spotPeople"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M13.5 28a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM7 30a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v5h11v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H33v5a1 1 0 0 1-1 1H20a1 1 0 0 1-1-1v-5H8a1 1 0 0 1-1-1V30Zm25-6.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0ZM24.5 34a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
                      opacity=".2"
                      fill="#002699"
                    ></path>
                    <path
                      fill="#002699"
                      d="M16.4 26.08A6 6 0 1 0 7.53 26C5.64 26.06 4 27.52 4 29.45V40a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2h-4v-7a1 1 0 1 0-2 0v7H6v-9.55c0-.73.67-1.45 1.64-1.45H16a1 1 0 0 0 .4-1.92ZM12 18a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm16.47 14a6 6 0 1 0-8.94 0A3.6 3.6 0 0 0 16 35.5V46a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V35.5c0-1.94-1.64-3.42-3.53-3.5ZM20 28a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-.3 6h8.6c1 0 1.7.75 1.7 1.5V45h-2v-7a1 1 0 1 0-2 0v7h-4v-7a1 1 0 1 0-2 0v7h-2v-9.5c0-.75.7-1.5 1.7-1.5ZM42 22c0 1.54-.58 2.94-1.53 4A3.5 3.5 0 0 1 44 29.45V40a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h4v-7a1 1 0 1 1 2 0v7h2v-9.55A1.5 1.5 0 0 0 40.48 28H32a1 1 0 0 1-.4-1.92A6 6 0 1 1 42 22Zm-2 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
                    ></path>
                    <g opacity=".35">
                      <path
                        fill="#002699"
                        d="M17 10a1 1 0 011-1h12a1 1 0 110 2H18a1 1 0 01-1-1Zm1-5a1 1 0 100 2h12a1 1 0 100-2H18ZM14 1a1 1 0 00-1 1v12a1 1 0 001 1h5.09l4.2 4.2a1 1 0 001.46-.04l3.7-4.16H34a1 1 0 001-1V2a1 1 0 00-1-1H14Zm1 12V3h18v10h-5a1 1 0 00-.75.34l-3.3 3.7-3.74-3.75a1 1 0 00-.71-.29H15Z"
                      ></path>
                    </g>
                  </svg>
                </Stack>
                <Typography>
                  Your own customer success representative
                </Typography>
              </Stack>
            )}
            {showPhone && (
              <Stack
                sx={{
                  background: "#d8d9da",
                  width: { xs: "150px", sm: "250px", lg: "250px" },
                  padding: "35px",
                  borderRadius: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginRight: { xs: "0", sm: "2%", lg: "2%" },
                }}
              >
                <Stack sx={{ marginBottom: "10px" }}>
                  <svg
                    aria-hidden="true"
                    className="p-fc-purple d:fc-orange-400 d-block mx-auto mb12 svg-spot spotHeadset"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M33.8 7.06a19.9 19.9 0 0 0-8.42-2.4 19.57 19.57 0 0 0-8.57 1.62c-.2.14-.25.37-.12.6l2.25 3.97c.12.19.4.34.65.34a.7.7 0 0 0 .17-.03c.53-.12 3.52-.8 5.4-.72 1.9.09 4.89 1.07 5.32 1.22l.11.03c.23.03.52-.05.66-.28l2.61-3.74c.14-.22.12-.46-.07-.61ZM8 39.52c0 2.24 1.8 4.06 4 4.06 1.11 0 2.04-.93 2.04-2v-9.53c0-1.12-.93-2.05-2.03-2.05A4.04 4.04 0 0 0 8 34.06v5.46Zm32.03 4.06c2.2 0 4-1.82 4-4.06v-5.46c0-2.24-1.8-4.06-4-4.06-1.1 0-2.03.93-2.03 2.05v9.52c0 1.08.92 2 2.03 2ZM23 48h4a2 2 0 0 0 0-4h-4a2 2 0 0 0 0 4Z"
                      opacity=".2"
                      fill="#002699"
                    ></path>
                    <path
                      fill="#002699"
                      d="M13.66 5.54C8.04 8.6 4 14.24 4 21v12h1v-1.11A4.94 4.94 0 0 1 9.98 27 3 3 0 0 1 13 29.97v9.1A3 3 0 0 1 9.98 42a4.97 4.97 0 0 1-4.9-4H3.33C1.93 38 1 36.77 1 35.5c0-.8.37-1.59 1-2.06V21C2 9.34 12.57 1 23.5 1S45 9.34 45 21v11.44c.63.47 1 1.26 1 2.06 0 1.27-.94 2.5-2.33 2.5H42v.11a4.89 4.89 0 0 1-3.07 4.52A1 1 0 0 1 39 42a2.88 2.88 0 0 1-3 3h-8.17A3 3 0 0 1 25 47h-4a3 3 0 0 1 0-6h4a3 3 0 0 1 2.83 2H36c.46 0 .66-.16.78-.3.14-.2.22-.46.22-.7a3 3 0 0 1-3-2.92v-9.11A3 3 0 0 1 37.02 27 4.94 4.94 0 0 1 42 31.89V32h1V21c0-6.51-3.75-11.97-9.04-15.1a1 1 0 0 1-.03.05l-1.16 1.68c2.42 1.57 4.44 3.1 5.87 5.16C40.22 15.1 41 17.93 41 22a1 1 0 1 1-2 0c0-3.8-.72-6.2-2.01-8.07-1.2-1.74-2.96-3.1-5.36-4.66l-.71 1.04a1 1 0 0 1-1.17.37c-1.83-.68-3.7-.94-5.82-.94-2.1 0-4 .3-5.84.94a1 1 0 0 1-1.15-.38l-.98-1.41c-2.7 1.73-4.65 3.16-5.95 5.04C8.72 15.8 8 18.2 8 22a1 1 0 1 1-2 0c0-4.07.78-6.91 2.36-9.2 1.54-2.23 3.78-3.84 6.47-5.56l-1.15-1.67a1 1 0 0 1-.02-.03Zm1.82-.89 2.68 3.9a19.7 19.7 0 0 1 5.77-.81c2.03 0 3.91.22 5.77.8l2.49-3.59A20.53 20.53 0 0 0 23.5 3c-2.79 0-5.52.59-8.02 1.65ZM25 43h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2ZM7 31.89v5.22A2.94 2.94 0 0 0 9.98 40c.59 0 1.02-.48 1.02-.92v-9.11A1 1 0 0 0 9.98 29 2.94 2.94 0 0 0 7 31.89ZM5 35H3.33c-.05 0-.12.02-.2.1a.6.6 0 0 0-.13.4c0 .17.06.31.14.4.07.08.14.1.2.1H5v-1Zm35-3.11A2.94 2.94 0 0 0 37.02 29a1 1 0 0 0-1.02.97v9.1c0 .45.43.93 1.02.93A2.94 2.94 0 0 0 40 37.11V31.9ZM42 35h1.67c.05 0 .12-.02.2-.1a.6.6 0 0 0 .13-.4.6.6 0 0 0-.14-.4c-.07-.08-.14-.1-.2-.1H42v1Z"
                    ></path>
                  </svg>
                </Stack>
                <Typography>99.5% uptime SLA and priority support</Typography>
              </Stack>
            )}
          </Stack>
        </Stack>
        <Stack
          sx={{
            flexDirection: { xs: "column", sm: "column", lg: "row" },
            justifyContent: "space-around",
            margin: { xs: "40% 30px 20%", sm: "10% 30px", lg: "10% 30px" },
            alignItems: { xs: "center", sm: "center", lg: "normal" },
          }}
        >
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row", lg: "row" },
              marginBottom: { xs: "20px", sm: "5%", lg: "0" },
            }}
          >
            <Stack
              sx={{
                width: "260px",
                marginRight: { xs: "0", sm: "50px", lg: "50px" },
                marginBottom: { xs: "20px", sm: "0", lg: "0" },
              }}
            >
              <Ask
                textAsk="Stack Overflow for Teams has been a resource for our entire company. Not only for developers to solve problems, it’s also enabled our sales field to answer technical questions that help them close deals."
                titleAsk="Director of Product Management"
                textEndAsk="Microsoft"
                wAsk="100%"
              />
            </Stack>
            <Stack sx={{ width: "260px" }}>
              <Ask
                textAsk="Engineers should help solve the hardest questions, the unknowns, where being familiar with how the product was built is essential. But we don’t want to keep answering solved problems over and over again. That’s where Stack Overflow for Teams really helps."
                titleAsk="Director of Engineering"
                textEndAsk="Elastic Cloud"
                wAsk="75%"
              />
            </Stack>
          </Stack>
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row", lg: "row" },
            }}
          >
            <Stack
              sx={{
                width: "260px",
                marginRight: { xs: "0", sm: "50px", lg: "50px" },
                marginBottom: { xs: "20px", sm: "0", lg: "0" },
              }}
            >
              <Ask
                textAsk="As we started to use [Stack Overflow for Teams] and saw how nice it was to have a repository of information, we started to see it spread to other teams. Our customer support team started using it, our people success team started using it, next thing we knew, we had [Slack] integrations all over the place."
                titleAsk="Engineering"
                textEndAsk="Expensify"
                wAsk="40%"
              />
            </Stack>
            <Stack sx={{ width: "260px" }}>
              <Ask
                textAsk="What we love about Stack Overflow for Teams is that it’s a very dynamic tool…there’s just so many ways to use this as a liaison between different teams and different knowledge bases."
                titleAsk="Software Engineer"
                textEndAsk="Box"
                wAsk="60%"
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              width: { xs: "80%", sm: "100%", lg: "40%" },
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "5%",
            }}
          >
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
            <Stack
              sx={{
                background: "#cbcccd",
                width: "50%",
                height: "1px",
                margin: "5% 0",
              }}
            ></Stack>
            <Typography sx={{ color: "#000", fontSize: "25px" }}>
              Additional products that reach and engage developers &
              technologists…
            </Typography>
          </Stack>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "5%",
            }}
          >
            <Stack
              sx={{
                flexDirection: { xs: "column", sm: "row", lg: "row" },
                justifyContent: "space-around",
                margin: { sx: "0 0 3%", sm: "0 0 3%", lg: "0 10% 3%" },
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  border: ".1px solid #a4a6a8",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "70%", sm: "46%", lg: "46%" },
                  padding: "30px 20px",
                  textAlign: "center",
                  borderRadius: "5px",
                  margin: { xs: "20px 0 20px", sm: "0", lg: "0" },
                }}
              >
                <svg
                  aria-hidden="true"
                  className="native mx-auto mb24 svg-icon iconLogoAdvertisingAlt"
                  width="158"
                  height="30"
                  viewBox="0 0 158 30"
                >
                  <path d="M21 27v-8h3v11H0V19h3v8h18Z" fill="#BCBBBB"></path>
                  <path
                    d="m5.4 19.1 13.56 1.96.17-2.38-13.26-2.55-.47 2.97Zm1.8-6.8 12 5.6 1.1-2.4-12-5.6-1.1 2.4Zm3.4-5.9 10.2 8.5 1.7-2-10.2-8.5-1.7 2ZM17.1.2 15 1.8l7.9 10.6 2.1-1.6L17.1.2ZM5 25h14v-3H5v3Z"
                    fill="#F48024"
                  ></path>
                  <path fill="#D6D9DC" d="M38 11h1v13h-1z"></path>
                  <path
                    d="M57.9 11.31a.37.37 0 0 0-.35-.27h-1.47a.37.37 0 0 0-.35.27l-4.47 12.14a.38.38 0 0 0 .04.35c.07.12.19.15.3.15h1.99c.15 0 .3-.11.35-.27l.74-2.17h4.23l.74 2.17c.04.16.2.27.35.27h1.98c.12 0 .23-.07.31-.15a.38.38 0 0 0 .04-.35L57.9 11.31Zm.23 7.87H55.5l1.36-3.8 1.28 3.8Zm13.83-5.54c-.2-.5-.5-.93-.9-1.36a4.68 4.68 0 0 0-3.41-1.24h-4.28c-.23 0-.38.15-.38.39v12.14c0 .23.15.38.38.38h4.28c1.44 0 2.6-.42 3.42-1.24.39-.38.7-.85.9-1.4.19-.5.3-1 .38-1.54.04-.5.08-1.09.08-1.75v-1.24a7.27 7.27 0 0 0-.47-3.14Zm-2.17 3.8c0 1-.04 1.82-.12 2.33-.08.46-.2.81-.43 1.08-.43.47-1 .7-1.79.7H65.6v-8.07h1.86c.78 0 1.36.24 1.8.7.15.16.26.39.34.66.08.31.16.62.16.97.04.39.04.93.04 1.63Zm13.14-6.4H81c-.15 0-.3.12-.39.27l-2.44 7.68-2.41-7.68c-.04-.15-.2-.27-.4-.27h-1.9c-.11 0-.23.08-.3.15-.09.08-.09.24-.05.35l4 12.14c.04.16.2.27.4.27h1.43c.16 0 .31-.11.35-.27l4.04-12.14c.04-.11 0-.23-.04-.35-.11-.07-.23-.15-.35-.15Zm10.25 0h-7.77c-.23 0-.39.15-.39.39v12.14c0 .23.16.38.39.38h7.77c.23 0 .39-.15.39-.38V21.9a.37.37 0 0 0-.39-.39h-5.56v-2.87h4.67c.23 0 .39-.15.39-.39v-1.63c0-.23-.16-.38-.4-.38h-4.66v-2.76h5.56c.23 0 .39-.15.39-.39v-1.66a.4.4 0 0 0-.39-.4Zm8.84 7.41a3.56 3.56 0 0 0 2.25-3.45 3.66 3.66 0 0 0-1.98-3.41 4.4 4.4 0 0 0-2.18-.51h-4.74c-.23 0-.39.15-.39.39V23.6c0 .23.16.38.4.38h1.86c.23 0 .39-.15.39-.38v-4.74h1.67l2.44 4.9c.08.1.2.22.35.22h2.14c.12 0 .27-.07.35-.19a.35.35 0 0 0 0-.39l-2.56-4.96Zm-.35-3.46c0 .47-.16.82-.43 1.1-.31.26-.7.42-1.24.42h-2.34v-3.03H100c.54 0 .93.12 1.24.43.27.23.43.62.43 1.08Zm12.16-3.95h-8.54c-.24 0-.4.15-.4.39v1.66c0 .24.16.4.4.4h2.95v10.08c0 .23.15.38.39.38h1.82c.24 0 .4-.15.4-.38V13.48h2.95c.23 0 .38-.15.38-.39v-1.66c.04-.2-.15-.4-.35-.4Zm4.47 0h-1.87c-.23 0-.39.15-.39.39v12.14c0 .23.16.38.39.38h1.86c.24 0 .4-.15.4-.38V11.43a.4.4 0 0 0-.4-.4Zm10.3 6.28a2.96 2.96 0 0 0-1.01-.62 6 6 0 0 0-1.44-.35l-1.4-.2a2.36 2.36 0 0 1-.7-.19c-.2-.07-.39-.19-.46-.27-.24-.2-.31-.46-.31-.85 0-.31.07-.54.19-.78.16-.23.35-.38.58-.5.28-.12.63-.2 1.01-.2.35 0 .66.04.94.08.27.04.5.16.77.28.24.11.47.27.7.5.16.15.4.15.55 0l1.2-1.16c.08-.08.12-.2.12-.28a.36.36 0 0 0-.12-.27 5.42 5.42 0 0 0-1.79-1.12 6.54 6.54 0 0 0-2.25-.35c-.9 0-1.67.15-2.33.46a3.63 3.63 0 0 0-2.1 3.46c0 1.08.35 1.97 1.01 2.6.62.58 1.44.93 2.53 1.08l1.43.2c.31.03.59.11.74.15.16.04.27.12.4.27.22.2.34.54.34.97 0 .47-.16.82-.5 1.05-.4.27-.94.43-1.64.43a4.56 4.56 0 0 1-2.02-.47 3.79 3.79 0 0 1-.81-.62.35.35 0 0 0-.28-.12.36.36 0 0 0-.27.12l-1.24 1.2a.35.35 0 0 0-.12.27c0 .12.04.2.12.27a5.52 5.52 0 0 0 2.02 1.32c.74.27 1.6.4 2.56.4a5.7 5.7 0 0 0 3.39-1.06 3.61 3.61 0 0 0 1.35-2.9 3.72 3.72 0 0 0-1.16-2.8Zm5.24-6.28h-1.86c-.23 0-.39.15-.39.39v12.14c0 .23.16.38.39.38h1.86c.24 0 .4-.15.4-.38V11.43a.4.4 0 0 0-.4-.4Zm11.69 0h-1.82c-.24 0-.4.15-.4.39v7.25l-4.89-7.45c-.07-.11-.2-.2-.3-.2h-1.72c-.23 0-.39.16-.39.4v12.14c0 .23.16.38.4.38h1.86c.23 0 .39-.15.39-.38V16.3l4.9 7.45c.07.12.19.2.3.2h1.71c.24 0 .4-.16.4-.4V11.44c-.05-.2-.24-.4-.44-.4Zm11.6 5.58h-4.43c-.23 0-.39.16-.39.4v1.54c0 .24.16.4.39.4h2.21v.3c0 .7-.19 1.24-.5 1.67-.43.5-.97.74-1.67.74a2.1 2.1 0 0 1-1.52-.59 1.37 1.37 0 0 1-.3-.46c-.09-.16-.13-.35-.2-.62l-.12-.97c0-.35-.04-.85-.04-1.51 0-1.17.04-2.02.16-2.49.07-.42.23-.77.5-1.04.2-.2.4-.35.66-.47.28-.12.55-.15.86-.15.39 0 .74.07 1.05.23.3.15.54.35.74.62.19.27.34.62.42 1 .04.2.2.32.4.32h1.86c.11 0 .23-.04.3-.16.09-.07.12-.2.09-.3a4.58 4.58 0 0 0-.82-2.06 4.57 4.57 0 0 0-4-2.02 4.72 4.72 0 0 0-4.2 2.4c-.16.35-.31.74-.39 1.13-.08.39-.11.81-.15 1.24-.04.43-.04 1-.04 1.79 0 .96.04 1.7.08 2.24.03.55.15 1.05.34 1.56.2.5.51.93.9 1.4a5.34 5.34 0 0 0 2.18 1.27c.38.12.85.16 1.28.16a4.7 4.7 0 0 0 3.61-1.52c.43-.46.74-1 .93-1.59.2-.58.28-1.28.28-2.09v-1.86c-.08-.35-.28-.5-.47-.5Z"
                    fill="var(--black-800)"
                  ></path>
                </svg>
                <Typography sx={{ color: "#707375", marginTop: "20px" }}>
                  Reach the world’s largest audience of developers and
                  technologists
                </Typography>
              </Stack>
              <Stack
                sx={{
                  border: ".1px solid #a4a6a8",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "70%", sm: "46%", lg: "46%" },
                  padding: "30px 20px",
                  textAlign: "center",
                  borderRadius: "5px",
                  margin: { xs: "20px 0 40px", sm: "0", lg: "0" },
                }}
              >
                <svg
                  aria-hidden="true"
                  className="native mx-auto mb24 svg-icon iconLogoCollectives"
                  width="154"
                  height="30"
                  viewBox="0 0 154 30"
                >
                  <path d="M21 27v-8h3v11H0V19h3v8h18Z" fill="#BCBBBB"></path>
                  <path
                    d="m5.4 19.1 13.56 1.96.17-2.38-13.26-2.55-.47 2.97Zm1.8-6.8 12 5.6 1.1-2.4-12-5.6-1.1 2.4Zm3.4-5.9 10.2 8.5 1.7-2-10.2-8.5-1.7 2ZM17.1.2 15 1.8l7.9 10.6 2.1-1.6L17.1.2ZM5 25h14v-3H5v3Z"
                    fill="#F48024"
                  ></path>
                  <path fill="#D6D9DC" d="M38 11h1v13h-1z"></path>
                  <path
                    d="M59.58 19.47h-1.75a.36.36 0 0 0-.36.31c-.08.35-.22.7-.4.96a2 2 0 0 1-.66.61 1.8 1.8 0 0 1-.92.23 1.88 1.88 0 0 1-1.42-.57c-.1-.1-.17-.23-.23-.34a1.83 1.83 0 0 0-.06-.12c-.06-.11-.1-.25-.13-.41l-.06-.2-.1-.96-.02-.52-.02-.98c0-.65 0-1.15.03-1.5 0-.34.04-.65.11-.95a2 2 0 0 1 .19-.62 1.61 1.61 0 0 1 .9-.88c.26-.11.52-.15.81-.15.51 0 .95.15 1.28.46.33.3.55.73.7 1.3.03.2.18.3.36.3h1.79c.11 0 .22-.03.3-.14a.3.3 0 0 0 .07-.31 5 5 0 0 0-1.5-2.95A4.35 4.35 0 0 0 55.57 11a4.7 4.7 0 0 0-1.8.35 3.5 3.5 0 0 0-1.56 1 4.58 4.58 0 0 0-1.06 2.1c-.08.38-.11.8-.15 1.23v1.76c0 .96.04 1.69.07 2.23a4.98 4.98 0 0 0 1.17 2.91 5.05 5.05 0 0 0 2.05 1.27c.36.11.8.15 1.2.15.55 0 1.1-.08 1.57-.27a4.13 4.13 0 0 0 2.34-2.03c.26-.5.44-1.07.55-1.73 0-.11 0-.23-.07-.3-.11-.16-.22-.2-.3-.2Zm10.59-5.71c-.18-.5-.44-.96-.85-1.38a4.5 4.5 0 0 0-3.3-1.38 4.37 4.37 0 0 0-3.97 2.38c-.15.34-.3.73-.37 1.11-.07.38-.1.8-.14 1.23-.04.42-.04 1.03-.04 1.76 0 .96.04 1.69.07 2.22a4.97 4.97 0 0 0 1.18 2.91A4.37 4.37 0 0 0 66.02 24a4.4 4.4 0 0 0 4.15-2.8c.18-.46.26-1 .3-1.53.03-.5.03-1.27.03-2.23s0-1.68-.04-2.22c-.03-.5-.14-1-.3-1.46Zm-2.13 3.72c0 .77 0 1.38-.04 1.84-.03.42-.07.77-.18 1-.08.23-.19.42-.37.61a1.8 1.8 0 0 1-1.43.62 1.9 1.9 0 0 1-1.43-.58c-.15-.15-.26-.3-.3-.46a1.91 1.91 0 0 1-.15-.57l-.1-.96-.02-.58a23.74 23.74 0 0 1 .09-3.37c.07-.43.22-.77.44-1.04.15-.2.37-.34.62-.46.26-.11.55-.15.81-.15.3 0 .55.07.81.15.26.12.48.27.62.46.22.27.37.58.45 1 .14.5.18 1.34.18 2.5Zm6.44 4.06h5.15c.22 0 .37.2.37.4v1.67c0 .23-.15.39-.37.39h-7.26c-.22 0-.37-.16-.37-.39V11.39c0-.23.15-.39.37-.39h1.75c.22 0 .36.16.36.39v10.15Zm14.15 0h-5.15V11.4c0-.23-.14-.39-.36-.39h-1.75c-.22 0-.37.16-.37.39v12.22c0 .23.15.39.37.39h7.26c.22 0 .37-.16.37-.39v-1.68c0-.2-.18-.39-.37-.39ZM91.36 11h7.28c.18 0 .36.16.36.39v1.64c0 .23-.15.39-.36.39h-5.2v2.81h4.36c.22 0 .36.16.36.4v1.63c0 .24-.14.4-.36.4h-4.36v2.88h5.2c.21 0 .36.16.36.4v1.67c0 .23-.15.39-.36.39h-7.28c-.21 0-.36-.16-.36-.39V11.39c0-.23.15-.39.36-.39Zm17.22 8.41h-1.76a.36.36 0 0 0-.36.3c-.08.35-.22.7-.4.96-.2.27-.41.46-.67.62-.25.15-.58.22-.92.22a1.9 1.9 0 0 1-1.43-.57c-.1-.1-.17-.23-.22-.34a2.26 2.26 0 0 1-.2-.53l-.05-.2c-.04-.27-.08-.61-.11-.96 0-.14 0-.31-.02-.51l-.02-.98c0-.65 0-1.14.04-1.49a4.13 4.13 0 0 1 .3-1.57c.06-.15.17-.3.28-.42.19-.19.37-.34.63-.42.25-.11.51-.15.8-.15.52 0 .96.15 1.29.46.33.3.55.73.7 1.3.03.2.18.3.36.3h1.8c.1 0 .22-.03.3-.15.07-.07.1-.19.07-.3a4.98 4.98 0 0 0-1.5-2.95 4.39 4.39 0 0 0-2.94-1.03 4.46 4.46 0 0 0-4 2.37 5.6 5.6 0 0 0-.51 2.33c-.04.42-.04 1.04-.04 1.76 0 .96.04 1.68.07 2.22.04.53.15 1.03.33 1.53.19.5.48.92.85 1.38a5.06 5.06 0 0 0 2.05 1.26c.37.11.8.15 1.21.15.55 0 1.1-.08 1.58-.27a4.1 4.1 0 0 0 2.35-2.03c.25-.5.44-1.06.55-1.71 0-.12 0-.23-.08-.31-.1-.23-.22-.27-.33-.27Zm1.8-8.41h8.28c.19 0 .37.16.34.39v1.68c0 .23-.16.39-.38.39h-2.86V23.6c0 .23-.15.39-.38.39h-1.77c-.22 0-.37-.16-.37-.39V13.46h-2.86c-.23 0-.38-.16-.38-.4V11.4c0-.23.15-.39.38-.39Zm12.25 0h-1.76c-.22 0-.37.16-.37.39v12.22c0 .23.15.39.37.39h1.76c.22 0 .37-.16.37-.39V11.39c0-.23-.15-.39-.37-.39Zm9.58 0h1.9c.1 0 .22.04.34.16.03.11.07.23.03.35l-3.93 12.22a.37.37 0 0 1-.34.27h-1.4c-.2 0-.35-.12-.38-.27l-3.9-12.22c-.04-.12-.04-.28.03-.35.08-.08.2-.16.3-.16h1.86c.2 0 .34.12.38.27l2.35 7.73 2.38-7.73c.08-.15.23-.27.38-.27Zm10.93 0h-7.28c-.22 0-.36.16-.36.39v12.22c0 .23.15.39.36.39h7.28c.22 0 .36-.16.36-.39v-1.68c0-.23-.15-.39-.36-.39h-5.2v-2.89h4.36c.22 0 .36-.15.36-.39v-1.64c0-.23-.14-.39-.36-.39h-4.36v-2.81h5.2c.22 0 .36-.16.36-.39v-1.64c0-.23-.15-.39-.36-.39Zm8.29 5.65c.37.15.7.35.96.62a3.8 3.8 0 0 1 1.11 2.78 3.6 3.6 0 0 1-1.3 2.9 5.22 5.22 0 0 1-3.22 1.04 6.8 6.8 0 0 1-2.44-.38c-.7-.27-1.34-.7-1.93-1.31a.36.36 0 0 1-.11-.27c0-.12.04-.2.11-.27l1.19-1.2a.33.33 0 0 1 .26-.12c.1 0 .18.04.25.12.26.27.52.46.78.62a4.28 4.28 0 0 0 1.93.46 2.6 2.6 0 0 0 1.55-.43c.34-.23.49-.58.49-1.04 0-.43-.12-.77-.34-.97a.63.63 0 0 0-.37-.27l-.07-.02c-.16-.04-.38-.1-.63-.13l-1.37-.2a4.16 4.16 0 0 1-2.41-1.08 3.52 3.52 0 0 1-.96-2.6 4 4 0 0 1 .52-2.04c.33-.58.85-1.09 1.48-1.4.63-.3 1.37-.46 2.22-.46a6 6 0 0 1 2.15.35c.59.23 1.18.62 1.7 1.12.08.08.11.15.11.27 0 .08-.03.2-.1.27l-1.16 1.16a.35.35 0 0 1-.52 0 2.52 2.52 0 0 0-.78-.55 2.1 2.1 0 0 0-.62-.22 5.88 5.88 0 0 0-.9-.08c-.36 0-.7.08-.95.2-.23.11-.41.27-.56.5a1.7 1.7 0 0 0-.19.77c0 .39.08.66.3.85.07.08.26.2.45.27.22.12.44.16.66.2l1.34.2c.55.07 1 .18 1.37.34Z"
                    fill="var(--black-800)"
                  ></path>
                </svg>
                <Typography sx={{ color: "#707375", marginTop: "20px" }}>
                  Connecting communities with the specific technologies they use
                  the most
                </Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{
                border: ".1px solid #a4a6a8",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "70%", sm: "50%", lg: "35%" },
                padding: "30px 20px",
                textAlign: "center",
                borderRadius: "5px",
                marginBottom: "5%",
              }}
            >
              <svg
                aria-hidden="true"
                className="native mx-auto mb24 svg-icon iconLogoTalentAlt"
                width="115"
                height="30"
                viewBox="0 0 115 30"
              >
                <path d="M21 27v-8h3v11H0V19h3v8h18Z" fill="#BCBBBB"></path>
                <path
                  d="m5.4 19.1 13.56 1.96.17-2.38-13.26-2.55-.47 2.97Zm1.8-6.8 12 5.6 1.1-2.4-12-5.6-1.1 2.4Zm3.4-5.9 10.2 8.5 1.7-2-10.2-8.5-1.7 2ZM17.1.2 15 1.8l7.9 10.6 2.1-1.6L17.1.2ZM5 25h14v-3H5v3Z"
                  fill="#F48024"
                ></path>
                <path fill="#D6D9DC" d="M38 11h1v13h-1z"></path>
                <path
                  d="M60.54 13.09v-1.66c0-.27-.2-.47-.48-.47h-8.58c-.28 0-.48.2-.48.47v1.66c0 .27.2.47.48.47h2.87v9.93c0 .27.2.47.48.47h1.84c.28 0 .48-.2.48-.47v-9.93h2.87c.32 0 .52-.2.52-.47Zm5.99-1.78a.46.46 0 0 0-.44-.31H64.6c-.2 0-.36.12-.44.31L59.7 23.37c-.04.16-.04.31.04.43s.24.2.4.2h1.96c.2 0 .4-.12.43-.32l.72-2.08h4.15l.72 2.08c.08.2.24.32.44.32h1.96a.5.5 0 0 0 .4-.2.42.42 0 0 0 .04-.43l-4.43-12.06Zm-2.4 7.76 1.24-3.42 1.2 3.42h-2.44Zm16.44 2.33h-5.42v-9.93c0-.28-.2-.47-.48-.47h-1.84c-.28 0-.48.2-.48.47v12.06c0 .27.2.47.48.47h7.74c.28 0 .48-.2.48-.47v-1.66c0-.23-.2-.47-.48-.47ZM90.34 11h-7.82c-.28 0-.48.2-.48.47v12.06c0 .27.2.47.48.47h7.82c.28 0 .48-.2.48-.47v-1.66c0-.27-.2-.47-.48-.47h-5.47v-2.68h4.6c.27 0 .47-.2.47-.47v-1.62c0-.27-.2-.47-.48-.47h-4.58v-2.6h5.46c.28 0 .48-.2.48-.47v-1.66c0-.24-.2-.43-.48-.43Zm12.25 0h-1.83c-.28 0-.48.2-.48.47v6.9l-4.8-7.18a.5.5 0 0 0-.4-.2h-1.7c-.29 0-.49.2-.49.48v12.06c0 .27.2.47.48.47h1.84c.28 0 .48-.2.48-.47v-6.9l4.79 7.17c.08.12.24.2.4.2h1.71c.28 0 .48-.2.48-.47V11.47c0-.28-.2-.47-.48-.47Zm11.71 0h-8.58c-.28 0-.48.2-.48.47v1.66c0 .27.2.47.48.47h2.87v9.93c0 .27.2.47.48.47h1.84c.28 0 .48-.2.48-.47V13.6h2.87c.28 0 .48-.2.48-.47v-1.66c.04-.28-.16-.47-.44-.47Z"
                  fill="var(--black-800)"
                ></path>
              </svg>
              <Typography sx={{ color: "#707375", marginTop: "20px" }}>
                Build your employer brand
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: "200px",
                background: "#ff8000",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 0",
                borderRadius: "5px",
                marginBottom: "13px",
                color: "#fff",
                cursor: "pointer",
                marginTop: { xs: "20px", sm: "0", lg: "0" },
              }}
            >
              About the company
            </Stack>
            <Typography sx={{ color: "#333", marginBottom: "40px" }}>
              Want to work here?{" "}
              <a style={{ color: "#3399ff" }}>Current job openings</a>
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            background: "#004d99",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "8% 0",
            textAlign: "center",
            marginBottom: "5%",
            borderRadius: "5px",
          }}
        >
          <Stack
            sx={{
              width: "25%",
              display: { xs: "none", sm: "none", lg: "flex" },
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                height: "20vh",
              }}
            >
              {showExchange1 && (
                <Stack
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    padding: "20px",
                    margin: "0 15%",
                  }}
                >
                  <Image
                    src={Exchange1}
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
                </Stack>
              )}
              {showExchange2 && (
                <Stack
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    height: "60px",
                    width: "60px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={Exchange2}
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                </Stack>
              )}
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                margin: "5%",
                height: "20vh",
              }}
            >
              {showExchange3 && (
                <Stack
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    height: "60px",
                    width: "60px",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 20%",
                  }}
                >
                  <Image
                    src={Exchange3}
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                </Stack>
              )}
              {showExchange4 && (
                <Stack
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    height: "60px",
                    width: "60px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={Exchange4}
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                </Stack>
              )}
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                height: "20vh",
              }}
            >
              {showExchange5 && (
                <Stack
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    padding: "20px",
                    margin: "0 15%",
                  }}
                >
                  <Image
                    src={Exchange5}
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
                </Stack>
              )}
              {showExchange6 && (
                <Stack
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    height: "60px",
                    width: "60px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={Exchange6}
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                </Stack>
              )}
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: { xs: "60%", sm: "70%", lg: "50%" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              aria-hidden="true"
              className="svg-icon iconLogoSE"
              width="147"
              height="35"
              viewBox="0 0 147 35"
            >
              <path
                d="m43.46 30.88-2.86-4.85-1.5 1.76v3.09h-2.05V16.12h2.05v9.1l3.96-4.85h2.49L42 24.5l4 6.38h-2.53ZM32.39 31c-2.3 0-4.54-1.45-4.54-5.39 0-3.93 2.25-5.36 4.54-5.36 1.4 0 2.39.41 3.35 1.47l-1.4 1.4c-.65-.72-1.15-.99-1.95-.99-.79 0-1.45.33-1.9.94-.43.57-.6 1.32-.6 2.54 0 1.23.17 2 .6 2.57.45.6 1.11.93 1.9.93.8 0 1.3-.26 1.95-.99l1.4 1.39A4.14 4.14 0 0 1 32.4 31Zm-8.45-4.77h-2.39c-1.2 0-1.83.56-1.83 1.52 0 .95.59 1.49 1.87 1.49.79 0 1.37-.06 1.91-.6.3-.31.44-.81.44-1.56v-.85Zm.04 4.65v-.96c-.74.77-1.44 1.08-2.7 1.08-1.27 0-2.12-.31-2.74-.95a3.28 3.28 0 0 1-.8-2.26c0-1.76 1.18-3.03 3.51-3.03h2.7v-.74c0-1.33-.65-1.97-2.24-1.97-1.12 0-1.66.27-2.23 1.02l-1.34-1.31c.96-1.16 1.97-1.51 3.65-1.51 2.8 0 4.2 1.22 4.2 3.6v7.03h-2Zm-9 0c-1.92 0-2.8-1.41-2.8-2.93v-5.78H11v-1.61h1.17v-3.2h2.05v3.2h1.97v1.61h-1.97v5.68c0 .77.36 1.22 1.12 1.22h.85v1.8h-1.23ZM5.05 31c-2.15 0-3.7-.52-5.06-1.95l1.45-1.47A4.64 4.64 0 0 0 5.1 29c1.87 0 2.96-.83 2.96-2.26 0-.64-.18-1.18-.56-1.53-.37-.35-.73-.5-1.57-.62l-1.69-.25a4.83 4.83 0 0 1-2.71-1.18 3.73 3.73 0 0 1-1.05-2.82C.48 17.76 2.3 16 5.27 16c1.88 0 3.21.5 4.44 1.68l-1.4 1.4a4.12 4.12 0 0 0-3.1-1.13c-1.7 0-2.62 1-2.62 2.3 0 .54.16 1.01.54 1.36.37.34.95.58 1.61.69l1.63.25c1.33.2 2.07.54 2.67 1.1.79.7 1.17 1.76 1.17 3.02 0 2.71-2.15 4.33-5.15 4.33Z"
                fill="#fff"
              ></path>
              <path
                d="M129.55 23.38a1.88 1.88 0 0 0-1.8-1.12c-.92 0-1.52.48-1.81 1.12-.17.39-.23.68-.25 1.15h4.1a2.94 2.94 0 0 0-.24-1.15Zm-3.86 3c0 1.37.85 2.39 2.37 2.39a3 3 0 0 0 2.44-1.02l1.65 1.6a5.16 5.16 0 0 1-4.12 1.69c-2.55 0-5-1.16-5-5.52 0-3.5 1.91-5.49 4.71-5.49 3.02 0 4.72 2.2 4.72 5.14v1.2h-6.77Zm-9.17-3.93c-1.6 0-1.76 1.36-1.76 2.79 0 1.42.16 2.8 1.76 2.8s1.79-1.38 1.79-2.8c0-1.43-.19-2.8-1.79-2.8Zm-.27 12.53c-1.66 0-2.8-.33-3.92-1.4l1.68-1.7c.6.58 1.2.83 2.12.83 1.62 0 2.18-1.14 2.18-2.23v-1.1a3.18 3.18 0 0 1-2.58 1.08 3.6 3.6 0 0 1-2.57-.95c-1.02-1.01-1.1-2.4-1.1-4.27 0-1.88.08-3.25 1.1-4.26.6-.6 1.53-.95 2.6-.95 1.13 0 1.88.31 2.63 1.14v-1.01h2.62v10.36c0 2.58-1.85 4.46-4.76 4.46Zm-8.97-4.07v-6.5c0-1.47-.93-1.96-1.78-1.96s-1.8.5-1.8 1.96v6.5H101V20.16h2.63v.99c.7-.75 1.7-1.12 2.7-1.12a3.5 3.5 0 0 1 2.55.95c.87.87 1.1 1.88 1.1 3.06v6.87h-2.7Zm-11.14-4.54H94c-.98 0-1.52.45-1.52 1.22 0 .74.5 1.24 1.56 1.24.75 0 1.22-.06 1.7-.52.3-.27.4-.7.4-1.36v-.58Zm.06 4.54v-.93c-.73.73-1.41 1.04-2.66 1.04-1.22 0-2.12-.31-2.76-.95-.58-.6-.9-1.47-.9-2.42 0-1.71 1.2-3.12 3.7-3.12h2.56V24c0-1.18-.58-1.7-2.02-1.7-1.04 0-1.51.25-2.07.9l-1.73-1.68c1.06-1.16 2.1-1.49 3.9-1.49 3.04 0 4.62 1.28 4.62 3.8v7.08H96.2Zm-11 0v-6.56c0-1.43-.91-1.9-1.77-1.9-.85 0-1.74.5-1.74 1.9v6.56h-2.7v-14.7h2.7v4.94a3.58 3.58 0 0 1 2.6-1.12c2.36 0 3.6 1.65 3.6 3.93v6.95h-2.7Zm-11.02.13c-2.16 0-4.84-1.16-4.84-5.52 0-4.35 2.68-5.49 4.84-5.49 1.5 0 2.61.46 3.57 1.45l-1.83 1.81c-.56-.6-1.04-.84-1.74-.84-.65 0-1.15.23-1.54.7-.41.52-.6 1.24-.6 2.37 0 1.14.19 1.88.6 2.4.4.47.9.7 1.54.7.7 0 1.18-.25 1.74-.85l1.83 1.8a4.64 4.64 0 0 1-3.57 1.47Zm-8.6-.13L63.6 27.7l-1.98 3.22h-3.24l3.74-5.49-3.59-5.26h3.24l1.83 3.07 1.84-3.07h3.24l-3.59 5.26 3.74 5.5h-3.24Zm-17.58 0v-14.7h9.74v2.56h-6.85v3.45h5.83v2.56H50.9v3.57h6.85v2.56H48Z"
                fill="#fff"
              ></path>
              <path
                d="M147 3h-15v-.5c0-1.3 1.21-2.5 2.5-2.5h10c1.3 0 2.5 1.2 2.5 2.5V3Z"
                fill="#fff"
              ></path>
              <path
                d="M132 12v.5c0 1.3 1.21 2.5 2.5 2.5h6.5v3l3-3h.5c1.3 0 2.5-1.2 2.5-2.5V12h-15Z"
                fill="#fff"
              ></path>
              <path d="M132 8v3h15V8h-15Z" fill="#fff"></path>
              <path d="M132 4v3h15V4h-15Z" fill="#fff"></path>
            </svg>
            <Stack
              sx={{
                background: "#3399ff",
                width: "25%",
                height: "1px",
                margin: "5% 0",
              }}
            ></Stack>
            <Typography
              sx={{
                fontSize: { xs: "25px", sm: "35px", lg: '"35px"' },
                marginBottom: "5%",
              }}
            >
              Explore technical topics and other disciplines across 170+ Q&A
              communities
            </Typography>
            <Typography sx={{ fontSize: "18px", marginBottom: "5%" }}>
              From <a style={{ color: "#3399ff" }}>Server Fault</a> to{" "}
              <a style={{ color: "#3399ff" }}>Super User</a>, much of the Stack
              Exchange network continues our mission to empower the world to
              develop technology through collective knowledge. Other sites on
              the Stack Exchange network further encourage knowledge sharing
              across topics such as cooking and medicine.
            </Typography>
            <Stack
              sx={{
                width: "200px",
                background: "#ffcc00",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 0",
                borderRadius: "5px",
                color: "#000",
                cursor: "pointer",
              }}
            >
              Explore the network
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: "25%",
              paddingLeft: "3%",
              display: { xs: "none", sm: "none", lg: "flex" },
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                height: "20vh",
              }}
            >
              {showExchange1 && (
                <Stack
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    padding: "20px",
                    margin: "0 15% 2% 10%",
                  }}
                >
                  <Image
                    src={Exchange7}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                </Stack>
              )}
              {showExchange2 && (
                <Stack
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    height: "60px",
                    width: "60px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={Exchange8}
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                </Stack>
              )}
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                margin: "10% 5%",
                height: "20vh",
              }}
            >
              {showExchange3 && (
                <Stack
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    height: "60px",
                    width: "60px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "20%",
                  }}
                >
                  <Image
                    src={Exchange9}
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                </Stack>
              )}
              {showExchange4 && (
                <Stack
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    padding: "20px",
                  }}
                >
                  <Image
                    src={Exchange10}
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
                </Stack>
              )}
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                height: "20vh",
              }}
            >
              {showExchange5 && (
                <Stack
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    height: "60px",
                    width: "60px",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 15%",
                  }}
                >
                  <Image
                    src={Exchange11}
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                </Stack>
              )}
              {showExchange6 && (
                <Stack
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    padding: "20px",
                  }}
                >
                  <Image
                    src={Exchange12}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                </Stack>
              )}
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            flexDirection: { xs: "column", sm: "row", lg: "row" },
            justifyContent: "space-around",
            alignItems: "center",
            margin: { xs: "0 10% 2%", sm: "0 18% 2%", lg: "0 18% 2%" },
          }}
        >
          <Stack>
            <svg
              aria-hidden="true"
              className="flex--item svg-spot spotLock"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                opacity=".2"
                d="M12 22a2 2 0 0 0-2 2v19a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V26a4 4 0 0 0-4-4H12Zm6 7a5 5 0 1 1 7.67 4.23l.05.35c.15.84.36 1.8.61 2.86A2.06 2.06 0 0 1 24.35 39h-2.7a2.06 2.06 0 0 1-1.98-2.56c.29-1.2.52-2.3.66-3.2l-.19-.14A5 5 0 0 1 18 29Z"
              ></path>
              <path d="M23 24a5 5 0 0 0-2.86 9.1l.2.13c-.15.91-.38 2-.67 3.21A2.06 2.06 0 0 0 21.65 39h2.7c1.32 0 2.3-1.26 1.98-2.56a46.74 46.74 0 0 1-.6-2.86l-.06-.35A5 5 0 0 0 23 24Zm0 2a3 3 0 0 1 1.76 5.43l-.16.11a2 2 0 0 0-.91 2c.16.98.4 2.12.7 3.37.01.05-.02.09-.04.09h-2.7c-.02 0-.05-.04-.04-.09.3-1.25.54-2.4.7-3.36a2 2 0 0 0-.78-1.92l-.13-.09A3 3 0 0 1 23 26ZM12 12.44V18H9a3 3 0 0 0-3 3v21a3 3 0 0 0 3 3h28a3 3 0 0 0 3-3V21a3 3 0 0 0-3-3h-3v-5.56C34 6.2 29.36 1 23 1S12 6.19 12 12.44ZM23 3c5.14 0 9 4.18 9 9.44V18H14v-5.56C14 7.18 17.86 3 23 3ZM9 20h28a1 1 0 0 1 1 1v21a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V21a1 1 0 0 1 1-1Z"></path>
            </svg>
          </Stack>
          <Typography
            sx={{
              color: "#000",
              textAlign: "center",
              margin: { xs: "20px 0", sm: "0", lg: "0" },
            }}
          >
            Build a <a style={{ fontWeight: "550" }}>private community</a> to
            share technical or non-technical knowledge.
          </Typography>
          <Stack
            sx={{
              width: "200px",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 0",
              borderRadius: "5px",
              border: "1px solid #3399ff",
              color: "#3399ff",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            Create a free Team
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};
Home.Layout = MainLayout;
export default Home;
