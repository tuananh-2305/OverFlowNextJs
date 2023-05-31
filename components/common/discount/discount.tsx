import { Stack, Typography } from "@mui/material";
import { text } from "node:stream/consumers";
import * as React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";

export interface IDiscountProps {
  tittleDiscount: string;
  priceDiscount: string;
  textDiscount: string;
  textBtnDiscount: string;
  textEndDiscount: string;
  iconDiscount1: any;
  iconDiscount2: any;
  iconDiscount3: any;
  iconDiscount4?: any;
  iconDiscount5?: any;
  iconDiscount6?: any;
  textDiscount1: string;
  textDiscount2: string;
  textDiscount3: string;
  textDiscount4?: string;
  textDiscount5?: string;
  textDiscount6?: string;
  iconAdd?: any;
  textAdd?: string;
  colorDiscount: string;
}

export default function Discount(props: IDiscountProps) {
  const {
    tittleDiscount,
    priceDiscount,
    textDiscount,
    textBtnDiscount,
    textEndDiscount,
    iconAdd,
    iconDiscount1,
    iconDiscount2,
    iconDiscount3,
    iconDiscount4,
    iconDiscount5,
    iconDiscount6,
    textDiscount1,
    textDiscount2,
    textDiscount3,
    textDiscount4,
    textDiscount5,
    textDiscount6,
    textAdd,
    colorDiscount,
  } = props;
  return (
    <Stack
      sx={{
        background: "#fff",
        padding: "25px",
        borderRadius: "5px",
        width: "100%",
        position: "relative",
        height: { sm: "650px", lg: "auto" },
      }}
    >
      {colorDiscount == "#4b4d4e" && (
        <Stack
          sx={{
            flexDirection: "row",
            position: "absolute",
            background: "#f2f2f3",
            color: "#000",
            margin: "-60px 0 0 -25px",
            width: "100%",
            padding: "10px 20px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "12px", fontWeight: "550" }}>
            RECOMMENDED
          </Typography>
          <ApartmentIcon fontSize="small" />
        </Stack>
      )}
      <Stack
        sx={{
          background: colorDiscount,
          padding: "8px 10px",
          borderRadius: "3px",
          margin: "0 auto 8% 0",
          color: colorDiscount == "#d8d9da" ? "black" : "white",
        }}
      >
        {tittleDiscount}
      </Stack>
      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: "600",
          color: "#000",
        }}
      >
        {priceDiscount}
      </Typography>
      <Typography sx={{ color: "#939597", marginBottom: "6%" }}>
        {textDiscount}
      </Typography>
      <Stack
        sx={{
          background: "#cbcccd",
          width: "100%",
          height: "1px",
          marginBottom: "6%",
        }}
      ></Stack>
      <Stack
        sx={{
          color: "#000",
          height: { sm: "370px", lg: "320px" },
          marginBottom: { sm: "5%", lg: "0" },
        }}
      >
        {iconAdd && (
          <Stack sx={{ flexDirection: "row", color: "#939597" }}>
            {iconAdd}
            <Typography sx={{ fontSize: "14px", margin: "0 0 25px 10px" }}>
              {textAdd}
            </Typography>
          </Stack>
        )}
        <Stack sx={{ flexDirection: "row" }}>
          {iconDiscount1}
          <Typography sx={{ fontSize: "14px", margin: "0 0 15px 10px" }}>
            {textDiscount1}
          </Typography>
        </Stack>
        <Stack sx={{ flexDirection: "row" }}>
          {iconDiscount2}
          <Typography sx={{ fontSize: "14px", margin: "0 0 15px 10px" }}>
            {textDiscount2}
          </Typography>
        </Stack>
        <Stack sx={{ flexDirection: "row" }}>
          {iconDiscount3}
          <Typography sx={{ fontSize: "14px", margin: "0 0 15px 10px" }}>
            {textDiscount3}
          </Typography>
        </Stack>
        <Stack sx={{ flexDirection: "row" }}>
          {iconDiscount4}
          <Typography sx={{ fontSize: "14px", margin: "0 0 15px 10px" }}>
            {textDiscount4}
          </Typography>
        </Stack>
        <Stack sx={{ flexDirection: "row" }}>
          {iconDiscount5}
          <Typography sx={{ fontSize: "14px", margin: "0 0 15px 10px" }}>
            {textDiscount5}
          </Typography>
        </Stack>
        <Stack sx={{ flexDirection: "row" }}>
          {iconDiscount6}
          <Typography sx={{ fontSize: "14px", marginLeft: "10px" }}>
            {textDiscount6}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          background: colorDiscount,
          padding: "12px",
          borderRadius: "5px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5%",
          color: colorDiscount == "#d8d9da" ? "black" : "white",
        }}
      >
        {textBtnDiscount}
      </Stack>
      <Typography
        sx={{
          color: "#939597",
          textAlign: "center",
        }}
      >
        {textEndDiscount}
      </Typography>
    </Stack>
  );
}
