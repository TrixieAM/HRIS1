import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { Dashboard as DashboardIcon, ExpandMore, ExpandLess, House, ChildFriendlyRounded, BadgeRounded } from "@mui/icons-material";

const drawerWidth = 280;

const Sidebar = ({ open, handleClick, open2, handleClickAttendance }) => {
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
        <ListItem button component={Link} sx={{ color: "black" }} to="/home">
          <ListItemIcon>
            <House sx={{ fontSize: 29, marginLeft: "-6%" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

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
          </List>
        </Collapse>

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
        
        
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
