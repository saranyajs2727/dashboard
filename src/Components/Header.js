import {
    AddShoppingCart,
    Dashboard,
    ExpandLess,
    ExpandMore,
    Home,
    People,
    PeopleAlt,
    Receipt,
    ReceiptLong,
    ShoppingBag,
    ShoppingCart,
    StarBorder,
  } from "@mui/icons-material";
  import MenuIcon from "@mui/icons-material/Menu";
  import InboxIcon from "@mui/icons-material/MoveToInbox";
  import { Collapse, Link, ListItemButton } from "@mui/material";
  import AppBar from "@mui/material/AppBar";
  import Box from "@mui/material/Box";
  import CssBaseline from "@mui/material/CssBaseline";
  import Divider from "@mui/material/Divider";
  import Drawer from "@mui/material/Drawer";
  import IconButton from "@mui/material/IconButton";
  import List from "@mui/material/List";
  import ListItem from "@mui/material/ListItem";
  import ListItemIcon from "@mui/material/ListItemIcon";
  import ListItemText from "@mui/material/ListItemText";
  import Toolbar from "@mui/material/Toolbar";
  import Typography from "@mui/material/Typography";
  import * as React from "react";
  
  const drawerWidth = 200;
  
  function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [openItem, setOpenItem] = React.useState(false);
    const [openSales, setOpenSales] = React.useState(false);
    const [openPurchases, setOpenPurchases] = React.useState(false);
  
    const handleClickItems = () => {
      setOpenItem(!openItem);
    };
    const handleClickSales = () => {
      setOpenSales(!openSales);
    };
    const handleClickPurchases = () => {
      setOpenPurchases(!openPurchases);
    };
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div style={{ backgroundColor: "blue" ,height:"100%",color:"white",fontWeight:"bold"}}>
        <Toolbar />
        <Divider />
        <List>
          <ListItem button component={Link} href="/">
            <ListItemIcon style={{color:"white"}}>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItemButton onClick={handleClickItems}>
            <ListItemIcon style={{color:"white"}}>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Items" />
            {openItem ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openItem} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} href="/items">
                <ListItemIcon style={{color:"white"}}>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Items" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <ListItem button component={Link} href="/banking">
          <ListItemIcon style={{color:"white"}}>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Banking" />
        </ListItem>
        <Divider />
        <List>
          <ListItemButton onClick={handleClickSales}>
            <ListItemIcon style={{color:"white"}}>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Sales" />
            {openSales ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSales} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} href="/customer">
                <ListItemIcon style={{color:"white"}}>
                  <PeopleAlt />
                </ListItemIcon>
                <ListItemText primary="Customers" style ={{color:"white",fontSize:30}} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} href="/estimate">
                <ListItemIcon style={{color:"white"}}>
                  <Receipt />
                </ListItemIcon>
                <ListItemText primary="Estimates" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} href="/sales">
                <ListItemIcon style={{color:"white"}}>
                  <AddShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Sale Orders" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} href="/invoices">
                <ListItemIcon style={{color:"white"}}>
                  <ReceiptLong />
                </ListItemIcon>
                <ListItemText primary="Invoices" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClickPurchases}>
            <ListItemIcon style={{color:"white"}}>
              <ShoppingBag />
            </ListItemIcon>
            <ListItemText primary="Purchases" />
            {openPurchases ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openPurchases} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} href="/vendor">
                <ListItemIcon style={{color:"white"}}>
                  <People />
                </ListItemIcon>
                <ListItemText primary="Vendors" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} href="/purchase">
                <ListItemIcon style={{color:"white"}}>
                  <Receipt />
                </ListItemIcon>
                <ListItemText primary="Purchase Orders" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
    );
  
    const container =
      window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{ backgroundColor: "blue" }}
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            height: "60px",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{ color: "black"}}
            >
              DashBoard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 150,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    );
  }
  
  export default Header;