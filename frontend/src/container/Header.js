import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import logoIcon from "../static/images/logo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "CV",
    href: "/cv",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  // {
  //   label: "Blogs",
  //   href: "/blogs",
  // },
];

const useStyles = makeStyles(() => ({
  header: {
    paddingRight: "4rem",
    paddingLeft: "7rem",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontWeight: 600,
    textAlign: "left",
  },
  icon: {
    marginLeft: "2rem",
  },
  menuButton: {
    fontWeight: 700,
    marginLeft: "2rem",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "1.25rem 1.875rem",
  },
}));

export default function Header() {
  const { header, icon, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {myLogo}
        <div>{getMenuButtons()}</div>
        {icons}
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",

            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{myLogo}</div>
        <div>{icons}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,

            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };
  const history = useHistory();

  const myLogo = (
    // <Button
    //   size="large"
    //   className={logo}
    //   component={Link}
    //   to="/"
    //   disableElevation
    //   disableFocusRipple
    //   disableRipple
    // >
    //   <IconButton>
    //     <img src={logoIcon} alt="my logo" height={25} width={25} />
    //   </IconButton>
    //   Shikai Jin
    // </Button>
    <Stack
      direction={"row"}
      onClick={() => {
        history.push("/");
      }}
    >
      <img
        src={logoIcon}
        alt="my logo"
        style={{ width: 36, height: 36, marginInline: "1rem" }}
      />

      <Typography
        style={{ cursor: "pointer", fontSize: "25px", color: "black" }}
        // variant="h6"
        noWrap
      >
        Shikai Jin
      </Typography>
    </Stack>
  );

  const icons = (
    <IconButton
      margin="auto"
      aria-label="github"
      href="https://github.com/shikaijin"
      className={icon}
    >
      <GitHubIcon />
    </IconButton>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          variant="text"
          style={{ fontSize: "20px", marginInline: "1rem", color: "black" }}
          {...{
            key: label,
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header} style={{ background: "white" }} elevation={0}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
