import { Box} from "@mui/material";

import React from "react";
import { Card } from "../components/Card";
function Courses() {
  return (
    <div className="myBox" sx={{}}>
      <Box  sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        gap: "4px",
        marginTop:"10px"
      }}>
        <Card />
        <Card />
        <Card />
      </Box>
    </div>
  );
}

export default Courses;
