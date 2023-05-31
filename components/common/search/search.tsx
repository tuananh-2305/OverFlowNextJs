import { Stack, Typography } from "@mui/material";
import * as React from "react";

export interface ISearchItemProps {}

export default function SearchItem(props: ISearchItemProps) {
  return (
    <Stack
      sx={{
        position: "absolute",
        width: { xs: "360px", sm: "200%", lg: "100%" },
        background: "#fff",
        top: { xs: "20px", sm: "30px", lg: "30px" },
        borderRadius: "5px",
        boxShadow: "0px 1px 4px 1px #97999b",
        fontSize: "14px",
        right: "0",
        marginLeft: { xs: "-177px", sm: "0", lg: "0" },
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row", lg: "row" },
          padding: "15px",
        }}
      >
        <Stack sx={{ width: { xs: "100%", sm: "50%", lg: "50%" } }}>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            [tag]
            <a
              style={{
                fontSize: "14px",
                color: "#97999b",
                marginLeft: "5px",
              }}
            >
              search within a tag
            </a>
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            user:1234
            <a
              style={{
                fontSize: "14px",
                color: "#97999b",
                marginLeft: "5px",
              }}
            >
              search by author
            </a>
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "words here"
            <a
              style={{
                fontSize: "14px",
                color: "#97999b",
                marginLeft: "5px",
              }}
            >
              exact phrase
            </a>
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            collective: "Name"
            <a
              style={{
                fontSize: "14px",
                color: "#97999b",
                marginLeft: "5px",
              }}
            >
              collective content
            </a>
          </Stack>
        </Stack>
        <Stack sx={{ width: { xs: "100%", sm: "50%", lg: "50%" } }}>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            answers:0
            <a
              style={{
                fontSize: "14px",
                color: "#97999b",
                marginLeft: "5px",
              }}
            >
              unanswered questions
            </a>
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            score:3
            <a
              style={{
                fontSize: "14px",
                color: "#97999b",
                marginLeft: "5px",
              }}
            >
              posts with a 3+ score
            </a>
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            is:question
            <a
              style={{
                fontSize: "14px",
                color: "#97999b",
                marginLeft: "5px",
              }}
            >
              type of posts
            </a>
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            isaccepted:yes
            <Stack
              sx={{
                fontSize: "14px",
                color: "#97999b",
                marginLeft: "5px",
              }}
            >
              search within status
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          borderTop: "0.5px solid #b1b3b4",
          flexDirection: "row",
          padding: "15px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          style={{
            background: "#e6faff",
            border: "1px solid #3399ff",
            padding: "5px",
            fontSize: "12px",
            color: "#3399ff",
            borderRadius: "3px",
          }}
        >
          Ask a question
        </a>
        <Typography sx={{ fontSize: "12px", color: "#3399ff" }}>
          Search help
        </Typography>
      </Stack>
    </Stack>
  );
}
