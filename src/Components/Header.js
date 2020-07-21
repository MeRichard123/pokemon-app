import React, { useState, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { AppContext } from "../AppContext";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    background: "tomato",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Header() {
  const [searchValue, setSearchVal] = useState("");
  const { setActive, setSearchTerm } = useContext(AppContext);
  const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchValue) {
      setActive(false);
    } else {
      setActive(true);
    }
    setSearchTerm(searchValue);
  }

  function handleChange(e) {
    setSearchVal(e.target.value);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.nav}>
          <Typography variant="h6" noWrap style={{ fontFamily: "Patua One" }}>
            MyDex
          </Typography>
          <div className={classes.search}>
            <form onSubmit={handleSubmit} id="form">
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                placeholder="Search…"
                value={searchValue}
                onChange={handleChange}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
