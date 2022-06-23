import { createStyles } from "@mantine/core";

import { HEADER_HEIGHT } from "../Header/Header.styles";

export const NAVBAR_WIDTH = 260;
export const NAVBAR_BREAKPOINT = 760;

export default createStyles((theme) => ({
  navbar: {
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    // paddingBottom: 0,

    boxSizing: "border-box",
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    borderRight: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2]}`,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    position: "relative",
    zIndex: 5,
    // top: 0,
    // bottom: 0,
    // left: 0,
    width: NAVBAR_WIDTH,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  body: {
    paddingRight: theme.spacing.xs,
    paddingBottom: theme.spacing.sm,
    paddingLeft: theme.spacing.xs,
    marginTop: theme.spacing.md,
    // paddingTop: theme.spacing.sm,

    // [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
    //   paddingBottom: 120,
    // },
  },
}));
