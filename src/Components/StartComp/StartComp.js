import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.png";
import Button from "@mui/material/Button";

function startComp() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="100vh"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        minHeight="350px"
      >
        <Box
          component="img"
          sx={{
            height: 95,
          }}
          alt="Your logo."
          src={logo}
        />
        <Typography align="center" variant="h3" component="div">
          Shopio
        </Typography>
      </Box>
      <Link to="/Products">
      <Button variant="contained" size="medium" color="success">
          Show All Products
      </Button>
      </Link>
    </Box>
  );
}

export default startComp;
