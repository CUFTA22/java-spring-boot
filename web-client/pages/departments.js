import { AddRegular, BriefcaseRegular, SearchRegular } from "@fluentui/react-icons";
import { ActionIcon, Center, Container, Grid, TextInput, useMantineTheme } from "@mantine/core";
import React, { useEffect, useState } from "react";
import useDepartmentApi from "../api/department";
import { FeatureCard } from "../components/Card/Card";
import AppLayout from "../components/Layout/AppLayout";

const Departments = () => {
  const { createDepartment, deleteDepartmentById, getAllDepartments, getDepartmentById, updateDepartment } =
    useDepartmentApi();

  const [departments, setDepartments] = useState([]);
  const [newName, setNewName] = useState("");

  const theme = useMantineTheme();

  const fetchDepartments = async () => {
    return getAllDepartments().then((res) => setDepartments(res));
  };

  const createNewDepartment = async () => {
    if (!newName) return;

    createDepartment({
      departmentName: newName,
      departmentAddress: "Random Street, Number",
      departmentCode: newName + "-002",
    }).then((res) => {
      setDepartments([...departments, res]);
      // fetchDepartments();
    });
  };

  const deleteDepartment = async (id) => {
    if (!id) return;

    return deleteDepartmentById(id).then(() => fetchDepartments());
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <AppLayout>
      <Container>
        <Center mt="xl">
          <TextInput
            icon={<BriefcaseRegular fontSize={18} />}
            radius="xl"
            size="md"
            rightSection={
              <ActionIcon
                size={32}
                radius="xl"
                color={theme.primaryColor}
                variant="filled"
                onClick={createNewDepartment}
              >
                <AddRegular fontSize={18} />
              </ActionIcon>
            }
            placeholder="Add department"
            rightSectionWidth={42}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </Center>

        <Center mt="xl">
          <Grid grow>
            {departments?.length
              ? departments?.map((d) => (
                  <Grid.Col span={4}>
                    <FeatureCard
                      key={d?.id}
                      id={d?.departmentId}
                      title={d?.departmentName}
                      description={d?.departmentAddress}
                      text={d?.departmentCode}
                      deleteFn={(id) => deleteDepartment(id)}
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
