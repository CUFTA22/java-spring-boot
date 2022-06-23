import React, { useState } from "react";
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton } from "@mantine/core";
import { ChevronRightRegular } from "@fluentui/react-icons";
import useStyles from "./LinksGroup.styles";
import Link from "next/link";

import { useRouter } from "next/router";

const hasActiveLink = (links, pathname) => {
  return links.find((link) => link.path === pathname) ? true : false;
};

export function LinksGroup({ icon: Icon, label, path, links }) {
  const router = useRouter();
  const { classes, cx } = useStyles();

  const [opened, setOpened] = useState(hasActiveLink(links || [], router.pathname));

  const hasLinks = Array.isArray(links);

  const items = (hasLinks ? links : []).map((link) => (
    <Link href={link.path} key={link.label}>
      <Text className={cx(classes.link, { [classes.linkActive]: link.path === router.pathname })}>{link.label}</Text>
    </Link>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened((o) => !o);
          !hasLinks && router.push(path);
        }}
        className={cx(classes.control, { [classes.controlActive]: path === router.pathname })}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon fontSize={20} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>

          {hasLinks && (
            <ChevronRightRegular
              className={classes.chevron}
              fontSize={14}
              style={{
                transform: opened ? `rotate(90deg)` : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>

      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
