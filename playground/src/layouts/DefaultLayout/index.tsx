import React, { Suspense } from "react";

import { Box, Container, Stack, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import PageTitle from "../PageTitle";
import Sidebar from "../SideBar";
import LoadingContainer from "@src/components/LoadingContainer";
import SplitView from "@src/components/SplitView";

function DefaultLayout() {
  const theme = useTheme();
  return (
    <SplitView
      leftMinSize={190}
      leftMaxSize={300}
      leftInitSize={240}
      isSplitMode
      leftPane={<Sidebar />}
      rightPane={
        <Stack sx={{ height: 1, flex: 1, minWidth: 0 }}>
          <Header isLogin />

          <Stack
            sx={{
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              background: theme.palette.background.softGrey,
            }}
          >
            <PageTitle />
            <Suspense
              fallback={<LoadingContainer sx={{ flex: 1, minHeight: 0 }} />}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  p: 2,
                  pt: 0,
                  minHeight: 0,
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    overflow: "auto",
                    minHeight: 0,
                  }}
                >
                  <Outlet />
                </Box>
              </Box>
            </Suspense>
          </Stack>
        </Stack>
      }
    />
  );
}

export default DefaultLayout;
