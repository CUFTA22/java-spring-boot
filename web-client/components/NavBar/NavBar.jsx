import React from "react";
import { Navbar, ScrollArea } from "@mantine/core";

import { LinksGroup } from "./LinksGroup/LinksGroup";

import useStyles from "./NavBar.styles";

const NavbarNested = ({ links }) => {
  const { classes } = useStyles();

  const linksGroup = links.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar pl="md" pr="md" className={classes.navbar}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <ScrollArea type="scroll">
          <div className={classes.body}>{linksGroup}</div>
        </ScrollArea>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavbarNested;
