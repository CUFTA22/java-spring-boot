import React from "react";
import { Card, Image, Text, Group, Badge, Button, ActionIcon, createStyles, useMantineTheme } from "@mantine/core";
import { DeleteRegular } from "@fluentui/react-icons";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

export function FeatureCard({ title, description, text, id, deleteFn }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section className={classes.section} mt="sm">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {title}
          </Text>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>

        <Text size="sm" mt="xs">
          {text}
        </Text>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Edit card
        </Button>

        <ActionIcon variant="default" radius="md" size={36} onClick={() => deleteFn(id)}>
          <DeleteRegular fontSize={18} className={classes.like} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
