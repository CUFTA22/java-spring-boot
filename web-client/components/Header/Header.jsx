import React from "react";

import { Text } from "@mantine/core";
import useStyles from "./Header.styles";

const Header = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.mainSection}>
        <div className={classes.logoWrapper}>
          <div className={classes.logo}>
            <Text>Java Ispit</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
