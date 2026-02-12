import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import DashboardCustomizeSharpIcon from '@mui/icons-material/DashboardCustomizeSharp';
import FlagSharpIcon from '@mui/icons-material/FlagSharp';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Link, useLocation} from 'react-router'


export default function Menu() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const location = useLocation()
  const path = location.pathname
  console.log(path)

  return (
    <>
    
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Football clubs
        </ListSubheader>
      }
    >
     
    
      <ListItemButton onClick={handleClick} component={Link} to="/" selected={path === "/"}>
        <ListItemIcon>
          <DashboardCustomizeSharpIcon />
        </ListItemIcon>
        <ListItemText primary="All clubs" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FlagSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Ethiopia" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FlagSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Argentina" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FlagSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Brazi" />
          </ListItemButton>

        </List>
      </Collapse>
    </List>

    <List
    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
    <ListSubheader component="div" id="nested-list-subheader">
        Creating records
    </ListSubheader>
    }
    >


    <ListItemButton component={Link} to="/create" selected={path === "/create"}>
        <ListItemIcon>
            <AddBoxSharpIcon />
        </ListItemIcon>
        <ListItemText primary="Create clubs" />
    </ListItemButton>
    
    </List>

    </>
  );
}