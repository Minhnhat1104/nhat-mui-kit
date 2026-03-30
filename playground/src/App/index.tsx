import React, { ErrorInfo, Suspense } from "react";
import { Box } from "@mui/material";
import LoadingContainer from "@src/components/LoadingContainer";
import { useRoutes } from "react-router-dom";
import publicRoutes from "@playground/routes";
import ThemeCustomization from "@src/components/ThemeCustomization";

import "./index.css";

const App = () => {
  const element = useRoutes(publicRoutes);
  return (
    <>
      <Suspense
        fallback={<LoadingContainer fullHeight sx={{ height: "100vh" }} />}
      >
        <ThemeCustomization color="default">
          <Box sx={{ width: "100vw", height: "100vh", overflowY: "auto" }}>
            {element}
          </Box>
        </ThemeCustomization>
      </Suspense>
    </>
  );
};

export default App;
