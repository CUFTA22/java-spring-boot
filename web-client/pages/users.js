import { AddRegular, BriefcaseRegular, SearchRegular } from "@fluentui/react-icons";
import { ActionIcon, Center, Container, Grid, TextInput, useMantineTheme } from "@mantine/core";
import React, { useEffect, useState } from "react";
import useDepartmentApi from "../api/department";
import useUserApi from "../api/user";
import { FeatureCard } from "../components/Card/Card";
import AppLayout from "../components/Layout/AppLayout";

const Departments = () => {
  const { createUser, deleteUserById, getAllUsers, getUserById, updateUser } = useUserApi();

  const [users, setUsers] = useState([]);

  const [newFName, setNewFName] = useState("");
  const [newLName, setNewLName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const theme = useMantineTheme();

  const fetchUsers = async () => {
    return getAllUsers().then((res) => setUsers(res));
  };

  const createNewUser = async () => {
    if (!newEmail || !newFName || !newLName) return;

    createUser({
      firstName: newFName,
      lastName: newLName,
      email: newEmail,
      departmentId: 1,
    }).then((res) => {
      setUsers([...users, res]);
      // fetchDepartments();
    });
  };

  const deleteUser = async (id) => {
    if (!id) return;

    return deleteUserById(id).then(() => fetchUsers());
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AppLayout>
      <Container>
        <Center mt="xl">
          <TextInput
            radius="sm"
            size="md"
            placeholder="First name"
            rightSectionWidth={42}
            value={newFName}
            onChange={(e) => setNewFName(e.target.value)}
            mr="md"
          />

          <TextInput
            radius="sm"
            size="md"
            placeholder="Last name"
            rightSectionWidth={42}
            value={newLName}
            onChange={(e) => setNewLName(e.target.value)}
            mr="md"
          />

          <TextInput
            radius="sm"
            size="md"
            placeholder="Email"
            rightSectionWidth={42}
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            mr="md"
          />

          <ActionIcon size={32} radius="sm" color={theme.primaryColor} variant="filled" onClick={createNewUser}>
            <AddRegular fontSize={18} />
          </ActionIcon>
        </Center>

        <Center mt="xl">
          <Grid grow>
            {users?.length
              ? users?.map((d) => (
                  <Grid.Col span={4}>
                    <FeatureCard
                      key={d?.id}
                      id={d?.userId}
                      title={d?.firstName + " " + d?.lastName}
                      description={d?.email}
                      text={"DepartmentID: " + d?.departmentId}
                      deleteFn={(id) => deleteUser(id)}
                    />
                  </Grid.Col>
                ))
              : null}
          </Grid>
        </Center>
      </Container>
    </AppLayout>
  );
};

export default Departments;
