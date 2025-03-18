import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AppBar, Toolbar, createTheme, ThemeProvider, Typography, Box } from "@mui/material";
import axios from "axios";
import ProtectedRoute from "./components/ProtectedRoute";
import Sidebar from "./components/Sidebar"; 
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./pages/Home";
import Unauthorized from "./components/Unauthorized";

const drawerWidth = 280;

function App() {
  const [settings, setSettings] = useState({});
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const location = useLocation(); 

  const handleClick = () => setOpen(!open);
  const handleClickAttendance = () => setOpen2(!open2);

  const fetchSettings = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/settings");
      setSettings(response.data);
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  

  return (
    <ThemeProvider theme={createTheme({ typography: { fontFamily: "Poppins, sans-serif" } })}>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", overflow: "hidden" }}>
        
        <AppBar position="fixed" sx={{ zIndex: 1201, bgcolor: settings.header_color || "primary" }}>
          <Toolbar>
            {settings.logo_url && (
              <img src={`http://localhost:5000${settings.logo_url}`} alt="Logo" style={{ height: "50px", marginRight: "20px" }} />
            )}
            <Typography variant="h6" noWrap>
              {settings.company_name || "Organization Name"}
            </Typography>
          </Toolbar>
        </AppBar>

        {!["/", "/login", "/register"].includes(location.pathname) && (
          <Sidebar open={open} handleClick={handleClick} open2={open2} handleClickAttendance={handleClickAttendance} />
        )}

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, marginLeft: !["/", "/login", "/register"].includes(location.pathname) ? `${drawerWidth}px` : 0 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<ProtectedRoute allowedRoles={["administrator", "superadmin"]}><Home /></ProtectedRoute>} />
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
