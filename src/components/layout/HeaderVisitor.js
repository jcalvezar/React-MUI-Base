import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { jlogin, jlogout } from "../../services/auth";

export default function HeaderVisitor() {
  const [login, setLogin] = useState({ user: "", pass: "" });

  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Your Company
        </Typography>
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-basic"
            placeholder="Email"
            variant="outlined"
            size="small"
            value={login.user}
            onChange={(e) => {
              setLogin({ ...login, user: e.target.value });
            }}
            InputProps={{ style: { backgroundColor: "white" } }}
          />
          <TextField
            id="outlined-basic"
            placeholder="Password"
            variant="outlined"
            size="small"
            type="password"
            value={login.pass}
            onChange={(e) => {
              setLogin({ ...login, pass: e.target.value });
            }}
            InputProps={{ style: { backgroundColor: "white" } }}
          />
          <Button
            variant="contained"
            color="info"
            onClick={() => {
              jlogin(login);
            }}
          >
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
