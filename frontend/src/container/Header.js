import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBarCollapse from "../components/AppBarCollapse";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navigation: {},
  avatarBox: {
    marginRight: "1rem",
  },
  appTitle: {
    flexGrow: 1,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <AppBar position="fixed" className={classes.navigation}>
      <Toolbar>
        <Avatar
          aria-label="Menu"
          className={classes.avatarBox}
          src="https://lh3.googleusercontent.com/-_eyJw8vk-PM/WWOblnoZNtI/AAAAAAAABII/M7bToaNOISM724zPXXP_Z8_44rSincERwCEwYBhgLKtQDABHVOhwW8ONAWuJ0fReUL8HdigCofn45rP38onzYTrtt8NKnjcZjFqs4wD-yA6rLYnbGxpbi9nkB9zMLVMkEDdI7sl-DYeQ0sjwAzUNQjAxAlr8gUJ-ijblGo4QllrwSTtFavMIDF14tSVoHvSK6zoM_QwL--7jxrqAWiVWg7JSfKi06UU8o8nIYPDB7AFIcComlkMOqQL1KbhScd67mgf_ix0u7rw_syYPotesa0OAHoB7VqIoWHh3bKzO4B-YyqHp6ZK9QsnMwGez1mjl9k3roR_D658JRQYz0tZfBoHLwc9WW0fs_6OLklaba_0MCBaahPBWmGa5FcO2RfDGf1e-1I91QXhkwZnF0rme7JGsVioc6R9VWH5xhf85aXUKJ-z7Pcv2CIHw7FkjHWXmduvqKTvd49yq3zWaLXoq9vQ9vB2WOGUTuDl4W97y7_ZdQxYDAmZHsiSV2dztnL3XbEig5zcsjqdxdkSfdTCRIRrsIp6DGmThKYSoGJMLbbyC40sADVOHiImtJLYpBOSEBUFuwjCo5qX1SZZOiHpouqh_-V_7XV0hEToU438PnTSoQFNHKoV3w4gIm5E07avpKmtVfKXAjsrvkZxmGXoOlRf305O5kMOSd-okG/w140-h140-p/618db15a13dc5acec5aba7d62b5cb532.jpg"
        />

        <Typography variant="h6" color="inherit" className={classes.appTitle}>
          My Portfolio
        </Typography>
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
