import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Dashboard as DashboardIcon,
  ExpandMore,
  ExpandLess,
  House,
  ChildFriendlyRounded,
  BadgeRounded,
  School,
  Streetview,
  Psychology as PsychologyIcon,
  SportsKabaddi,
  FileCopy,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

const drawerWidth = 280;

const Sidebar = ({ open, handleClick, open2, handleClickAttendance, handleLogout }) => {
  return (
    <Drawer
      className="no-print"
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        {/* Home */}
        <ListItem button component={Link} sx={{ color: "black" }} to="/home">
          <ListItemIcon>
            <House sx={{ fontSize: 29, marginLeft: "-6%" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        {/* Dashboards */}
        <ListItem button onClick={handleClick} sx={{ color: "black" }}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboards" />
          <ListItemIcon sx={{ marginLeft: "10rem" }}>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button component={Link} to="/personalinfo" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <ChildFriendlyRounded />
              </ListItemIcon>
              <ListItemText primary="Personal Information" />
            </ListItem>

            <ListItem button component={Link} to="/childreninfo" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <ChildFriendlyRounded />
              </ListItemIcon>
              <ListItemText primary="Children Information" />
            </ListItem>

            <ListItem button component={Link} to="/college" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <School />
              </ListItemIcon>
              <ListItemText primary="College Information" />
            </ListItem>

            <ListItem button component={Link} to="/otherskills" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <ChildFriendlyRounded />
              </ListItemIcon>
              <ListItemText primary="Other Skills" />
            </ListItem>

            <ListItem button component={Link} to="/workexperience" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <ChildFriendlyRounded />
              </ListItemIcon>
              <ListItemText primary="Work Experience" />
            </ListItem>

            <ListItem button component={Link} to="/vocational" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <Streetview />
              </ListItemIcon>
              <ListItemText primary="Vocational" />
            </ListItem>

            <ListItem button component={Link} to="/learningdev" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <PsychologyIcon />
              </ListItemIcon>
              <ListItemText primary="Learning and Development" />
            </ListItem>

            <ListItem button component={Link} to="/voluntarywork" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <SportsKabaddi />
              </ListItemIcon>
              <ListItemText primary="Voluntary Work" />
            </ListItem>

            <ListItem button component={Link} to="/eligibility" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <BadgeRounded />
              </ListItemIcon>
              <ListItemText primary="Eligibility" />
            </ListItem>
          </List>
        </Collapse>

        {/* Attendance Records */}
        <ListItem button onClick={handleClickAttendance} sx={{ color: "black" }}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Records" />
          <ListItemIcon sx={{ marginLeft: "10rem" }}>{open2 ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
        </ListItem>

        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button component={Link} to="/view_attendance" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <BadgeRounded />
              </ListItemIcon>
              <ListItemText primary="View Attendance" />
            </ListItem>

            <ListItem button component={Link} to="/search_attendance" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <BadgeRounded />
              </ListItemIcon>
              <ListItemText primary="Search Attendance" />
            </ListItem>

            <ListItem button component={Link} to="/daily_time_record" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <BadgeRounded />
              </ListItemIcon>
              <ListItemText primary="Daily Time Record" />
            </ListItem>

            <ListItem button component={Link} to="/attendance_summary" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <BadgeRounded />
              </ListItemIcon>
              <ListItemText primary="Attendance Summary" />
            </ListItem>

            <ListItem button component={Link} to="/official_time" sx={{ color: "black" }}>
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <BadgeRounded />
              </ListItemIcon>
              <ListItemText primary="Official Time Form" />
            </ListItem>
          </List>
        </Collapse>

        {/* PDS Files */}
        <ListItem button component={Link} sx={{ color: "black" }} to="/pdsfile">
          <ListItemIcon>
            <FileCopy />
          </ListItemIcon>
          <ListItemText primary="Datasheet Files" />
        </ListItem>

        {/* Settings */}
        <ListItem button component={Link} sx={{ color: "black" }} to="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>

        {/* Logout */}
        <ListItem button sx={{ cursor: "pointer" }} onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
