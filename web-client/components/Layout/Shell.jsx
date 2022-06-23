import React, { useState } from "react";

import { AppShell } from "@mantine/core";

import Header from "../Header/Header";

import NavBar from "../NavBar/NavBar";
import { HEADER_HEIGHT } from "../Header/Header.styles";

const Shell = ({ links, children }) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <AppShell
      // padding="md"
      fixed
      navbar={<NavBar isOpen={isOpen} links={links} />}
      header={<Header isOpen={isOpen} setOpen={setOpen} />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
          minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
          overflowY: "scroll",
        },
        root: {
          height: `100vh`,
          overflow: "hidden",
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default Shell;
