import { baseFetch } from "./base";

const useDepartmentApi = () => {
  const getAllDepartments = async () => baseFetch("/departments", { method: "GET" });

  const getDepartmentById = async (id) => baseFetch("/departments/" + id, { method: "GET" });

  const deleteDepartmentById = async (id) => baseFetch("/departments/" + id, { method: "DELETE" });

  const createDepartment = async (dep) => {
    return baseFetch("/departments", {
      method: "POST",
      body: JSON.stringify(dep),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const updateDepartment = async (dep) => {
    return baseFetch("/departments/" + dep.id, {
      method: "PATCH",
      body: JSON.stringify(dep),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return {
    getAllDepartments,
    getDepartmentById,
    createDepartment,
    deleteDepartmentById,
    updateDepartment,
  };
};

export default useDepartmentApi;
