import { createStyles } from "@mantine/core";
// eslint-disable-next-line import/no-cycle

export const HEADER_HEIGHT = 60;
export const HEADER_BREAKPOINT = 860;

export default createStyles((theme) => ({
  header: {
    // top: 0,
    // left: 0,
    // right: 0,
    height: HEADER_HEIGHT,
    zIndex: 6,
    position: "relative",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[2]}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "var(--removed-scroll-width, 0px)",
  },

  logo: {
    paddingRight: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    height: HEADER_HEIGHT,
    // paddingTop: 6,
    display: "flex",
    alignItems: "center",
  },

  mainSection: {
    display: "flex",
    alignItems: "center",
  },

  logoWrapper: {
    display: "flex",
    alignItems: "center",
    pointerEvents: "all",
  },
}));
